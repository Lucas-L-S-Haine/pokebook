import React from 'react';
import Pokemon from './Pokemon';
import './FrontPage.css';

class FrontPage extends React.Component {
  render() {
    return(
      <>
        <Pokemon species="abra" />
      </>
    )
  }
}

export default FrontPage;
