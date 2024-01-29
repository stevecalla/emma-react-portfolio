/*
Project Gallery:
    - Must render dynamically 6 instances of the Project component
        - Be sure to store your project data in a JSON file and import it into your project
*/



// Import Component
import Project from '../Project';
import projects from '../../../data/projects.json'

// Import Images
import snakeImg from '../../../../assets/images/snake2.jpg';
import drumsImg from '../../../../assets/images/drum-kit.jpg';
import pigImg from '../../../../assets/images/pig-dice-game.jpg';

function ProjectGallery() {
    return (
        <section id="work">
                <h2>Projects</h2>
                <div className="container-fluid">
                    <div className="row ms-3 me-3">
                        {projects.map((project) => {
                            <Project key={project.id} img={project.img} title={project.title} descr={project.descr} deployedLink={project.deployedLink} btn={project.btn} githubLink={project.githubLink} />
                        })}
                        {/* <Project img={snakeImg}
                                        title='Snake Game' 
                                        descr="The classNameic Snake game. This game was created using the YouTube tutorial by Web Dev Simplified - 'How To Code The Snake Game In Javascript'."
                                        link="https://e-davies.github.io/snake/"
                                        btn='Play Snake'
                        />
                        <Project img={drumsImg}
                                        title='Drum Kit' 
                                        descr="A drum kit you can use with your keyboard! See how much noise you can make 🥁. This was a project from the Wes Bos' JavaScript 30 course - a 30 day vanilla JS coding challenge."
                                        link="https://e-davies.github.io/drum-kit/"
                                        btn='Come make some noise!'
                        />
                        <Project img={pigImg}
                                        title='Pig Dice Game' 
                                        descr="A simple 2 player dice game where the first player to score 100 or more points wins. But beware, you don't want to roll a 1!"
                                        link="https://e-davies.github.io/pig-dice-game/"
                                        btn='Roll the dice'
                        />
                    </div>
                    <div className="row ms-3 me-3">
                        <Project img={snakeImg}
                                        title='Snake Game' 
                                        descr="The classNameic Snake game. This game was created using the YouTube tutorial by Web Dev Simplified - 'How To Code The Snake Game In Javascript'."
                                        link="https://e-davies.github.io/snake/"
                                        btn='Play Snake'
                        />
                        <Project img={drumsImg}
                                        title='Drum Kit' 
                                        descr="A drum kit you can use with your keyboard! See how much noise you can make 🥁. This was a project from the Wes Bos' JavaScript 30 course - a 30 day vanilla JS coding challenge."
                                        link="https://e-davies.github.io/drum-kit/"
                                        btn='Come make some noise!'
                        />
                        <Project img={pigImg}
                                        title='Pig Dice Game' 
                                        descr="A simple 2 player dice game where the first player to score 100 or more points wins. But beware, you don't want to roll a 1!"
                                        link="https://e-davies.github.io/pig-dice-game/"
                                        btn='Roll the dice'
                        /> */}
                    </div>
                </div>
        </section>
    );
};


export default ProjectGallery;