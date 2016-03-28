const express = require('express'),
      app     = express();

app.use(express.static('public'));
const port = process.env.PORT || 3002;
const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App running on http://%s:%s', host, port);
});
