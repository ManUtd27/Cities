import React from 'react'
import {
  Text,
  StyleSheet,
  View,
} from 'react-native'

export default class City extends React.Component {
  static navigationOptions(props){
    const { name } = props.navigation.state.params
    return {
      title: name
    }
  }
  render() {
    return(
      <View>
        <Text> Hello From City </Text>
      </View>

    )
  }
}
