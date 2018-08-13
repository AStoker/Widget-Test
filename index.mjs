import express from 'express';

const app = express();

app.use(express.static('wwwroot'));
app.use('/widget', express.static('../Aurelia-Widget/widget'));

app.listen(3000);