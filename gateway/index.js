import express from 'express'
import {createProxyMiddleware} from 'http-proxy-middleware'

const app = express();

app.use(
    '/user', createProxyMiddleware({
        target: 'http://127.0.0.1:3001',
        pathRewrite: {
            '^/user': ''
        }
    })
)

app.use(
    '/user', createProxyMiddleware({
        target: 'http://127.0.0.1:3002',
        pathRewrite: {
            '^/user': ''
        }
    })
)

const port = 3000;
app.listen(port, () => {
    console.log(`Gateway Service Listening on http://localhost:${port}`)
})