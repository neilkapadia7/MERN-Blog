import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../general/Message';
import Loader from '../general/Loader';
import FormContainer from '../general/FormContainer';
import {userSignIn,userSignUp} from '../../actions/authActions';

const Login = ({history}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [fullName, setName] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const user = useSelector(state => state.user)
    const {loading, error, userInfo} = user;

    useEffect(() => {
        if(userInfo) {
            history.push('/');
        }
    }, [history, userInfo]);

    const submitLoginHandler = (e) => {
        if(!email || !password) {
            setMessage('Please Fill All Details');
        }
        e.preventDefault();
        dispatch(userSignIn({email, password}));
    }

    const submitRegisterHandler = (e) => {
        e.preventDefault();
        if(!email || !password || !confirmPassword || !phone || !fullName) {
            setMessage('Please Fill All Details');
        }
        else if(password !== confirmPassword) {
            setMessage('Passwords do not match');
        }
        else {
            setMessage(null);
            dispatch(userSignUp({name: fullName, phone, email, password}));
            // console.log(name, email, password)
        }
    }
    
    if(isLogin) {
        return (
            <FormContainer>
                <h1>Sign In</h1>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitLoginHandler}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Sign In
                    </Button>

                </Form>
                <p className='py-3'>Don't have an Accout? <span style={{fontWeight: '900', cursor: 'pointer'}} onClick={() => setIsLogin(!isLogin)}>Sign Up</span></p>
            </FormContainer>
        )
    }
    else {
        return (
            <FormContainer>
                <h1>Sign Up</h1>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitRegisterHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter name'
                            value={fullName}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId='phone'>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            type='tel'
                            pattern="[0-9]{10}"
                            placeholder='Enter Mobile Number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Register
                    </Button>
                </Form>
                <p className='py-3'>Already have an Accout? <span style={{fontWeight: '900', cursor: 'pointer'}} onClick={() => setIsLogin(!isLogin)}>Sign In</span></p>
            </FormContainer>
        )
    }
}

export default Login
