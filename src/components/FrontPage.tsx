import { Component } from 'react';
import Pokemon from './Pokemon';
import './FrontPage.css';

class FrontPage extends Component {
  render() {
    return(
      <>
        <Pokemon species="abra" />
      </>
    )
  }
}

export default FrontPage;
