const express = require('express');
const app = express();
const axios = require('axios');

const cors = require('cors')
app.use(cors())

app.get('/cryptocurrencies', (_, res) => {
  axios({
    url: "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10",
    headers: {
      'X-CMC_PRO_API_KEY': 'd1d3f233-fe23-426c-9bfc-45f1cb8b31df',
    },
    method: "get",
  })
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});