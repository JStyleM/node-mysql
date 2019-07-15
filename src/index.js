const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');
const exphbs = require('express-handlebars');


const app = express();

// SETTINGS
app.set('port', process.env.PORT || 3000);
app.engine('.hbs', exphbs({
    
}))


// MIDDLEWARE
app.use(morgan('dev'));
app.use(routes);


// SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);    
});
