import React, {useEffect, useState} from 'react'
import {Card, Button, Row, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {getBlogById} from '../../services/blogs';
import Message from '../general/Message';
import Loader from '../general/Loader';


const Blog = () => {
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState(null)
    const dispatch = useDispatch();
    const history = useHistory()
    
    useEffect(() => {
        const getBlog = async () => {
            let id = history.location.pathname.split('/api/')[1]
            let blogData = await getBlogById(id);
            if(blogData) {
                if(blogData.message === "Blog Successfully Fetched") {
                    setBlog(blogData.data)
                } else {
                    setMessage('Blog Not Fetched')
                }
                setLoading(false)
            }
        } 

        getBlog()
    }, [history])

    useEffect(() => console.log(blog), [blog])

    return (
        <>
        {loading && <Loader />}
        {!loading && !blog && <Message variant='danger'>Blog Not Found</Message>}
        <Container>
            {!loading && blog && (
                <>
                    <Row>
                        <h3>{blog.title}</h3>
                    </Row>
                    <Row>
                        <p>{blog.userId.name} {moment(blog.approvedOn).format('DD MMMM YYYY HH:mm')}</p>
                    </Row>
                    <Row><p>{blog.content}</p></Row>
                </>
            )}
        </Container>
        </>
    )
}

export default Blog
