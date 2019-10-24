import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import EXERCISES from '../../../constants/Exercises'

export default function ExerciseScreen(props) {
  ExerciseScreen.navigationOptions.title = props.navigation.getParam('exercise')
  return (
    <ScrollView style={styles.container}>
      <Text>{props.navigation.getParam('exercise')}</Text>
    </ScrollView>
  )
}

// ExerciseScreen.navigationOptions = {
//   title: '',
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
