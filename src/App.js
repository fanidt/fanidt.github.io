import React, { useState } from 'react';
import Nav from './components/Nav';
import Render from './components/Render';
//import ContactForm from './components/Contact';
import gitimage from './assets/pngaaa.com-1633337.png'
import linkimage from './assets/pngwing.com.png'
import insta from './assets/insta.png'


function App() {
  const [pages] = useState([
    { name: 'Fani Del Toro' },
    {
      name: 'About-me',

    },
    { name: 'Contact' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    
    
  ]);


  const [currentpage, setCurrentpage] = useState(pages[0]);



  return (
  
  <div>


    
    <div>

      <header>

        
      <Nav 


        pages={pages}
        setCurrentpage= {setCurrentpage}
        currentpage = {currentpage}
     
      ></Nav>

</header>
<div className='main'> 




  <Render currentpage= {currentpage }/>
</div>



    </div>

    <footer>
    <a href="https://github.com/fanidt">
    <img src={gitimage} alt="github" width="50" height="50"  /> 
    </a>

    <a href="https://www.linkedin.com/in/fani-del-toro-915a52202/">
    <img src={linkimage} alt="linkedin" width="50" height="50"  /> 
    </a>

    <a href="https://www.linkedin.com/in/fani-del-toro-915a52202/">
    <img src={insta} alt="insta" width="50" height="50"  /> 
    </a>

    
    </footer>

    </div>

  )

}

export default App;