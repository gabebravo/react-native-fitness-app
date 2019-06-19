import React from 'react';
import {
  View, Text, StyleSheet,
  TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, // ANDROID ONLY : TouchableNativeFeedback
} from 'react-native';
import AddEntry from './components/AddEntry'

class App extends React.Component {

  handlePress = () => {
    alert('hello world');
  };

  handlePressNada = () => {
    return
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.btn} onPress={this.handlePressNada} underlayColor='#0000ff'>
          <Text style={styles.btnText}>Touchable Highlight</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Touchable Opacity</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Touchable WoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#E53224',
    marginBottom: 75,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  }
})