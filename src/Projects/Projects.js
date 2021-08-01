//Import Components
import Project from '../Project/Project';

const Projects = ({projects, handleSkillChange, skill}) => {

    const handleChange = (e) => {
        handleSkillChange(e.target.value);
    }
    return (
        <div>
            <section className="p-3 p-lg-4" id="projects">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col">
                            <h5 className="display-4 text-white mb-4">Projects</h5>
                            <select className="form-select-lg form-select-sm my-3 custom-select" aria-label="default select example" onChange={handleChange} value={skill}>
                                <option disabled value="none">Filter by skill</option>
                                <option value="All">All</option>
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Sass">Sass</option>
                                <option value="API">API</option>
                                <option value="SVG">SVG</option>
                            </select>
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
