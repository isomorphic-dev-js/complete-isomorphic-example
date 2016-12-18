import express from 'express';
import fs from 'fs';
import renderViewMiddleware from './middleware/renderView';

const app = express();

// setup static files to load css
app.use(express.static(__dirname));

app.get('/api/user/cart', (req, res) => {
  fs.readFile('./data/cart.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send;
    }
    return res.send(JSON.parse(data));
  });
});

app.get('/api/products/:type', (req, res) => {
  fs.readFile('./data/products.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send;
    }
    const products = JSON.parse(data);
    return res.send(products[req.params.type].items);
  });
});

app.get('/api/products', (req, res) => {
  fs.readFile('./data/products.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send;
    }
    return res.send(JSON.parse(data));
  });
});

app.get('/api/blog', (req, res) => {
  fs.readFile('./data/blog.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send;
    }
    return res.send(JSON.parse(data));
  });
});

app.get('/test', (req, res) => {
  res.send('Test route success!');
});

app.get('/*', renderViewMiddleware);

app.listen(3000, () => {
  console.log('App listening on port: 3000');
});
