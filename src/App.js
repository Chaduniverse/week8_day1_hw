import './App.css';
import Home from './views/Home';
import Nav from './components/Nav';
import Pokemon from './views/Pokemon';
import SignIn from './views/SignIn';
import SignUp from './views/Signup';

  
import {Routes, Route, BrowserRouter} from 'react-router-dom'


import React, { Component } from 'react'
import Pricing from './views/Pricing';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      name: 'dylan',
      age: 101
  }
  
   
}  
addOne = ()=> {
  console.log('button clicked')
  this.setState({
      age: this.state.age + 1 
  })

}




  render(){
    return (
      <BrowserRouter>
      <div>
        <Nav currentUser = {this.state.currentUser}/>  
        <Routes>
          <Route path='/' element={<Home age={this.state.age} addOne = {this.addOne} name = {this.state.name}/>}/>
          <Route path='/pokemon' element={<Pokemon/>}/>
          <Route path='/SignIn' element= {<SignIn/>}/>
          <Route path='/SignUp' element = {<SignUp/>}/>
          <Route path='/Pricing' element = {<Pricing/>}/>
        
        </Routes>
      </div>
      </BrowserRouter>
    )
}

}



