const express = require('express');
const app = express();
const port = 80;
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('error!! : ' + err));

app.get('/', (req, res) => res.send('Hell! 우왕 존나신기하다'));

app.post('/register', (req, res) => {
  // 회원가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 DB에 넣어준다.
  const user = new User(req.body)
  user.save((err, userInfo) => {   // save() : MongoDB 메소드
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })  
});


app.listen(port, () => console.log(`이건 테스트 임 ${port}`));