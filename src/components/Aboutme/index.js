import React from 'react';
import Fani from '../../assets/faniAvatar.png'

function Aboutme () {


    return (
        <section className="my-5">
          <h1 className="about">About me</h1>
          {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
          <div className="my-2">
<img src={Fani} alt='my avatar' width="150" height="150"></img>

            <p className='mydescription'> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
              condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
              mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
              Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
              justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
              dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
              Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
            </p>
          </div>
        </section>
      );
}


export default Aboutme