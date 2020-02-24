import React from 'react';

export default class Fave extends React.Component{
     handleClick =(e)=>{
        e.stopPropagation();  
        console.log("handling Fave click!");
        
        this.props.onfave()

       }
       
    render(){
      const isFave = (this.props.isFave) ? 'https://cdn2.iconfinder.com/data/icons/flat-icons-web/40/Heart_Fill-512.png' : 'https://cdn0.iconfinder.com/data/icons/shopping-icons-5/100/Heart-512.png';
        return (
            <div className='heart-icon' onClick={this.handleClick}>
            <img src={isFave} alt="heart" />
          </div>

        );
    }

}