import React from 'react'
import { ScrollView, StyleSheet, FlatList } from 'react-native'

import ListItem from '../../../components/ListItem'

export default function CategoryDetailScreen(props) {
  const { navigate } = props.navigation
  const category = props.navigation.getParam('category')
  CategoryDetailScreen.navigationOptions = { title: category.title }
  return (
    <ScrollView style={styles.container}>
      {
        <FlatList
          data={category.exercises}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigate('CategoryDetail', { item })}
            />
          )}
        />
      }
    </ScrollView>
  )
}

// CategoryDetailScreen.navigationOptions = {
//   title: "",
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
})
