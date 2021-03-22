import { json } from 'body-parser';
import express, { response } from 'express';

const app = express();

app.use(json);
app.get('/', (request, reponse) => {

    return response.json({ message: "Hello World"});
});

app.listen(3333);