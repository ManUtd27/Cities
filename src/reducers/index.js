import { combineReducers } from 'redux'

import citiesReducer from './citiesReducers'

import { persistStore, persistCombineReducers } from 'redux-persist'

import { AsyncStorage } from 'react-native'



const config = {
    key: 'root',
    storage: AsyncStorage,
}

export default persistCombineReducers( config,{
    citiesReducer
})