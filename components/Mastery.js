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
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        borderTopWidth: 1,
        borderTopColor: 'grey',
        marginVertical: 10,
      }}
    >
      {Object.values(mastery).map(masteryItem => (
        <React.Fragment>
          <Text>{masteryItem[0]}</Text>
          <Text> x </Text>
          <Text>{masteryItem[1]}</Text>
        </React.Fragment>
      ))}
    </View>
  )
}

export default Mastery
