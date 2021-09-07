import React from 'react';

import resume from '../../assets/resume/FaniDelToroResumefinal2021.pdf'


function Resume () {


    return (
     
          <div className="downloadlink">
              
             



<ul className='myskilllist'>
<li>
Javascript
</li>
<li>
HTML
</li>
<li>
CSS
</li>
<li>
jQuery
</li>
<li>
Bootstrap
</li>
<li>
Node.js
</li>
<li>
MySQL
</li>
<li>
MongoDB
</li>
<li>
Express.js
</li>
<li>
React.js
</li>
<li>
<a href={resume} download> resume</a>
</li>
</ul>



          </div>
       
      );
}


export default Resume