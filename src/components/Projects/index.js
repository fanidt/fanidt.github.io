import React from "react"


function Projects(props) {


    return (
        <div>
            <div className="Projects">

            <img className='imagesprojects'
            src={require(`../../assets/${props.project.image}.png`).default}
            alt={props.project.name}
            height='210'
            width='420'
           
          />

                <p> {props.project.name} </p>
                <p>
                    <a href={props.project.githublink}> {props.project.githublink} </a>
                    <a href={props.project.deployedlink}> {props.project.deployedlink} </a>
                </p>

                <p> {props.project.description} </p>

            </div>

        </div>
    )
}


export default Projects