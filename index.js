import express from 'express';

const app = express();
const port = process.env.PORT || 2323;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello 😀'
  });
});

app.get('/test', (req, res) => {
  res.json({
    message: 'Welcome to the test route.'
  });
});

app.listen(port, () => {
  console.log('App is running')
});