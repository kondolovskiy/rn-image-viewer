import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'

interface IProps {
  label: string,
  onChange: (value: string) => void
  placeholder?: string,
  isSecured?: boolean
}

export default function LabeledInput({ label, onChange, placeholder='', isSecured = false }: IProps) {

  const [value, setValue] = useState('')

  const handleChange = (text: string) => {
    const numbers = text?.replace(/[^0-9]/g, '')
    setValue(numbers)
    onChange(numbers)
  }

  return (
    <View style={styles.wrapper}>
      <Text>{label}</Text>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        keyboardType = 'numeric' 
        secureTextEntry={isSecured}
        onChangeText={handleChange}
        value={value}
      />
    </View>
  )
}