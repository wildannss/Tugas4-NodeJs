let express = require('express');
let apiRoutes = require('./api-routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Tugas4-NodeJs', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
let db = mongoose.connection;

let port = process.env.PORT || 1212;

app.get('/',(req,res) => res.send('Selamat Datang di Data Center Siswa'));
app.use('/api', apiRoutes);

app.listen(port, function(){
    console.log("jalan di port "+port);
});