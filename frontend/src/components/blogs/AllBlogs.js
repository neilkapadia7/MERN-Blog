import React from 'react'
import {Card, Button, Row, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import {useDispatch} from 'react-redux';


const AllBlogs = ({blog, isLoggedIn, isFavouritePage}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    return (
        // <Card className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
        <Container fluid="md">
            <Card.Body>
                <Card.Title as="h4">{blog.title}</Card.Title>
                <Card.Text as="p" style={{fontSize: '12px'}}>{moment(blog.approvedOn).format('DD MMMM YYYY HH:mm')}</Card.Text>
                <Card.Text style={{fontSize: '17px'}}>
                    {blog.content.substring(0, 100)}....
                </Card.Text>
                <Button variant="primary" onClick={() => history.push(`/api/${blog._id}`)}>Read More</Button>
            </Card.Body>
        </Container>
    )
}

export default AllBlogs
