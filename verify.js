const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Check asset paths
const srcMatches = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m => m[1]);
console.log('Total links & sources found in HTML:', srcMatches.length);

let missingFiles = [];
srcMatches.forEach(src => {
  if (src.startsWith('http') || src.startsWith('//') || src.startsWith('#') || src.startsWith('mailto:') || src.startsWith('tel:')) {
    return; // Remote or anchor link
  }
  if (src.startsWith('assets/') || src.endsWith('.svg') || src.endsWith('.css') || src.endsWith('.js')) {
    if (!fs.existsSync(path.join(__dirname, src))) {
      missingFiles.push(src);
    }
  }
});
console.log('Missing referenced local files:', missingFiles);

// Check if all element IDs accessed in script.js exist in index.html
const js = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
const idMatches = [...js.matchAll(/document\.getElementById\(['"]([^'"]+)['"]\)/g)].map(m => m[1]);
console.log('Total getElementById calls in script.js:', idMatches.length);

let missingIds = [];
idMatches.forEach(id => {
  if (!html.includes('id="' + id + '"')) {
    missingIds.push(id);
  }
});
console.log('Missing IDs in index.html:', missingIds);

if (missingFiles.length === 0 && missingIds.length === 0) {
  console.log('\n>>> SUCCESS: ALL HTML/JS FILE INTEGRITY CHECKS PASSED WITH 0 ERRORS! <<<');
} else {
  console.error('\n>>> ERROR: Issues found! <<<');
  process.exit(1);
}
