import uuidv4 from 'uuid/v4'
import {ADD_CITY, ADD_LOCATION } from "../actions/cititesActions";

const initialState = {
    cities: {}

}

export default function citiesReducer(state = initialState, action){

    switch(action.type){
        case ADD_CITY:
            const id = uuidv4()
            return{
                cities:{
                    ...state.cities,
                    [id]: {
                        ...action.city,
                        location: [],
                        id: id
                    }
                }
            }
        case ADD_LOCATION:
            return {
                cities: {
                    ...state.cities,
                    [action.city.id]:{
                        ...state.cities[action.city.id],
                        location:[
                            ...state.cities[action.city.id].location,
                            action.location
                        ]
                    }

                }
            }
        default:
            return state
    }
}