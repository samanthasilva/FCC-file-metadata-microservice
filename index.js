var express = require('express');
var cors = require('cors');
var multer = require('multer'); 
require('dotenv').config();

var app = express();
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

var upload = multer({ dest: 'uploads/' });
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado' });
  }
  
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

// Servidor log
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Seu app está ouvindo na porta ' + port);
});
