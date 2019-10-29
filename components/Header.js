import React, { Component } from 'react'
import Layout from '../constants/Layout'

import { StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/Colors'

const Header = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        height: Layout.header.height,
      }}
    >
      {props.left}
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
        }}
      >
        {props.title}
      </Text>
      {props.right}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
