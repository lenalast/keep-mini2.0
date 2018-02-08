import React from 'react'
import { AccessLayout } from './styled/AccessPage.styled';
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

const AccessPage = () => (
  <AccessLayout>
    <div>
      <RegisterForm/>
      <LoginForm/>
    </div>
  </AccessLayout>
)

export default AccessPage;