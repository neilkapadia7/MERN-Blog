import React, {useEffect, useState} from 'react';
import {createDispatchHook, useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap';
import Message from '../general/Message';
import Loader from '../general/Loader';
import Movie from './Blog'
import { useLocation } from 'react-router-dom';
import {getBlogs} from '../../actions/blogsActions'


const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState(null)
    const [page, setPage] = useState(0)
    const [loading, setloading] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    const user = useSelector(state => state.user);
    const {isLoggedIn} = user;

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
                {data && data.map(movie => (
                    <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                      <Movie movie={movie} page totalPage isLoggedIn={isLoggedIn} isFavouritePage={false}/>
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
