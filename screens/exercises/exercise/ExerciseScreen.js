import React from 'react'
import { ScrollView, StyleSheet, Image, View } from 'react-native'

import Header from '../../../components/Header'
import Mastery from '../../../components/Mastery'
import Muscles from '../../../components/Muscles'
import ExpandableCard from '../../../components/ExpandableCard'

export default function ExerciseScreen(props) {
  const exercise = props.navigation.getParam('exercise')
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          title={exercise.title}
          left={
            <Image
              source={exercise.img}
              style={{
                width: 75,
                height: 75,
                marginLeft: 10,
              }}
            ></Image>
          }
          right={<View style={{ width: 85 }} />}
        />
        <Mastery mastery={exercise.mastery} />
        <Muscles muscles={exercise.muscles} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})
