import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import ImageResize from '../components/ImageResize'
import UserInfo from '../components/UserInfo'
import Button from '../components/Button'
import { logOut } from '../actions'

interface IProps {
  user: any, 
  logOut: () => void
}

function PictureScreen({ user, logOut }: IProps) {

  return (
    <View style={{ width: '80%', alignSelf: 'center', marginTop: 50 }}>
      <UserInfo userId={user.id} />
      <ImageResize 
        uri='https://images.theconversation.com/files/65817/original/image-20141128-9776-1bxwzxm.jpg?ixlib=rb-1.1.0&rect=106%2C65%2C841%2C657&q=45&auto=format&w=926&fit=clip'
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