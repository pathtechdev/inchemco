const https = require('https');
const fs = require('fs');
const path = require('path');

// URL of the image to download
const imageUrl = 'https://inchemco.vn/Resources/inchemco/2018/04/02/20180402101858_logo_bt.png';

// Path where the image will be saved
const outputDir = path.join(__dirname, 'public/images/inchemco/brands');
const outputPath = path.join(outputDir, 'btl-logo.png');

// Ensure the directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Download the image
const file = fs.createWriteStream(outputPath);
https.get(imageUrl, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log(`Image downloaded and saved to ${outputPath}`);
  });
}).on('error', (err) => {
  fs.unlink(outputPath, () => {}); // Delete the file if there was an error
  console.error(`Error downloading image: ${err.message}`);
}); 