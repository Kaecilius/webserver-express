const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    //res.send('Hola mundo');
    /*let salida = {
        nombre: 'alex',
        edad: 23,
        url: req.url
    };*/
    res.render('home', {
        nombre: 'Alex YoLo'
    });
});

app.get('/about', function(req, res) {

    res.render('about');

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port}`);
});