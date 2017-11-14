import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Modal,
    TextInput
} from 'react-native'

import { Icon, Button } from 'react-native-elements'
import { colors} from "@theme"
import { addLocation} from "../../actions/cititesActions";
import { connect } from 'react-redux'

 class City extends React.Component {
  static navigationOptions(props){
    const { name } = props.navigation.state.params.city
    return {
      title: name
    }
  }

  state = {
    isModalOpen: false,
      location: {
        name:'',
          address: ','
      }
  }

  toggleModal = () => {
    this.setState(state => ({
        isModalOpen: !state.isModalOpen
    }))
  }


updateInput = (key, value ) => {
    this.setState(state => ({
        location:{
            ...state.location,
            [key]: value
        }
    }))
}


addLocation = () =>  {
      const { city } = this.props.navigation.state.params
    const { location } = this.state
    this.props.dispatchAddLocation(city, location)
    this.setState({location: {name: '', address: '' }})
    this.toggleModal()
}

  render() {
    return(
      <View style={styles.container}>
          {
            this.props.city.location.map((location, index) => (

              <View style={styles.card} key={index}>
                  <Text style={styles.info}> {location.name}</Text>
                   <Text style={styles.info}> {location.address}</Text>
              </View>

              ))
          }
        <Icon
        underlyColor={colors.primary}
        raised
        icon
        name='add'
        color='white'
        containerStyle={styles.icon}
        onPress={this.toggleModal}

        />
        <Modal
        visible={this.state.isModalOpen}
        animationType='slide'
        >
          <View style={styles.modal}>
            <Icon
        underlyColor={colors.primary}
        raised
        icon
        name='close'
        color='white'
        containerStyle={styles.icon}
        onPress={this.toggleModal}

        />

              <Text
                style={styles.title}
              >Add Location </Text>
              <TextInput
                  onChangeText={value => this.updateInput('name', value)}
                placeholder='Location Name'
                  style={styles.input}
              >

              </TextInput>

               <TextInput
                  onChangeText={value => this.updateInput('address', value)}
               placeholder='Location Address'
                  style={styles.input}
               >

              </TextInput>
              <Button
                  onPress={this.addLocation}
                title='Submit'
              />
          </View>


        </Modal>

      </View>

    )
  }
}


const styles = StyleSheet.create({

    card: {
        backgroundColor: 'white',
        margin: 10,
        padding:15
    },

    info: {
    marginTop: 10,
        fontWeight: '500'
},

    title:{
        marginTop: 80,
        marginVertical: 15,
        marginLeft: 15,
        fontSize: 20
    },
    input:{
      height: 50,
      marginHorizontal: 15,
      backgroundColor: '#ddd',
        marginBottom: 10,
        textAlign: 'center'
    },
    modal: {
      flex: 1,
        backgroundColor: 'white'
    },
    container: {
      flex: 1,
    },
    icon:{
      backgroundColor: colors.primary,
        position: 'absolute',
        right: 10,
        bottom: 10
    }

})


const mapStateToProps = (state, props ) => {
    const id = props.navigation.state.params.city.id
    return {
        city: state.citiesReducer.cities[id]
    }
}
const mapDispatchToProps = {
   dispatchAddLocation: (city, location) => addLocation(city, location)
}
export default connect(mapStateToProps, mapDispatchToProps)(City)
