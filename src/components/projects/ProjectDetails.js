import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quod reiciendis molestiae, commodi minima omnis? Beatae, inventore obcaecati autem vitae magni eos dolorum expedita, explicabo quaerat ad, aut suscipit assumenda.
                    </p>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by dawid Kozakiewicz</div>
                        <div>16th September, 9am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
