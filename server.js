const express = require('express');
const app = express();
app.use(express.static('./dist/newsbee'));
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/newsbee/index.html');
});
app.listen(process.env.PORT || 8080);