import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'
import { useSelector } from 'react-redux'

function LandingPage(props) {
  const user = useSelector(state => state.user)

  const onClickHandler = () => {
    axios.get('/api/users/logout').then(response => {
      if (response.data.success) {
        props.history.push('/login')
      } else {
        alert('Error : 로그아웃 실패')
      }
    })
  }
  let name = ''
  if (user.userData.email) {
    name = user.userData.email.split('@')[0]
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Hi! {name}</h1>
      <h2 style={{ textAlign: 'center' }}>Welcome to Landing Page</h2>
      <Button danger onClick={onClickHandler}>
        Logout
      </Button>
    </div>
  )
}
export default withRouter(LandingPage)
