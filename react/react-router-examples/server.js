/**
 * Created by hugo.queiros on 05/07/16.
 */

var express = require('express');
var rewrite = require('express-urlrewrite');
var path = require('path');
var compression = require('compression');

var app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

var PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
});
