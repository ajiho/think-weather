const fs = require('fs');



const data = fs.readFileSync('versions.json', 'utf8');


const versionLinks = JSON.parse(data);
versionLinks['2.4.2'] = 'https://docusaurus-archive-october-2023.netlify.app/docs/2.4.2';

fs.writeFileSync('versions.json', JSON.stringify(versionLinks, null, 2), 'utf8');
