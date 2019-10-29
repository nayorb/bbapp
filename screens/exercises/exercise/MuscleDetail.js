import React from 'react'

import { View, Text } from 'react-native'
import Dots from './Dots'
import muscleNames from '../../../constants/Muscles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../../constants/Colors'

const MuscleDetail = props => {
  const muscles = props.muscles
  return (
    <View
      style={{
        width: '100%',
      }}
    >
      {Object.keys(muscles).map(muscleKey => (
        <TouchableOpacity
          onPress={() => props.handleMuscleGroupSelect(muscleKey)}
          key={muscleKey}
          style={{
            height: 40,
            width: '100%',
            backgroundColor:
              props.selectedMuscleGroup === muscleKey ? Colors.grey : null,
            borderRadius: 8,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              flex: 1,
            }}
          >
            <Text>{muscleNames[muscleKey]}</Text>
            <Dots count={muscles[muscleKey]} size={7} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default MuscleDetail
