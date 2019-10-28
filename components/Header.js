import React, { Component } from 'react'
import Layout from '../constants/Layout'

import { StyleSheet, View, Text } from 'react-native'

const Header = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: Layout.header.height,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        borderTopWidth: 1,
        borderTopColor: 'red',
      }}
    >
      <Text>{props.title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
