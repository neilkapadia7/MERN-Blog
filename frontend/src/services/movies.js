import axios from 'axios'

let baseurl = process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL_LIVE : process.env.REACT_APP_BASE_URL_TEST

export const trendingMovies = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_MOVIESDB_BASE_URL}/trending/all/week?api_key=${process.env.REACT_APP_MOVIES_DB_APIKEY}&language=en-US`)
        return res.data;
    } catch (err) {
        console.log(err)
        return err
    }
}

export const originalsMovies = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_MOVIESDB_BASE_URL}/discover/tv?api_key=${process.env.REACT_APP_MOVIES_DB_APIKEY}&with_network=213`)
        return res.data;
    } catch (err) {
        console.log(err)
        return err
    }
}

export const topRatedMovies = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_MOVIESDB_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_MOVIES_DB_APIKEY}&language=en-US`)
        return res.data;
    } catch (err) {
        console.log(err)
        return err
    }
}

export const addFavourites = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post(`${baseurl}api/favourites/add`, data,  config )
        return res.data;
            
    } catch (err) {
        console.log(err)
        return err
    }
}

export const getFavourites = async () => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post(`${baseurl}api/favourites/get`)
        console.log('Backend Res Favourites:::', res)
        return res.data;
            
    } catch (err) {
        console.log(err)
        return err
    }
}

