import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const RnImage = ({ path = '' }) => {
  return (
    <View>
      <Text style={styles.text}>Image from file</Text>
      <Image 
        style={styles.img}
        source={require('./react-img.png')}
      />
      <View style={{ margin: 10 }} />
      <Text style={styles.text}>Image from url</Text>
      <Image 
        style={styles.img}
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

export default RnImage
