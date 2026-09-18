import fs from 'node:fs';import path from 'node:path';import {build} from 'esbuild';
fs.mkdirSync('dist/client',{recursive:true});
for(const item of ['styles.css','script.js','poetry.js','admin.js','admin.css','assets','certificates','poems','Saptarshi_Mandal_DataAnalyst_Resume.pdf'])if(fs.existsSync(item))fs.cpSync(item,path.join('dist/client',item),{recursive:true});
const templates={home:fs.readFileSync('index.html','utf8'),poetry:fs.readFileSync('poetry.html','utf8'),admin:fs.readFileSync('admin.html','utf8'),cases:Object.fromEntries(fs.readdirSync('case-studies').filter(f=>f.endsWith('.html')).map(f=>['/case-studies/'+f,fs.readFileSync('case-studies/'+f,'utf8')]))};
fs.writeFileSync('server/templates.json',JSON.stringify(templates));
for(const name of ['index.html','poetry.html','admin.html','case-studies']){const target=path.resolve('dist/client',name);if(!target.startsWith(path.resolve('dist/client')+path.sep))throw Error('Invalid build path');fs.rmSync(target,{recursive:true,force:true});}
await build({entryPoints:['server/worker.js'],bundle:true,format:'esm',platform:'browser',target:'es2022',outfile:'dist/server/index.js'});
fs.mkdirSync('dist/.openai',{recursive:true});fs.copyFileSync('.openai/hosting.json','dist/.openai/hosting.json');fs.cpSync('drizzle','dist/.openai/drizzle',{recursive:true});
console.log('Worker, public assets and migrations prepared');
