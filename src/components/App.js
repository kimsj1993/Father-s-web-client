import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header'
import Footer from './Footer'
import Introduction from './Introduction'
import IntroReviews from './IntroReviews'
import Result from './Result'
import LocationContainer from './LocationContainer';


class App extends Component {


  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Introduction />
            <Result />
            <IntroReviews />
            <LocationContainer />
        

            <Footer />
            
          </div>
          
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
