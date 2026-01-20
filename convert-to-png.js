const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG를 PNG로 변환하는 함수
const convertSvgToPng = async (svgFile, pngFile) => {
  try {
    // SVG를 PNG로 변환 (최대 1000x1000 사이즈로)
    await sharp(svgFile, { density: 300 })
      .png()
      .toFile(pngFile);
    console.log(`✓ ${path.basename(svgFile)} → ${path.basename(pngFile)} 변환 완료`);
  } catch (error) {
    console.error(`✗ ${svgFile} 변환 실패:`, error.message);
  }
};

// 이미지 폴더 생성
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('✓ images 폴더 생성됨');
}

// 변환할 SVG 파일들
const conversions = [
  { svg: 'hamburger.svg', png: 'images/hamburger.png' },
  { svg: 'search.svg', png: 'images/search.png' },
  { svg: 'profile.svg', png: 'images/profile.png' },
  { svg: 'cart.svg', png: 'images/cart.png' }
];

// 모든 SVG 파일 변환
(async () => {
  console.log('SVG를 PNG로 변환 중...\n');
  for (const conversion of conversions) {
    await convertSvgToPng(conversion.svg, conversion.png);
  }
  console.log('\n✓ 모든 변환이 완료되었습니다!');
  console.log('HTML을 수정하는 중입니다...');
})();
