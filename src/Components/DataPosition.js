import React, { Component } from 'react';
import './index.css'



export default class DataPostion extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 1
        }
    }

    handleIndexUp = () => {
        if(this.state.index >= this.props.dataObj.howMany){
            this.setState({
                index: 1
            })
            
        }else{
            this.setState({
                index:  this.state.index += 1 
            })
        }
        
    }
    
    handleIndexDown = () => {
            this.setState({
            index: this.state.index -= 1 
        })

        if(this.state.index < 1){
            console.log('hit if');
            
            this.setState({
                index: this.props.dataObj.howMany
            })
        }
    }



    render() {
    return (
      <div className='main-div'>
          <div className='home-div'>
              <p className='home'>Home</p>
          </div>
       <div className='body-div'>
          <div className='data'>
            <h1 className='name text'>{this.props.dataObj[this.state.index].name.first} {this.props.dataObj[this.state.index].name.last}</h1>

            <p><span className='heading text'>From: </span>{this.props.dataObj[this.state.index].city}, {this.props.dataObj[this.state.index].country}</p>

            <p><span className='heading text'>Job Title: </span>{this.props.dataObj[this.state.index].title}</p>

            <p><span className='heading text'>Employer: </span>{this.props.dataObj[this.state.index].employer}</p>
            <br/>

            <span  className='heading text'>Favorite Movies:</span>
            <ol>
                <li className='text'>{this.props.dataObj[this.state.index].favoriteMovies[0]}</li>
                <li className='text'>{this.props.dataObj[this.state.index].favoriteMovies[1]}</li>
                <li className='text'>{this.props.dataObj[this.state.index].favoriteMovies[2]}</li>
            </ol>

          </div>
          <div className='dataCounter text'>
            <h1 className='dataRatio'>{this.state.index}/{this.props.dataObj.howMany}</h1>
          </div>  
       </div>
       
       <div className='button-div'>
            <button className='button text' onClick={() => this.handleIndexDown()}>Previous</button>
            <button className='button text' onClick={() => this.handleIndexUp()}>Next</button>
       </div>
       

      </div>
    );
  }
}
