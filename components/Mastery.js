import React from 'react'
import Colors from '../constants/Colors'

import { View, Text } from 'react-native'

const Mastery = props => {
  const mastery = props.mastery
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 60,
        width: '90%',
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 16,
      }}
    >
      {Object.keys(mastery).map(masteryItemKey => (
        <View
          key={masteryItemKey}
          style={{
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Text
            style={{
              marginBottom: 5,
            }}
          >
            {masteryItemKey.charAt(0).toUpperCase() + masteryItemKey.slice(1)}
          </Text>
          <Text>
            {mastery[masteryItemKey][0]} x {mastery[masteryItemKey][1]}
          </Text>
        </View>
      ))}
    </View>
  )
}

export default Mastery
