const { User } = require('../models/User')

let auth = (req, res, next) => {
  //인증처리를 여기서 한다.
  //Client Cookie에서 Token을 가져온다.
  if (!req.headers.cookie) return
  let token = req.headers.cookie.split('x_auth=')[1]
  //Token을 Decode한 후 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err
    if (!user) return res.json({ isAuth: false, error: true })

    //이렇게 req에 넣어주는 이유는 next() 이후에도 계속 가져와서 사용할 수 있도록 하기 위함임.
    req.token = token
    req.user = user
    next() // 미들웨어에서 다음으로 계속 갈 수 있도록.
  })
  //유저가 있으면 인증 OKay

  //유저가 없으면 인증 NO
}

module.exports = { auth }
