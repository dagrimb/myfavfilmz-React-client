import React from 'react'; 

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

//create FaveMovies component
export class FaveMovies extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    const { user, FavoriteMovie, removeFavoriteFilm } = this.props;
    //console.log("ProfileView", user);
    console.log("FavoriteMovies", FavoriteMovie);
   
    return (
      <CardDeck variant="h-50" className=" fave-movies bg-dark">    
        <Card className="text-center" style={{ height: '35rem', width: '18rem', color: 'white', background: '#292b2c'}}>
          <Card.Body className="bg-dark h-100 mx-2">
            <Card.Title style={{marginTop: 25, paddingRight: 0 }}>{FavoriteMovie.Title}</Card.Title>
            <Card.Img variant="top mb-3" style={{ height: '20rem', width: '13rem', textAlign: 'center'}} src={FavoriteMovie.ImagePath} /><br/>
            <Link to={`/movies/${FavoriteMovie._id}`}>
              <Button style={{ marginBottom: 25 }} variant="link">Read More</Button>
            </Link>
            <button data-id={FavoriteMovie._id} type="submit" style={{ display: 'block', margin: 'auto' }} onClick={removeFavoriteFilm}>Remove</button>
          </Card.Body>
        </Card>
      </CardDeck>   
    );
  }
}

