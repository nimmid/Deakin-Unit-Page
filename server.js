const express = require('express');
const app = express();
app.use(express.json());

app.post('/github-webhook/', (req, res) => {
  console.log('Webhook received:', req.body);
  res.status(200).send('OK');
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
