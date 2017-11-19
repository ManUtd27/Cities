import React from 'react'
import {Image, StyleSheet} from 'react-native'
import {
  TabNavigator,
    DrawerNavigator

} from 'react-navigation'

import {colors } from '@theme'

import CitiesNav from './routes/cities/CitiesNav'
import Cities from './routes/cities/Cities'
import AddCity from './routes/addCity/AddCity'

export const tabs = {
  Cities: {
    screen: CitiesNav,
    navigationOptions:{
      tabBarLabel: 'Cites',
      tabBarIcon: ({tintColor}) => (
        <Image
        style={[styles.image, {tintColor} ]}
        source={require('./assets/cityicon.png')}
        />
      )
    }
  },
  AddCity:{
    screen:AddCity,
    navigationOptions:{
      tabBarLabel: 'Add City',
      tabBarIcon: ({tintColor}) => (
        <Image
        style={[styles.image, {tintColor} ]}
        source={require('./assets/addicon.png')}
        />
      )
    }
  }
}

const tabConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: colors.primary,
    inactiveTintColor: colors.secondary,
    showIcon: true,
    indicatorStyle: {
      backgroundColor: colors.secondary
    },
    style:{
      backgroundColor: '#fafafa',
      borderTopWidth: 1,
      borderTopColor: '#ededed'
    }
  }
}





const RootDrawer = DrawerNavigator({

    Cities: {
        screen: TabNavigator(tabs, tabConfig),
        navigationOptions: {
            drawerLabel: 'Cities',
            drawerIcon: ({ tintColor }) => (
                <Image
                    style={[styles.image, {tintColor} ]}
                    source={require('./assets/cityicon.png')}
                />
            ),
        },
    },
    Profile: {
        screen: AddCity,
    },


})




const styles = StyleSheet.create({
  image:{
    width:28,
    height: 28,
    }
})


export default RootDrawer
