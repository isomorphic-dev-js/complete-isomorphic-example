import express from 'express';
import renderViewMiddleware from './middleware/renderView';

const app = express();

app.get('/test', (req, res) => {
  res.send('Test route success!');
});

app.get('/*', renderViewMiddleware);

app.listen(3000, () => {
  console.log('App listening on port: 3000');
});
