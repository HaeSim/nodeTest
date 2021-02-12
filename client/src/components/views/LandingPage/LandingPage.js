import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {
  const onClickHandler = () => {
    axios.get('/api/users/logout').then(response => {
      if (response.data.success) {
        props.history.push('/login')
      } else {
        alert('Error : 로그아웃 실패')
      }
    })
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
      <h2 style={{ textAlign: 'center' }}>Welcome to Landing Page</h2>
      <button onClick={onClickHandler}>Logout</button>
    </div>
  )
}
export default withRouter(LandingPage)
