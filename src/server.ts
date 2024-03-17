import express, { Express } from "express";
import { resolve, join } from "path";

const app: Express = express();
app.use(express.static('views'))

app.get('/', (_req, res) => {
    const index = resolve(__dirname, '../views/index.html');

    res.sendFile(index);
})

app.listen(3000, () => {
    console.log('Running server at port 3000')
})
