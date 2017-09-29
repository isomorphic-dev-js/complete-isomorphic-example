import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import renderViewMiddleware from './middleware/renderView';

const app = express();

let cartItems;

app.use(bodyParser.json());

app.get('/api/user/cart', (req, res) => {
  fs.readFile('./data/cart.json', 'utf8', (err, data) => {
    if (err) {
      return res.sendStatus(404);
    }
    return res.send(cartItems || JSON.parse(data));
  });
});

app.post('/api/user/cart/add', (req, res) => {
  fs.readFile('./data/cart.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send;
    }
    const cart = cartItems || JSON.parse(data);
    cartItems = {
      items: [
        ...cart.items,
        req.body
      ]
    };
    return res.send('SUCCESS!');
  });
});

app.get('/api/product/:type', (req, res) => {
  fs.readFile('./data/products.json', 'utf8', (err, data) => {
    if (err) {
      return res.sendStatus(404);
    }
    const products = JSON.parse(data);
    const product = products.find((item) => {
      return item.id === req.params.type;
    });
    return res.send(product);
  });
});

app.get('/api/products', (req, res) => {
  fs.readFile('./data/products.json', 'utf8', (err, data) => {
    if (err) {
      return res.sendStatus(404);
    }
    return res.send(JSON.parse(data));
  });
});


app.get('/api/products/categories', (req, res) => {
  fs.readFile('./data/product-categories.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send;
    }
    return res.send(JSON.parse(data));
  });
});

app.get('/api/products/:category', (req, res) => {
  fs.readFile('./data/products.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send;
    }

    const products = JSON.parse(data);
    return fs.readFile('./data/product-category-join.json', 'utf8', (err2, data2) => {
      if (err2) {
        return res.status(404).send;
      }
      const categories = JSON.parse(data2);
      const category = categories.find((item) => {
        return item.id === req.params.category;
      });
      const hydratedProducts = [];
      category.products.forEach((productId) => {
        const details = products.find((product) => {
          return product.id === productId;
        });
        hydratedProducts.push(details);
      });
      const newCategory = {
        ...category,
        products: hydratedProducts
      };
      return res.send(newCategory);
    });
  });
});

app.get('/api/blog', (req, res) => {
  fs.readFile('./data/blog.json', 'utf8', (err, data) => {
    if (err) {
      return res.sendStatus(404);
    }
    return res.send(JSON.parse(data));
  });
});

app.get('/test', (req, res) => {
  res.send('Test route success!');
});

app.post('/analytics', (req, res) => {
  res.send();
});

app.get('/*', renderViewMiddleware);

// setup static files to load css
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log('App listening on port: 3000');
});
