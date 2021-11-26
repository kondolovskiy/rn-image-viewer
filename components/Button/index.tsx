import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

interface IProps {
  onPress: (...args: any[]) => void,
  title: string,
  isDisabled?: boolean
}

export default function Button({ onPress, title, isDisabled = false }: IProps) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      disabled={isDisabled}
      style={[styles.button, isDisabled && styles.buttonDisabled]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}