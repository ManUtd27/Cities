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

const store = createStore(rootReducer)

const App = () => (
    <Provider store={store}>
        <Tabs/>
    </Provider>
)




export default App
