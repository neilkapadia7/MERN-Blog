import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import HomeScreen from './components/movies/home';
import FavouritesScreen from './components/movies/Favourites';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-5'>
        <Container>
          <Route path='/login' component={Login} exact/>
          <Route path='/discover' component={HomeScreen} exact/>
          <Route path='/discover/popular' component={HomeScreen} exact/>
          <Route path='/discover/latest' component={HomeScreen} exact/>
          <Route path='/discover/favourites' component={FavouritesScreen} exact/>
        </Container>
      </main>
      <Footer />     
    </Router>
  );
}

export default App;
