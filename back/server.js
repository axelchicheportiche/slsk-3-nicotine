const express = require('express');
const app = express();
const multer = require('multer');
const port = process.env.PORT || 3000;
const path = require('path');

// Import module app.js
//require('./app')(app);


// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  });
  

// Create multer instance
const upload = multer({ storage: storage });



// Define route for home page
app.get('/', (req, res) => {
    res.send('Welcome to my app');
  });

// Define route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});





// Middleware pour servir les fichiers statiques depuis le répertoire 'public'
app.use(express.static(path.join(__dirname, 'front')));


app.listen(port, () => {
    console.log("Serveur en ligne sur le port " + port);
});