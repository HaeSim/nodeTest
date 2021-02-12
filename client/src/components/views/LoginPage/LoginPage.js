import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function LoginPage(props) {
  const dispatch = useDispatch()
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const onEmailHandler = event => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value)
  }
  const onSubmitHandler = event => {
    event.preventDefault() //페이지가 refresh되는 것 방지.

    let body = {
      email: Email,
      password: Password,
    }
    dispatch(loginUser(body)).then(response => {
      if (response.payload.loginSuccess) {
        props.history.push('/landing')
      } else {
        alert('Error : 로그인 실패!!')
      }
    })
  }

  const onClickHandler = () => {
    props.history.push('/register')
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <h1 style={{ textAlign: 'center' }}>Login Page</h1>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <Button
          variant="primary"
          type="submit"
          style={{ padding: 10, margin: 1 }}
        >
          Login
        </Button>
        <Button
          variant="success"
          type="button"
          style={{ padding: 10, margin: 1 }}
          onClick={onClickHandler}
        >
          SignUp
        </Button>
      </form>
    </div>
  )
}

export default withRouter(LoginPage)
