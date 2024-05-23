import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello From User App')
});

const port = 3001;
app.listen(port, () => {
    console.log(`User Service Listening on http://localhost:${port}`)
})