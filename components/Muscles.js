import React, { useState, useEffect } from 'react'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'

import { View, Modal, Animated } from 'react-native'
import ImageStack from '../screens/exercises/exercise/ImageStack'
import MuscleDetail from '../screens/exercises/exercise/MuscleDetail'
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const { width, height } = Layout.window

const Muscles = props => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [muscleImageMarginTop] = useState(new Animated.Value(10))

  // useEffect(() => {
  //   const targetValue = isModalVisible ? -125 : 10
  //   Animated.timing(muscleImageMarginTop, {
  //     toValue: targetValue,
  //     duration: 250,
  //   }).start()
  // }, [isModalVisible])

  const showModal = () => {
    // Animated.timing(muscleImageMarginTop, {
    //   toValue: -125,
    //   duration: 250,
    // }).start(() => setIsModalVisible(true))
    setIsModalVisible(true)
  }

  return (
    <Animated.View
      style={{
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 16,
        marginTop: muscleImageMarginTop,
        backgroundColor: '#fff',
      }}
    >
      <TouchableOpacity onPress={() => showModal()}>
        <ImageStack
          muscles={props.muscles}
          width="90"
          selectedMuscleGroup={selectedMuscleGroup}
        />
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        useNativeDriver={false}
      >
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            paddingTop: 20,
          }}
        >
          <View
            style={{
              marginVertical: 10,
              alignItems: 'flex-end',
              width: '100%',
              paddingHorizontal: 20,
            }}
          >
            <Ionicons
              onPress={() => {
                setIsModalVisible(false)
                setSelectedMuscleGroup(null)
              }}
              name="ios-close-circle"
              size={36}
              color="#333"
            />
          </View>
          <TouchableWithoutFeedback>
            <ImageStack
              muscles={props.muscles}
              width="90"
              selectedMuscleGroup={selectedMuscleGroup}
              style={{ marginBottom: 30 }}
            />
          </TouchableWithoutFeedback>
          <MuscleDetail
            muscles={props.muscles}
            selectedMuscleGroup={selectedMuscleGroup}
            handleMuscleGroupSelect={group =>
              setSelectedMuscleGroup(
                group === selectedMuscleGroup ? null : group
              )
            }
          />
        </View>
      </Modal>
    </Animated.View>
  )
}

export default Muscles
