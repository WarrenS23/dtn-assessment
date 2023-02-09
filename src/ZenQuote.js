import React, { Component } from 'react'
import axios from 'axios'
import './ZenQuote.css'

class ZenQuote extends Component {
    constructor(props){
        super(props);
        this.state = {quote: '', isLoaded: false}

    }
    componentDidMount(){
     setTimeout(() => {
           // load data 
           axios.get('https://api.github.com/zen').then(response => {
            this.setState({quote: response.data, isLoaded: true})
        })
     }, 500);
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                     <div className='ZenQuote-container'>
                     <h1>
                        Always remember...
                    </h1>
                    <p>
                        {this.state.quote}
                    </p>
                   </div>
                ) : (
                    <div className='loader'/>
                )}
              

            </div>
        )
    }
}

export default ZenQuote;