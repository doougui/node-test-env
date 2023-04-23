import express from 'express';
const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.info(`🚀 HTTP server is running on port 3333`);
});

app.get('/', (req, res) => {
  return res.status(200).send({ msg: 'Hello world!' })
});

export { app };