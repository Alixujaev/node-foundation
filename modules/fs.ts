const fs = require('fs');
const path = require('path');



// For delete file 


// fs.unlink(path.join(__dirname, 'hello.txt'), (err) => {
//   if (err) throw err;

//   console.log('File has been deleted');
  
// });


// For create folder

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw err;

//   console.log('Folder has been created');
  
// })

// For create file 
// fs.writeFile(path.join(__dirname, 'notes', 'hello.txt'), 'Hello, World!', err => {
//   if (err) throw err;

//   console.log('File has been created');

//   // For append (edit) file

//   fs.appendFile(path.join(__dirname, 'notes', 'hello.txt'), '\nHello, Node.js!', err => {
//     if (err) throw err;

//     console.log('File has been updated');
//   })

//   // For read file

//   fs.readFile(path.join(__dirname, 'notes', 'hello.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
  
//     console.log(data);
//   })
// })
