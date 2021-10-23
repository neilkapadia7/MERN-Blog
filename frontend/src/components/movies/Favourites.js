import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap';
import Message from '../general/Message';
import Loader from '../general/Loader';
import Movie from './Movie'
import {getMovies} from '../../actions/moviesActions'


const FavouritesScreen = (props) => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const {loading, error, moviesData} = movies;
    const user = useSelector(state => state.user);
    const {isLoggedIn} = user;


    useEffect(() => {
       dispatch(getMovies());
    }, [])

    if(isLoggedIn) {
        return (
        <>
            <h1 className='home-page-heading'>Movies</h1>
            {loading ? 
                (<Loader />) 
            : error ? 
                (<Message variant='danger'> {error} </Message> ) 
            : (
                <>
                <Row>
                    {moviesData.length > 0 && moviesData.map(movie => (
                        <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                        <Movie movie={movie} isLoggedIn isFavouritePage={true}/>
                        </Col>
                    ))}
                </Row>
                </>
                )
            }
        </>
        )
    }
    else {
        return (
            <center>
                <h1 className='home-page-heading'>Please Login</h1>
            </center>
        )
    }
}


export default FavouritesScreen
