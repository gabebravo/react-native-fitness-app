import React, { Component } from 'react'
import { Image, View, StyleSheet, Switch, TextInput, KeyboardAvoidingView } from 'react-native'

export default class Form extends Component {
  state = { input: '@gabebravo', showInput: false }

  handleToggleSwitch = () => {
    this.setState( state => ({
      showInput: !state.showInput
    }))
  }

  changeHandler = e => {
    this.setState({ input: e.target.value })
  }

  render() {
    const { input, showInput } = this.state
    return (
      // WE ARE USING KeyboardAvoidingView vs REGULAR VIEW >> KEYBOARD WILL GET BLOCKED IF NOT
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={styles.img} />
        <Switch 
          value={showInput}
          onValueChange={this.handleToggleSwitch}
        />
        { showInput && (
          <TextInput 
            value={input}
            style={styles.input}
            onChange={this.changeHandler}
          />
        )}
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ecf0f1'
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  },
  img: {
    width: 100,
    height: 100,
    margin: 50
  }
})
