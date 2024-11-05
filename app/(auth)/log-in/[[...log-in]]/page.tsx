import LoginForm from '@/components/login-form'
import Onboarding from '@/components/onboarding'
import React from 'react'

const LogInPage = () => {
  return (
    <div className='login'>
        <div className='onboarding'>
            <Onboarding/>
        </div>
        <div className='form'>
            <LoginForm/>
        </div>
    </div>
  )
}

export default LogInPage