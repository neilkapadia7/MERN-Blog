import axios from 'axios'

let baseurl = process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL_LIVE : process.env.REACT_APP_BASE_URL_TEST


export const publishBlog = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post(`api/blogs/add`, data,  config )
        return res.data;
            
    } catch (err) {
        console.log(err)
        return err
    }
}

export const approveBlog = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post(`api/blogs/approve-blog`, data,  config )
        return res.data;
            
    } catch (err) {
        console.log(err)
        return err
    }
}

export const getBlogs = async () => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.get(`api/blogs/get-approved-blogs`)
        console.log('Backend Res Favourites:::', res)
        return res.data;
            
    } catch (err) {
        console.log(err)
        return err
    }
}

