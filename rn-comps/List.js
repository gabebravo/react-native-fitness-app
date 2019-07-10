import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image, FlatList } from 'react-native'
import { getReviews } from './reviews'

function Review({ name, text, avatar }) {
  return (
    <View style={styles.review}>
      <Image 
        style={styles.avatar}
        source={{uri: avatar}}
      />
      <View style={{ flex: '1', flexWrap: 'wrap' }}>
        <Text style={{ fontSize: 20 }}>{name}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

export default class List extends Component {

  renderItem = ({ item }) => <Review {...item} />

  render() {
    const reviews = getReviews()
    return (
      <View style={styles.container}>
        <FlatList data={reviews} renderItem={this.renderItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  review: {
    margin: 10,
    flexDirection: 'row',
  },
  avatar: {
    width: 50, 
    height: 50,
    borderRadius: 25
  }
})
