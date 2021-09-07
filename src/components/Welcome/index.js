import React from 'react';
import luckypets from '../../assets/LuckyPetsUnited.png'
import Mars from '../../assets/Marsforecast.png'

function Welcome(props) {
    // const contactrender = () => {
    //     switch (props.currentpage.name) {
    //         case 'Contact':
    //             return <ContactForm/>;

    //             default:
    //                 return <Welcome/>    

    // }}
    return (

        <div className='currentpage'>
            <h1>Welcome! My name is Fani and I am a Full Stack Web Developper</h1>
            <h2>Lets Build something amazing together</h2>

            {/* <a href={ContactForm}> <ContactForm/></a> */}

            {/* < Link to={'/ContactForm'} >Contact</Link> */}

            <div className='flex-row'>
                
                <div className='project1'>
                
                <a href="https://dashboard.heroku.com/apps/luckypetsunited">
    <img src={luckypets} alt="luckypets" width="300"  height='150' /> 
    </a>
                </div>
                
                <div className='project2'>
                <a href="https://while-alive.github.io/Mars-Forecast/">
    <img src={Mars} alt="mars" width="300" height='150'  /> 
    </a>
                </div>

            </div>
        </div>
    )

}


export default Welcome