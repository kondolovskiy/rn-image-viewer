import React, { useState } from 'react'
import { View, Animated, ImageLoadEventData, NativeSyntheticEvent } from 'react-native'
import Slider from '@react-native-community/slider'
import Layout from '../../constants/Layout'
import styles from './styles'

const MaxWidth = Layout.window.width * .8
const MinWidth = Layout.window.width * .2

interface IProps {
  uri: string
}

export default function ImageResize({ uri }: IProps) {
  const [sliderValue, setSliderValue] = useState(MaxWidth)
  const [imageAscetRatio, setAspectRatio] = useState(1)

  const handleImageLoad = (e: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { width, height} = e.nativeEvent.source
    const apectRatio = width / height
    setAspectRatio(apectRatio)
  }

  return (
    <View style={styles.wrapper}>
      <View style={{ width: MaxWidth, ...styles.imageContainer }}>
        <Animated.Image 
          source={{
            uri
          }}
          onLoad={e => handleImageLoad(e)}
          style={{
            width: sliderValue,
            height: sliderValue / imageAscetRatio
          }}
        />
      </View>
      
      <Slider
        style={{width: MaxWidth, height: 40}}
        minimumValue={MinWidth}
        maximumValue={MaxWidth}
        step={1}
        value={sliderValue}
        onValueChange={setSliderValue}
        minimumTrackTintColor="#FFAAAA"
        maximumTrackTintColor="#000000"
      />
    </View>
  )
}