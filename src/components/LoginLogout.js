import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import loginImg from '../resources/login-img.svg'
const LoginLogout = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="login Image" />
        <h1>File Upload</h1>
        <button onClick={loginWithRedirect}>Login / Sign Up</button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`
export default LoginLogout
