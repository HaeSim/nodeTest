const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config/key')
const { User } = require('./models/User')
const { auth } = require('./middleware/auth')

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
//application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('error!! : ' + err))

app.get('/', (req, res) => res.send('Hell! 우왕 존나신기하다'))

app.get('/api/hello', (req, res) => {
  console.log('??')
  res.send('안녕하세용ㅎㅎㅎㅎ~~~')
})

app.post('/api/users/register', (req, res) => {
  // 회원가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 DB에 넣어준다.
  const user = new User(req.body)
  user.save((err, userInfo) => {
    // save() : MongoDB 메소드
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  })
})

app.post('/api/users/login', (req, res) => {
  // 요청한 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      })
    }
    // 요청한 이메일이 데이터베이스에 있다면, 비밀번호도 맞는지 확인한다.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        })

      // 비밀번호까지 같다면, Token을 생성한다.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err)
        // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지
        res
          .cookie('x_auth', user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._Id })
      })
    })
  })
})

app.get('/api/users/auth', auth, (req, res) => {
  //여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication 이 True라는 말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
  })
})

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).send({
      success: true,
    })
  })
})

app.listen(port, () => console.log(`이건 테스트 임 ${port}`))