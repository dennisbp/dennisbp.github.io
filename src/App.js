import React, { Component } from 'react';
// import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      portfolioData: {}
    };
  }

  getResumeData(){
    $.ajax({
      url:'/portfolioData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({portfolioData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.portfolioData.main}/>
        <Portfolio data={this.state.portfolioData.portfolio}/>
        <Resume data={this.state.portfolioData.resume}/>
        <About data={this.state.portfolioData.main}/>
        <Footer data={this.state.portfolioData.main}/>
      </div>
    );
  }
}

export default App;
