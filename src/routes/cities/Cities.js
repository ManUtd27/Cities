import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native'

import { ListItem } from 'react-native-elements'

import { connect } from 'react-redux'



import uuidV4 from 'uuid/v4'
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    width: 120,
    height: 32

  }
})

 class Cities extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Image
        source={require('../../assets/citieslogo.png')}
        style={styles.title}
        resizeMode='contain'
      />
    )
  }



  renderItem = ({ item}) => {
      return (
        <ListItem
        onPress={() => this.props.navigation.navigate('City', item)}
        title={item.name}
        subtitle={item.country}
        />
      )
  }

  render(){
    let cities = this.props.cities
    cities = Object.values(cities)



    return(
      <View style={styles.container}>

        <FlatList
        keyExtractor={() => uuidV4()}
        data={cities}
        renderItem={this.renderItem}

        />

      </View>
    )
  }
}

export default connect(
    (state) => {
        return {
        cities: state.citiesReducer.cities
        }
    }
)(Cities)