import React from 'react'

import { View, Text } from 'react-native'
import COLORS from '../../../constants/Colors'

const Dots = props => {
  const dotsArray = []
  for (let i = 0; i < props.count; i++) {
    dotsArray.push(0)
  }
  const size = props.size || 10
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {dotsArray.map((item, i) => (
        <View
          key={i}
          style={{
            width: size,
            height: size,
            backgroundColor: COLORS.muscle,
            borderRadius: 10,
            marginLeft: 5,
          }}
        ></View>
      ))}
    </View>
  )
}

export default Dots
