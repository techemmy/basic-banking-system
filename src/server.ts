import express, { Express } from "express";

const app: Express = express();

app.get('/', (_req, res) => {
    res.send('there:now');
})

app.listen(3000, () => {
    console.log('Running server at port 3000')
})
