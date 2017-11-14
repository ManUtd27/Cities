import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from 'react-native'
import { colors } from '@theme'
import { Button } from 'react-native-elements'
import { CitiesLogo} from '@assets/images'
import { addCity } from "../../actions/cititesActions";
import {connect} from 'react-redux'

const initialState = {
  city: {
    name: '',
    country: '',
  }
}

class AddCity extends React.Component {

state = initialState

//updateCity('name, Seattle')
updateCity = (key, value) => {
  this.setState(state => ({
    city:{
      ...state.city,
      [key]: value
    }
  }))
}

addCity = () => {
  this.props.dispatchAddCity(this.state.city)
  this.setState(initialState)
  this.props.navigation.navigate('Cities')
}
  render(){
    return(
      <View style={styles.container}>
          <Image
          source={CitiesLogo}
          style={styles.logo}
          resizeMode='contain'
          />
          <TextInput style={styles.input}
          value={this.state.city.name}
          placeholder='City Name'
            onChangeText={value => this.updateCity('name', value)}
            keyboardAppearance={'dark'}
          />
          <TextInput style={styles.input}
          value={this.state.city.country}
          placeholder='Country  Name'
            onChangeText={value => this.updateCity('country', value)}
            keyboardAppearance={'dark'}
           />

          <Button
          onPress={this.addCity}
          title='Add City'
          />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  input:{
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: 15,
    paddingHorizontal: 8,

  },
  logo:{
    width: '100%',
    height: 36,
    marginBottom: 10,
  },
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: colors.primary
  }
})

const mapDispatchToProps = {
   dispatchAddCity: (city) => addCity(city)
}
export default connect(null, mapDispatchToProps)(AddCity)
