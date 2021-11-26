import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface IProps {
  userId: string
}

export default function UserInfo({ userId }: IProps) {
  return (
    <View style={styles.wrapper}>
      <Text>id</Text>
      <Text style={styles.idText}>{userId}</Text>
    </View>
  )
}