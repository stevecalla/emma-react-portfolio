
// Import Component
import Project from '../Project';
import projects from '../../../data/projects.json'


function ProjectGallery() {
    console.log(projects);
    return (
        <section id="work">
                <h2>Projects</h2>
                <div className="container-fluid">
                    <div className="row ms-3 me-3">
                        {projects.map((project) => {
                           return <Project 
                                        key={project.id} 
                                        img={project.img} 
                                        title={project.title} 
                                        descr={project.descr} 
                                        deployedLink={project.deployedLink} 
                                        btn={project.btn} 
                                        githubLink={project.githubLink} 
                                    />
                        })}
                    </div>
                </div>
        </section>
    );
};


export default ProjectGallery;