import React from 'react';

export default function Header() {

    const color = {
      //display:'flex',
        backgroundColor : "#666",
          padding: '10px',
          textAlign: 'center',
          justifyContent : 'center',
          fontSize: '25px',
          color: 'white'
        
      }
    
      return (
        <>
            <header style={ color }>
            <h2>Cities</h2>
          </header>
        </>
      );
}
