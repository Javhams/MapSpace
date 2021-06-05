import React, { Component } from 'react';
import Gallery from './GalleryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
        partners: state.partners,
        desk: state.desk
  }
}

class Main extends Component {

  render() {
    const HomePage = () => {
      return (
          <Home
              desk={this.props.desk.filter(desk => desk.featured)[0]}
              partner={this.props.partners.filter(partner => partner.featured)[0]}
          />
      );
  };


    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/galeria'  component={Gallery}/>
                <Route exact path='/contactus' component={Contact} />
                <Route exact path='/aboutus' render={ () => <About 
                partners={this.props.partners} />}/>
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
  }
  
}

export default withRouter(connect(mapStateToProps)(Main));