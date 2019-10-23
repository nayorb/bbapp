import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TabBarIcon(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.leftSide}>
            <Ionicons
                name="ios-appstore"
                size={26}
                color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
            <Text style={styles.caption}>{props.title}</Text>
        </View>
        <View>
            <Ionicons
                name="ios-arrow-forward"
                size={26}
                color={Colors.tintColor}
            />
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    caption: {
        marginLeft: 20,
    }
})
