import fs from 'node:fs';import path from 'node:path';import {build} from 'esbuild';import {execFileSync} from 'node:child_process';
const homeSource=fs.readFileSync('index.html','utf8');
const seed=JSON.parse(fs.readFileSync('server/seed.json','utf8'));
let seedChanged=false;
for(const record of seed.filter(item=>item.kind==='projects'&&item.data.html)){
  const card=homeSource.match(new RegExp(`<article\\b[^>]*\\bid="${record.id}"[^>]*>[\\s\\S]*?<\\/article>`));
  if(!card)continue;
  if(record.data.html!==card[0]){record.data.html=card[0];seedChanged=true;}
  const image=card[0].match(/<img[^>]*\bsrc="([^"]+)"/);
  if(image&&record.data.image!==image[1]){record.data.image=image[1];seedChanged=true;}
  const github=card[0].match(/href="(https:\/\/github\.com\/[^"?]+)"/);
  if(github&&record.data.link!==github[1]){record.data.link=github[1];seedChanged=true;}
}
if(seedChanged)fs.writeFileSync('server/seed.json',JSON.stringify(seed,null,2)+'\n');
fs.mkdirSync('dist/client',{recursive:true});
for(const item of ['styles.css','script.js','poetry.js','admin.js','admin.css','resume-live.html','resume-live.css','resume-live.js','repo-gallery.js','assets','certificates','poems','Saptarshi_Mandal_DataAnalyst_Resume.pdf'])if(fs.existsSync(item))fs.cpSync(item,path.join('dist/client',item),{recursive:true});
await build({entryPoints:['frontend/carousels.tsx'],bundle:true,minify:true,format:'esm',platform:'browser',target:'es2022',outfile:'dist/client/carousels.js'});
execFileSync(process.execPath,['node_modules/@tailwindcss/cli/dist/index.mjs','-i','frontend/carousel.css','-o','dist/client/carousels.css','--minify'],{stdio:'inherit'});
const templates={home:fs.readFileSync('index.html','utf8'),poetry:fs.readFileSync('poetry.html','utf8'),admin:fs.readFileSync('admin.html','utf8'),cases:Object.fromEntries(fs.readdirSync('case-studies').filter(f=>f.endsWith('.html')).map(f=>['/case-studies/'+f,fs.readFileSync('case-studies/'+f,'utf8')]))};
fs.writeFileSync('server/templates.json',JSON.stringify(templates));
for(const name of ['index.html','poetry.html','admin.html','case-studies']){const target=path.resolve('dist/client',name);if(!target.startsWith(path.resolve('dist/client')+path.sep))throw Error('Invalid build path');fs.rmSync(target,{recursive:true,force:true});}
await build({entryPoints:['server/worker.js'],bundle:true,format:'esm',platform:'browser',target:'es2022',outfile:'dist/server/index.js'});
fs.mkdirSync('dist/.openai',{recursive:true});fs.copyFileSync('.openai/hosting.json','dist/.openai/hosting.json');fs.cpSync('drizzle','dist/.openai/drizzle',{recursive:true});
console.log('Worker, public assets and migrations prepared');
