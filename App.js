import React from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';
// import AddEntry from './components/AddEntry'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});

class App extends React.Component {

  state = {
    value: 0
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider 
          value={this.state.value} 
          step={1}
          minimumValue={-10} 
          maximumValue={10} 
          onValueChange={value => this.setState({ value })} 
        />
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}

export default App 