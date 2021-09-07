import React, {useState} from "react";
import Projects from "../Projects";

function Portfolio() {

    const [projects] = useState([
        {
            name: 'Lucky Pets United',
            image:"LuckyPetsUnited",
            githublink: 'https://github.com/fanidt/luckypetss',
            deployedlink: 'https://dashboard.heroku.com/apps/luckypetsunited',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Mars Forecast',
            image:"Marsforecast",
            githublink: 'https://github.com/its-jefe/Mars-Report',
            deployedlink: 'https://while-alive.github.io/Mars-Forecast/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Random Knowledge Quizz',
            image:"Quizz",
            githublink: 'https://github.com/fanidt/Quizz',
            deployedlink: 'https://fanidt.github.io/Quizz/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Track-your-Employees',
            image:"Track-your-Employees",
            githublink: 'https://github.com/fanidt/Track-your-Employees',
            deployedlink: 'https://youtu.be/69qlPXEpXFw',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'budget-tracker',
            image:"budget-tracker",
            githublink: 'https://github.com/fanidt/budget-tracker',
            deployedlink: 'https://budget-tracking-application1.herokuapp.com/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Work Day Planner',
            image:"WorkDayPlanner",
            githublink: 'https://github.com/fanidt/WorkDayPlanner',
            deployedlink: 'https://www.fanideltoro.com/WorkDayPlanner/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },


    ]);
    return (

        <div className= 'projects'>
            <div className="flex-row">
                {projects.map((project, id) => (

<Projects  project = {project} key= {id}
    />

))}
            </div>

        </div>
    )
}




export default Portfolio