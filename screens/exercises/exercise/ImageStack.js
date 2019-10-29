import React, { useRef } from 'react'
import images from '../../../assets/images/muscles/muscles'
import Layout from '../../../constants/Layout'

import { View, Image } from 'react-native'
import Colors from '../../../constants/Colors'

const { width, height } = Layout.window

const ImageStack = props => {
  const muscles = props.muscles
  const getMusclePartOpacity = (selected, key) => {
    return selected !== null ? (selected === key ? 1 : 0.1) : muscles[key] * 0.2
  }
  return (
    <View
      style={{
        position: 'relative',
        width: (width * (props.width || 100)) / 100,
        height: ((width * (props.width || 100)) / 100) * 0.713,
      }}
    >
      <Image
        source={images.main}
        resizeMode="contain"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        opacity={props.selectedMuscleGroup ? 0.1 : 1}
      />
      {Object.keys(muscles).map((muscleTypeKey, index) => (
        <Image
          key={muscleTypeKey}
          source={images[muscleTypeKey]}
          resizeMode="contain"
          zIndex={index}
          style={{
            opacity: getMusclePartOpacity(
              props.selectedMuscleGroup,
              muscleTypeKey
            ),
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      ))}
    </View>
  )
}

export default ImageStack
