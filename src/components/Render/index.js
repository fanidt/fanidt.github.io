import React from 'react';
import Aboutme from '../Aboutme';
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';
import Resume from '../Resume'
import Welcome from '../Welcome';

function Render (props) {
 const pagerender = () => {
     switch(props.currentpage.name) {
         case 'About-me':
             return <Aboutme/>;
            
         case 'Portfolio':
             return <Portfolio/>  
             
             case 'Contact':
                return <ContactForm/>   
                
             case 'Resume':
                 return <Resume/>   
     default:
        return <Welcome/>   
     }
 }


    return (

        <div>
{pagerender()}

        </div>
    )

    

}

export default Render