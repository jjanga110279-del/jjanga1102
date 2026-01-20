const fs = require('fs');
const path = require('path');

// SVG 데이터 정의
const svgs = {
  'hamburger.svg': `<svg class="header__hamburger" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <rect y="2" width="24" height="2" fill="black" />
    <rect y="11.5" width="24" height="2" fill="black" />
    <rect y="21" width="24" height="2" fill="black" />
  </svg>`,
  
  'search.svg': `<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="8" cy="8" r="6" stroke="black" stroke-width="2" />
    <line x1="12" y1="12" x2="18" y2="18" stroke="black" stroke-width="2" />
  </svg>`,
  
  'profile.svg': `<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="7" r="4" stroke="black" stroke-width="1.5" />
    <path d="M 2 16 Q 2 12 10 12 Q 18 12 18 16" stroke="black" stroke-width="1.5" />
  </svg>`,
  
  'cart.svg': `<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M 2 3 L 4 13 Q 4 14 5 14 L 15 14 Q 16 14 16 13 L 17 5 M 4 5 L 16 5" stroke="black" stroke-width="1.5" fill="none" />
    <circle cx="6" cy="16" r="1" fill="black" />
    <circle cx="14" cy="16" r="1" fill="black" />
  </svg>`
};

// SVG 파일 저장
Object.entries(svgs).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(__dirname, filename), content);
  console.log(`✓ ${filename} 생성됨`);
});

console.log('\n모든 SVG 파일이 생성되었습니다.');
console.log('다음 명령어를 실행하여 PNG로 변환하세요:');
console.log('npm install sharp');
console.log('node convert-to-png.js');
