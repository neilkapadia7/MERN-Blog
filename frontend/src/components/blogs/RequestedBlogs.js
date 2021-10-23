import React, {useState, useEffect} from 'react'
import {Form, Button, Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../general/Message';
import Loader from '../general/Loader';
import moment from 'moment';
import FormContainer from '../general/FormContainer';
import {publishBlog, removeMessage, getPublishedBlogs} from '../../actions/blogsActions';

const AddWriter = () => {
    const dispatch = useDispatch();

    const blogs = useSelector(state => state.blogs)
    const {blogMessage, publishedBlogs, loading} = blogs;
    
    useEffect(() => {
        dispatch(getPublishedBlogs());
        if(blogMessage) {
            setTimeout(() => {dispatch(removeMessage())}, 4000)
        }
    }, [blogMessage])
    
        return (
            <>
                <h1>Requested Blog</h1>
                {blogMessage && <Message variant='success'>{blogMessage}</Message>}
                {/* {error && <Message variant='danger'>{error}</Message>} */}
                {loading && <Loader />}
                {!loading && publishedBlogs.length === 0 && <Message variant='danger'>No Published Blogs</Message>}
                {!loading && publishedBlogs.length > 0 && console.log(publishedBlogs)}
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Published On</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {publishedBlogs.length > 0 && publishedBlogs.map((blog, key) => 
                    (<tr>
                        <td>{key}</td>
                        <td>{blog.userId.name}</td>
                        <td>{blog.userId.email}</td>
                        <td>{blog.title}</td>
                        <td>{moment(blog.publishedOn).format('DD MMMM YYYY HH:mm')}</td>
                        <td onClick={() => console.log(blog._id)} style={{fontWeight:'900', color:'darkred'}}>Go Live</td>
                    </tr>)
                
                )}
                </tbody>
                </Table>
            </>
        )
    }

export default AddWriter
