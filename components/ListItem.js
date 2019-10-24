import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function TabBarIcon(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.leftSide}>
        <View style={styles.listItemImage}>{props.icon}</View>
        <Text style={styles.caption}>{props.title}</Text>
      </View>
      <View>
        <Ionicons name="ios-arrow-forward" size={26} color={'#202020'} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemImage: {
    borderRadius: 12,
    shadowColor: '#202020',
    shadowRadius: 32,
  },
})
