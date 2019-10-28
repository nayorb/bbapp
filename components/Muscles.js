import React from 'react'
import images from '../assets/images/muscles/muscles'
import Layout from '../constants/Layout'

import { View, Text, Image } from 'react-native'

const Muscles = props => {
  const muscles = props.muscles
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        borderTopWidth: 1,
        borderTopColor: 'grey',
        marginVertical: 10,
        position: 'relative',
      }}
    >
      <Image
        source={images.main}
        resizeMode="contain"
        style={{
          zIndex: 0,
          width: Layout.window.width,
          height: 240,
        }}
      />
      {Object.keys(muscles).map((muscleTypeKey, index) => (
        <Image
          source={images[muscleTypeKey]}
          resizeMode="contain"
          style={{
            position: 'absolute',
            zIndex: index,
            opacity: 1 - index * 0.2,
            width: Layout.window.width,
            height: 240,
          }}
        />
      ))}
    </View>
  )
}

export default Muscles
