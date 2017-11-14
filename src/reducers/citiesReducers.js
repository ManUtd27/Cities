import uuidv4 from 'uuid/v4'

const initialState = {
    cities: {
        'London':{
            name: 'London',
            country: 'UK',
            id: uuidv4()
        },
        'Seattle':{
            name: 'Seattle',
            country: 'USA',
            id: uuidv4()
        }
    }
}

export default function citiesReducer(state = initialState){
    return state

}