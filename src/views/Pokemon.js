import React, { Component } from 'react'

export default class pokemon extends Component {
    constructor(){
        super()
        this.state = {
            name: ''

        }
    }

    getPokemon = async () => { 
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard') 
        const data = await response.json()
        console.log(data)  

        const pokename = data.name 
        this.setState({
            name: pokename

        })


    }
    
    componentDidMount= () => {
        this.getPokemon()

    }


render() {
    return (
      <div> 
        <h1>Pokemon Page</h1>
        <h2>Pokemon Name:{this.state.name}</h2>
        </div>
    )
  }
}
