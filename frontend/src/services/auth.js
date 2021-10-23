import axios from 'axios'
import store from '../store'

export const userSignIn = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('api/user/login', data,  config )
        console.log('Backend Res :::', res)
        return res.data;
            
    } catch (err) {
        console.log(err)
        return err
    }
}

export const userSignUp = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('api/user/signup', data,  config )
        console.log('Backend Res :::', res)
        return res.data;
            
    } catch (err) {
        console.log(err)
    }
}

