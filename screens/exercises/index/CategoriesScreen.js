import React from 'react'
import { ScrollView, StyleSheet, Image } from 'react-native'
import CATEGORIES from '../../../constants/Categories'

import ListItem from '../../../components/ListItem'
import Header from '../../../components/Header'
import { FlatList } from 'react-native-gesture-handler'
import Colors from '../../../constants/Colors'

export default function CategoriesScreen(props) {
  const { navigate } = props.navigation
  return (
    <ScrollView style={styles.container}>
      {
        <React.Fragment>
          {/* <Header title="Categories" /> */}
          <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                onPress={() => navigate('CategoryDetail', { category: item })}
                icon={<Image source={item.img} style={styles.listItemImage} />}
              />
            )}
          />
        </React.Fragment>
      }
    </ScrollView>
  )
}

CategoriesScreen.navigationOptions = {
  title: 'Categories',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  listItemImage: {
    width: 75,
    height: 75,
  },
})
