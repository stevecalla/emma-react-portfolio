/*
Home:
    This should be a welcome landing page that contains:
        - Your Name
        - A Headshot of you
        - Your brand statement
        - Some indication that this is your portfolio site
*/

/*
how to add images? 
    - bg img to jumbotron
    - profile img
    - work project imgs
*/

/*
Should I do components for: 
    - Skills
    - work projects? (guess these should be in projects page and load components ar projectGallery)
    
*/


import profileImg from '../../../../assets/images/profile-img.jpg'
import snakeImg from '../../../../assets/images/snake2.jpg'
import drumsImg from "../../../../assets/images/drum-kit.jpg"
import pigImg from "../../../../assets/images/pig-dice-game.jpg"

function Home() {
    return (
        <div>
            <div className="p-5 mb-4 bg-body-tertiary jumbo">
                <div className="container-fluid py-5">
                    <div className="row col-11 p-3">
                        <div className="profile-img col-lg-5 col-xl-4">
                            <img src={profileImg} className=".img-fluid" alt="profile image"/>
                        </div>
                        <div className="profile-detail col-sm col-lg-7 col-xl-8">
                            <h1 className="display-5 fw-bold">Hi! 👋 I'm Emma </h1>
                            <h2 className="fw-bold">Welcome to my portfolio</h2>
                            <p className="fs-4">I hope you enjoy looking around and getting to know me. Be sure to check out my projects for a bit of fun 🎮 and get in touch if you'd like to know more</p>
                            {/* <a href="#contact-me" className="btn btn-primary btn-lg col-6">Contact details</a> */}
                        </div>
                    </div>
                </div>
            </div>

            <section id="skills">
                <h2>Skills</h2>
{/* Could these be components?? */}
                <div className="container-fluid text-center">
                    <div className="row g-3">
                        <div className="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">HTML</div>
                        <div className="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">CSS</div>
                        <div className="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">Bootstrap</div>
                        <div className="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">JavaScript</div>
                        <div className="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">Node.js</div>
                        <div className="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">React</div>
                        <div className="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">Git</div>
                        <div className="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">GitHub</div>
                    </div>
                </div>
            </section>

            <section id="work">
                <h2>Work</h2>

                <div className="container-fluid">
                    <div className="row ms-3 me-3">
                        
                        {/* <!-- card 1 --> */}
                        <div className="cardContainer col-lg-4 col-sm-12 my-lg-5 my-sm-4">
                            <div className="card">
                                <img src={snakeImg} className="card-img-top" alt="snake game board" />
                                <div className="card-body">
                                    <h5 className="card-title">Snake Game</h5>
                                    <p className="card-text">The classNameic Snake game. This game was created using the YouTube tutorial by Web Dev Simplified - 'How To Code The Snake Game In Javascript'.</p>
                                    <a href="https://e-davies.github.io/snake/" target="_blank" className="btn btn-primary">Play Snake</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- card 2 --> */}
                        <div className="cardContainer col-lg-4 col-sm-12 my-lg-5 my-sm-4">
                            <div className="card">
                                <img src={drumsImg} className="card-img-top" alt="keyboard drum kit" />
                                <div className="card-body">
                                    <h5 className="card-title">Drum Kit</h5>
                                    <p className="card-text">A drum kit you can use with your keyboard! See how much noise you can make 🥁. This was a project from the Wes Bos' JavaScript 30 course - a 30 day vanilla JS coding challenge.</p>
                                    <a href="https://e-davies.github.io/drum-kit/" target="_blank" className="btn btn-primary">Come make some noise!</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- card 3 --> */}
                        <div className="cardContainer col-lg-4 col-sm-12 my-lg-5 my-sm-4">
                            <div className="card">
                                <img src={pigImg} className="card-img-top" alt="2 player dice game board" />
                                <div className="card-body">
                                <h5 className="card-title">Pig Dice Game</h5>
                                <p className="card-text">A simple 2 player dice game where the first player to score 100 or more points wins. But beware, you don't want to roll a 1!</p>
                                <a href="https://e-davies.github.io/pig-dice-game/" target="_blank" className="btn btn-primary">Roll the dice</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
  
  export default Home;