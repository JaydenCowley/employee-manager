const fs = require('fs');
function writeFile(tempFile)  {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', tempFile, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File has been created!'
            });
        });
    });
}
module.exports = writeFile;