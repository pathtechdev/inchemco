const https = require('https');
const fs = require('fs');
const path = require('path');

// URL of the image to download (placeholder since actual URL isn't visible in website content)
const imageUrl = 'https://inchemco.vn/Resources/admin/2017/03/07/20170307211818_BTL-6000-FSWT.jpg';

// Path where the image will be saved
const outputDir = path.join(__dirname, 'public/images/products/shock-wave');
const outputPath = path.join(outputDir, 'btl-6000-fswt.jpg');

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