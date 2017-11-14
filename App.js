/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import Tabs from './src/tabs'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'

import { persistStore } from 'redux-persist'


const store = createStore(rootReducer)
const persistor = persistStore(store)
import {PersistGate } from 'redux-persist/es/integration/react'

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Tabs/>

        </PersistGate>

    </Provider>
)




export default App
