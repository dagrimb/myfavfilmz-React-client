import React from 'react'; 

//create DirectorView component
export class UnderConstruction extends React.Component {

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

    return (
      <div className="under-construction" style={{ color: 'white', height: '100rem'}}>
        <h2>This page is currently under construction. Please check back at a later time.</h2>
      </div>  
    );
  }
}