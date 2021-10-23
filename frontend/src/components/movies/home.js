import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap';
import Message from '../general/Message';
import Loader from '../general/Loader';
import Movie from './Movie'
import { useLocation } from 'react-router-dom';
import {trendingMovies, originalsMovies, topRatedMovies} from '../../services/movies'


const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState(null)
    const [page, setPage] = useState(0)
    const [loading, setloading] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    // const movies = useSelector(state => state.movies);
    // const {loading, error} = movies;
    const user = useSelector(state => state.user);
    const {isLoggedIn} = user;

    const location = useLocation()

    useEffect(() => {
        async function fetchData() {
            let movies
            setloading(true)
            if(location.pathname === '/discover') {
                movies = await originalsMovies()
            }
            else if(location.pathname === '/discover/popular') {
                movies = await topRatedMovies()
            } 
            else if(location.pathname === '/discover/latest') {
                movies = await trendingMovies();            
            }
            setData(movies.results)
            setPage(movies.page)
            setTotalPage(movies.total_pages)
            setloading(false)
        }
        fetchData();
    }, [location.pathname])

    return (
      <>
        <h1 className='home-page-heading'>Movies</h1>
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
