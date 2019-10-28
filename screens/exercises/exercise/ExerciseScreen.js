import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

import Header from '../../../components/Header'
import Mastery from '../../../components/Mastery'
import Muscles from '../../../components/Muscles'

export default function ExerciseScreen(props) {
  const exercise = props.navigation.getParam('exercise')
  return (
    <ScrollView style={styles.container}>
      <Header title={exercise.title} />
      <Mastery mastery={exercise.mastery} />
      <Muscles muscles={exercise.muscles} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
