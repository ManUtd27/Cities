/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import RootDrawer from './src/tabs'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'

import { persistStore } from 'redux-persist'


// This is a test for Continuous Integration

const store = createStore(rootReducer)
const persistor = persistStore(store)
import {PersistGate } from 'redux-persist/es/integration/react'

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <RootDrawer/>

        </PersistGate>

    </Provider>
)




export default App
