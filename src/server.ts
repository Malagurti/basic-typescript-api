import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => response.json({ message: 'hello' }));

app.listen(3333, () => {
  console.log('Server running on port 3333');
});
