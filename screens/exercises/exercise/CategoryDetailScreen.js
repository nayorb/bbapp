import React from "react"
import { ScrollView, StyleSheet, Text } from "react-native"

import ListItem from "../../../components/ListItem"

export default function LinksScreen(props) {
  const { navigate } = props.navigation
  const category = props.navigation.getParam("category")
  return (
    <ScrollView style={styles.container}>
      {category.exercises.map(exercise => (
        <ListItem
          title={exercise.title}
          // onPress={() => navigate("Exercise", { exercise: exercise.title })}
          key={exercise.title}
        />
      ))}
    </ScrollView>
  )
}

LinksScreen.navigationOptions = {
  title: "",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 15,
    backgroundColor: "#fff",
  },
})
