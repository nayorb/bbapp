import React, { useState } from 'react'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'

import { View, Text, ImageBackground, Image } from 'react-native'
import ImageStack from '../screens/exercises/exercise/ImageStack'
import MuscleDetail from '../screens/exercises/exercise/MuscleDetail'

const { width, height } = Layout.window

const Muscles = props => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null)

  return (
    <View
      style={{
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 16,
        marginTop: 10,
      }}
    >
      <ImageStack
        muscles={props.muscles}
        width="90"
        selectedMuscleGroup={selectedMuscleGroup}
      />
      <MuscleDetail
        muscles={props.muscles}
        selectedMuscleGroup={selectedMuscleGroup}
        handleMuscleGroupSelect={group =>
          setSelectedMuscleGroup(group === selectedMuscleGroup ? null : group)
        }
      />
    </View>
  )
}

export default Muscles
