var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080


app.get('/', function(req, res) {
    res.send('loaded')
})
app.get('/api/articles', function(req, res) {
    res.send('articles will go here.')
})

app.listen(PORT, function() {
    console.log(`listening on port: ${PORT}`)
});