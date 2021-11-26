import React, { useState } from 'react'
import { View } from 'react-native'
import Login from '../../components/Login'
import Loader from '../../components/Loader'
import { connect } from 'react-redux'
import { logIn } from '../../actions'

interface IProps {
  logIn: (code: string, password: string) => void
}

function LoginScreen({
  logIn
}: IProps) {
  const [isLoggining, setLoggining] = useState(false)

  const handleLogin = (code: string, password: string) => {
    setLoggining(true)
    logIn(code, password)
  }

  return (
    <View>
      {isLoggining ? (
        <Loader />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </View>
  )
}


const mapDispatchToProps = (dispatch: any) => {
  return {
    logIn: (code: string, password: string) =>  dispatch(logIn(code, password))
  }
}
export default connect(null, mapDispatchToProps)(LoginScreen)