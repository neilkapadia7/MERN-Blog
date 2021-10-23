import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../general/Message';
import Loader from '../general/Loader';
import FormContainer from '../general/FormContainer';
import {publishBlog, removeMessage} from '../../actions/blogsActions';

const AddWriter = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const user = useSelector(state => state.user)
    const blogs = useSelector(state => state.blogs)
    const {loading, error} = user;
    const {blogMessage} = blogs;
    
    useEffect(() => {
        if(blogMessage) {
            setTitle('')
            setContent('')
            setMessage(null)
            setTimeout(() => {dispatch(removeMessage())}, 4000)
        }
    }, [blogMessage])

    const submitRegisterHandler = (e) => {
        e.preventDefault();
        if(!title || !content) {
            setMessage('Please Fill All Details');
        }
        else {
            setMessage(null);
            console.log({title, content})
            dispatch(publishBlog({title, content}));
        }
    }
    
        return (
            <FormContainer>
                <h1>Add Blog</h1>
                {message && <Message variant='danger'>{message}</Message>}
                {blogMessage && <Message variant='success'>{blogMessage}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitRegisterHandler}>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId='content'>
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3} 
                            placeholder='Enter content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Submit
                    </Button>
                </Form>
            </FormContainer>
        )
    }

export default AddWriter
