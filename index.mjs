import express from 'express';

const app = express();

app.use(express.static('wwwroot'));
app.use('/widget', express.static('../Aurelia-Widget/widget'));
// app.use('/node_modules', express.static('../Aurelia-Widget/node_modules'));

app.listen(3000);