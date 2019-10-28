import React, { Component } from 'react'
import Layout from '../constants/Layout'
const { width, height } = Layout.window

import { StyleSheet, View, Text } from 'react-native'

const ExpandableCard = props => {
	return <View>{props.alwaysContent}</View>
}

export default ExpandableCard

const styles = StyleSheet.create({})
