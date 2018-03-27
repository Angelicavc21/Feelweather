/* import axios from 'axios'

export const SHOW_DATA = 'SHOW_DATA'

export function showData() {
    
    return (dispatch, getState) => {
        axios.get('https://api.darksky.net/forecast/ef053d30e83f21037db223112b6728ed/-12.168251699999999,-77.0046148?lang=es')
            .then((response) => {
                dispatch( { type: SHOW_DATA, payload: response.data } ) 
            }) 
    }
    
}*/