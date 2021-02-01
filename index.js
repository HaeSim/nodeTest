const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cheoljin:cjfwls225!@haesim.etl5w.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('error!! : ' + err));


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`이건 테스트 임 ${port}`));