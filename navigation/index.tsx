import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/Login'
import PictureScreen from '../screens/Picture'

import { connect } from 'react-redux'

const Stack = createNativeStackNavigator()

function Navigation({ user }: any) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user.isLoggedIn ? (
          <Stack.Screen name="Picture" component={PictureScreen} options={{ headerShown: false }}  />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const mapStateToProps = (state: any) => {
  const { user } = state
  return {
    user
  }
}


export default connect(mapStateToProps)(Navigation)
