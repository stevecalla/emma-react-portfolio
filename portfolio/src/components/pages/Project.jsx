/*
Project:
    - Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
    - Must utilize router props to properly render the right project based on user selection
    - Must render the following info:
        - Project title
        - Link to the deployed version
        - Link to the GitHub repository
        - GIF or screenshot of the deployed application
*/

// Import Component
import ProjectGallery from '../ProjectGallery';

// Import Images
import snakeImg from '../../../../assets/images/snake2.jpg';
import drumsImg from '../../../../assets/images/drum-kit.jpg';
import pigImg from '../../../../assets/images/pig-dice-game.jpg';

function Project() {
    return (
        <section id="work">
                <h2>Projects</h2>
                <div className="container-fluid">
                    <div className="row ms-3 me-3">
                        <ProjectGallery img={snakeImg}
                                        title='Snake Game' 
                                        descr="The classNameic Snake game. This game was created using the YouTube tutorial by Web Dev Simplified - 'How To Code The Snake Game In Javascript'."
                                        link="https://e-davies.github.io/snake/"
                                        btn='Play Snake'
                        />
                        <ProjectGallery img={drumsImg}
                                        title='Drum Kit' 
                                        descr="A drum kit you can use with your keyboard! See how much noise you can make 🥁. This was a project from the Wes Bos' JavaScript 30 course - a 30 day vanilla JS coding challenge."
                                        link="https://e-davies.github.io/drum-kit/"
                                        btn='Come make some noise!'
                        />
                        <ProjectGallery img={pigImg}
                                        title='Pig Dice Game' 
                                        descr="A simple 2 player dice game where the first player to score 100 or more points wins. But beware, you don't want to roll a 1!"
                                        link="https://e-davies.github.io/pig-dice-game/"
                                        btn='Roll the dice'
                        />
                    </div>
                    <div className="row ms-3 me-3">
                        <ProjectGallery img={snakeImg}
                                        title='Snake Game' 
                                        descr="The classNameic Snake game. This game was created using the YouTube tutorial by Web Dev Simplified - 'How To Code The Snake Game In Javascript'."
                                        link="https://e-davies.github.io/snake/"
                                        btn='Play Snake'
                        />
                        <ProjectGallery img={drumsImg}
                                        title='Drum Kit' 
                                        descr="A drum kit you can use with your keyboard! See how much noise you can make 🥁. This was a project from the Wes Bos' JavaScript 30 course - a 30 day vanilla JS coding challenge."
                                        link="https://e-davies.github.io/drum-kit/"
                                        btn='Come make some noise!'
                        />
                        <ProjectGallery img={pigImg}
                                        title='Pig Dice Game' 
                                        descr="A simple 2 player dice game where the first player to score 100 or more points wins. But beware, you don't want to roll a 1!"
                                        link="https://e-davies.github.io/pig-dice-game/"
                                        btn='Roll the dice'
                        />
                    </div>
                </div>
        </section>
    );
};


export default Project;