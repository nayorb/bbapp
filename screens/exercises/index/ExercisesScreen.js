import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import EXERCISES from '../../../constants/Exercises'

export default function LinksScreen(props) {
  const { navigate } = props.navigation
  return (
    <ScrollView style={styles.container}>
      {EXERCISES.map(exercise => (
        <Text
          onPress={() => navigate('Exercise', { exercise: exercise.title })}
        >
          {exercise.title}
        </Text>
      ))}
    </ScrollView>
  )
}

LinksScreen.navigationOptions = {
  title: 'Links',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
