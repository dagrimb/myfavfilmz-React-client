import React from 'react'; 
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

//create GenreView component
export class GenreView extends React.Component {

  //function for both adding and removing event listener
  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }

  render() {
    const { onBackClick, genre } = this.props;

    return (
      <div className="genre-view">
        <Col xs={12} sm={12} md={12} lg={10} xl={6} className="pt-5 bg-dark mx-auto" style={{ paddingBottom: '20rem', height: '50%', width: '100%', color: 'white', background: '#292b2c'}}>
          <div class="mx-auto" style={{ maxWidth: '100%' }} >
            <div className="movie-genre" style={{ color: 'white', textAlign: 'center' }}>
              <div className="movie-poster mb-4 justify-content-center text-center mx-auto" fluid>
                <img src={genre.ImagePath} height="100%" width="80%"/>
              </div>
              <span className="value">{genre.Name}</span>
              <span className="value"> ({genre.Description}</span>
              <a className="label" href={genre.Source}>(source)</a>  
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button className="mt-5"  variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
            </div>
          </div>
        </Col>
      </div>  
    );
  }
}

GenreView.propTypes = {              
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Source: PropTypes.string.isRequired
    }).isRequired,
  onBackClick: PropTypes.func
};