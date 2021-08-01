//Import Components
import Project from '../Project/Project';

const Projects = ({projects}) => {
    return (
        <div>
            <section className="p-3 p-lg-4" id="projects">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col">
                            <h5 className="display-4 text-white mb-4">Projects</h5>
                        </div>
                    </div>
                </div>
                <Project projects={projects}/>
            </section>
            <hr/>
        </div>
    )
}

export default Projects
