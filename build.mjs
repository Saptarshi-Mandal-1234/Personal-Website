import fs from 'node:fs';import path from 'node:path';import {build} from 'esbuild';
fs.mkdirSync('dist/client',{recursive:true});
for(const item of ['index.html','styles.css','script.js','poetry.html','poetry.js','admin.html','admin.js','admin.css','assets','certificates','poems','case-studies','Saptarshi_Mandal_DataAnalyst_Resume.pdf'])if(fs.existsSync(item))fs.cpSync(item,path.join('dist/client',item),{recursive:true});
await build({entryPoints:['server/worker.js'],bundle:true,format:'esm',platform:'browser',target:'es2022',outfile:'dist/server/index.js'});
fs.mkdirSync('dist/.openai',{recursive:true});fs.copyFileSync('.openai/hosting.json','dist/.openai/hosting.json');fs.cpSync('drizzle','dist/.openai/drizzle',{recursive:true});
console.log('Worker, public assets and migrations prepared');
