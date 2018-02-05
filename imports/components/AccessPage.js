import React from 'react'
import styled from 'styled-components'
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

const AccessLayout = styled.div`
  display: flex;
  justify-content: center;
`

const AccessPage = () => (
  <AccessLayout>
    <div>
      <RegisterForm/>
      <LoginForm/>
    </div>
  </AccessLayout>
)

export default AccessPage;