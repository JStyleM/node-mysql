const express = require('express');
const morgan = require('morgan');
const app = express();

// SETTINGS
app.set('port', process.env.PORT || 3000);


// MIDDLEWARE
app.use(morgan('dev'));


// SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);    
});
