import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import Steppers from './Steppers'
import Slider from './Slider'
import DateHeader from './DateHeader'

/* TIP : HOW TO LOG ON THE SCREEN
  <Text>{JSON.stringify(<VALUE>)}</Text>
*/

const DEFAULT_STATE = {
  run: 0,
  bike: 0,
  swim: 0,
  sleep: 0,
  eat: 0
}

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddEntry extends Component {
  state = DEFAULT_STATE

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)
    this.setState((state) => {
      const count = state[metric] + step
      return { ...state, [metric]: count > max ? max : count }
    })
  }

  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step
      return { ...state, [metric]: count < 0 ? 0 : count }
    })
  }

  slide = (metric, value) => {
    this.setState({ [metric]: value })
  }

  submit = () => {
    const key = timeToString();
    const entry = { ...this.state }

    this.setState(DEFAULT_STATE)

    // TODO : 
    // 1) UPDATE REDUX
    // 2) NAVIGATE HOME
    // 3) SAVE TO DB
    // 4) CLEAR LOCAL NOTIFICATIONS
  }

  render() {
    const metaInfo = getMetricMetaInfo()
    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()} />
        {Object.keys(metaInfo).map(key => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider' ?
                <Slider value={value} onChange={() => this.slide(key, value)} {...rest} /> :
                <Steppers value={value} onIncrement={() => this.increment(key)} onDecrement={() => this.decrement(key)} {...rest} />
              }
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    )
  }
}

export default AddEntry
