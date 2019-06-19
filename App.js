import React from 'react';
import {
  View, Text, StyleSheet,
  TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import AddEntry from './components/AddEntry'

class App extends React.Component {

  handlePress = () => {
    return
    // alert('hello world');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='#0000ff'>
          <Text style={styles.btnText}>Touchable Highlight</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>Touchable Opacity</Text>
        </TouchableOpacity>
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