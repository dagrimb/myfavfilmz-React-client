import React from 'react'; 
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

//create DirectorView component
export class DirectorView extends React.Component {

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
    const { onBackClick, director } = this.props;

    return (
      <div className="director-view">
        <Col xs={10} sm={7} md={6} lg={4} xl={3} className="pt-5 bg-dark mx-auto" style={{ paddingBottom: '20rem', height: '50%', width: '100%', color: 'white', background: '#292b2c'}}>
          <div class="mx-auto" style={{ width: '100%' }} >
            <div className="movie-director" style={{ color: 'white', width: '100%' }}>
            <div className="movie-poster mb-4 justify-content-center text-center mx-auto" fluid>
              <img src={director.ImagePath} height="100%" width="80%"/>
            </div>
            <div>
              <span className="value">{director.Name}</span>
              <span className="value"> ({director.Birth}-{director.Death}). </span>
              <span className="value">{director.Bio} </span>
              <a className="label" href={director.Source}>(source)</a>  
            </div>
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

DirectorView.propTypes = {              
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
      Source: PropTypes.string.isRequired
    }).isRequired,
  onBackClick: PropTypes.func
};