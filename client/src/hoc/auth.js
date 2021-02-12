import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {
  //null : 아무나 출입이 가능함.
  //true : 로그인한 출입이 가능한 페이지
  //flase : 로그인한 유저는 출입 불가능한 페이지
  function Authenticationcheck(props) {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(auth()).then(response => {
        if (!response.payload.isAuth) {
          //로그인하지않은상태
          if (option) {
            alert('please login :)')
            props.history.push('/login')
          }
        } else {
          //로그인한 상태
          if (adminRoute && !response.payload.isAdmin) {
            alert('please logout :(')
            props.history.push('/landing')
          } else {
            if (!option) {
              alert('please logout :(')
              props.history.push('/landing')
            }
          }
        }
      })
    }, [])
    return <SpecificComponent />
  }

  return Authenticationcheck
}
