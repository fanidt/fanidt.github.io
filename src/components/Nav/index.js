import React from 'react';

function Nav (props) {



return(
    <nav>
   
   <ul className= "flex-row"> 
   {props.pages.map(page => (
       <li key= {page.name}> 
       <span onClick= {()=> props.setCurrentpage(page)}> 
           { page.name}
       </span>



        </li>
   ))
   }
   </ul>
   </nav>
)


}





export default Nav;

