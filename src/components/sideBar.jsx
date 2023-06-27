import React from "react";
import {Link} from 'react-router-dom';

export default function SideBar() {


    const sideBarData = [
                {
                    name : 'PARIS',
                    path : '/paris'
                },
                {
                    name: 'London',
                    path: '/london'
                },
                {
                    name: 'Tokyo',
                    path: '/tokyo'
                }
    ];

    const nav = {
    
            float: 'left',
            width: '20%',
            height: '100%', /* only for demonstration, should be removed */
           // background: '#ccc',
           color : 'white',
            padding: '20px',
            margin : '20px'
          
    };

    const ul = {

        listStyleType: 'no-bullet',
        padding: '0',
        color : 'white',

    }



    return(
        <nav style={nav}>
            <ul style={ul}>
                {sideBarData.map((data,index) => 
                        <li key={index} className="text-white" >
                            
                            <Link to={data.path} > {data.name}</Link>
                            </li>
                )}
            </ul>
      </nav>
    );
    
}