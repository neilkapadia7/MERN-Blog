import React, {useEffect, useState} from 'react';
import {createDispatchHook, useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap';
import Message from '../general/Message';
import Loader from '../general/Loader';
import Blog from './AllBlogs'
import { useLocation } from 'react-router-dom';
import {getBlogs} from '../../actions/blogsActions'


const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState(null)
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const user = useSelector(state => state.user);
    const blogs = useSelector(state => state.blogs);
    const {blogsData, loading} = blogs;

    const location = useLocation()

    useEffect(() => {
      dispatch(getBlogs());
    }, [dispatch])

    return (
      <>
        <h1 className='home-page-heading'>Blogs</h1>
          {loading ? 
            (<Loader />) 
          // : error ? 
          //   (<Message variant='danger'> {error} </Message> ) 
          : (
            <>
              <Row>
                {blogsData && blogsData.map(blog => (
                    <Col key={blog.id} sm={12} md={6} lg={4} xl={3}>
                      <Blog blog={blog} />
                    </Col>
                ))}
              </Row>
            </>
            )
          }
      </>
    )
}


export default HomeScreen
