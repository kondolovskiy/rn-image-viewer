import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import ImageResize from '../components/ImageResize'
import UserInfo from '../components/UserInfo'
import Button from '../components/Button'
import { logOut } from '../actions'
import { imageUri } from '../constants/Resources'

interface IProps {
  user: any, 
  logOut: () => void
}

function PictureScreen({ user, logOut }: IProps) {

  return (
    <View style={{ width: '80%', alignSelf: 'center', marginTop: 50 }}>
      <UserInfo userId={user.id} />
      <ImageResize 
        uri={imageUri}
      />
      <Button
        onPress={logOut}
        title='Log out'
      />
    </View>
  )
}

const mapStateToProps = (state: any) => {
  const { user } = state
  return {
    user
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logOut: () =>  dispatch(logOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PictureScreen)