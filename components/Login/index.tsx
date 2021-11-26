import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LabeledInput from '../LabeledInput'
import Button from '../Button'
import styles from './styles'

interface IProps {
  onLogin: (code: string, password: string) => void
}

export default function Login({
  onLogin
}: IProps) {

  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    onLogin(code, password)
  }

  const isLoginAllowed = code.length >= 6 && password.length >= 6

  return (
    <View style={styles.wrapper}>
        <Text style={styles.headerText}>Please Login</Text>
        <LabeledInput
          placeholder="Enter your code"
          label="Code" 
          onChange={setCode} 
          />
        <LabeledInput 
          placeholder="Enter your password"
          label="Password" 
          onChange={setPassword} 
          isSecured={true} 
        />
        <Button 
          onPress={handleLogin} 
          isDisabled={!isLoginAllowed}
          title='Log in'
        />
    </View>
  )
}