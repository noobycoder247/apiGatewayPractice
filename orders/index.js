import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello From Order App')
});

const port = 3002;
app.listen(port, () => {
    console.log(`Order Service Listening on http://localhost:${port}`)
})