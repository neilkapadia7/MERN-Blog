import React from 'react'
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {addMovies} from '../../actions/moviesActions';
import {useDispatch} from 'react-redux';


const Movies = ({movie, isLoggedIn, isFavouritePage}) => {
    const dispatch = useDispatch();
    return (
        <Card className='my-3 p-3 rounded'>
            {/* <Link to={`/movie/${movie._id}`}> */}
                <Card.Img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movie.backdrop_path}`} variant='top' />
            {/* </Link> */}

        <Card.Body>
            {/* <Link to={`/movie/${movie._id}`}> */}
                <Card.Title as='div'>
                    <strong>{movie.first_air_date}</strong>
                </Card.Title>
            {/* </Link> */}
                <Card.Title as='div'>
                    <strong>{movie.overview.substring(0,50)}...</strong>
                </Card.Title>
                <Card.Title as='h5'>
                    <strong>Rating : {movie.vote_average}</strong>
                </Card.Title>

                <Card.Title as='p'>
                </Card.Title>
            {/* <Card.Text as='div'>
                <Rating value={movie.rating} text={`${movie.numReviews} reviews`}/>
            </Card.Text> */}

            <Card.Text as='h3'>
                {movie.name}
            </Card.Text>
            {isLoggedIn && !isFavouritePage && <p style={{color: 'red', paddingTop: '20px', cursor:'pointer'}} onClick={() => dispatch(addMovies(movie))}>Add to Favourite</p>}
        </Card.Body>
        </Card>
    )
}

export default Movies
