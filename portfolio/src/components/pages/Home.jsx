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




function Home() {
    return (
        <div>
            <div className="p-5 mb-4 bg-body-tertiary jumbo">
                <div className="container-fluid py-5">
                    <div className="row col-11 p-3">
                        <div className="profile-img col-lg-5 col-xl-4">
                            <img src="../../assets/images/profile-img.jpg" className=".img-fluid" alt="profile image"/>
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
                <div class="container-fluid text-center">
                    <div class="row g-3">
                        <div class="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">HTML</div>
                        <div class="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">CSS</div>
                        <div class="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">Bootstrap</div>
                        <div class="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">JavaScript</div>
                        <div class="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">Node.js</div>
                        <div class="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">React</div>
                        <div class="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">Git</div>
                        <div class="col-lg-5 col-sm-12 p-3 m-md-auto my-md-4 skills-box">GitHub</div>
                    </div>
                </div>
            </section>

            <section id="work">
                <h2>Work</h2>

                <div class="container-fluid">
                    <div class="row ms-3 me-3">
                        
                        {/* <!-- card 1 --> */}
                        <div class="cardContainer col-lg-4 col-sm-12 my-lg-5 my-sm-4">
                            <div class="card">
                                <img src="./images/snake2.jpg" class="card-img-top" alt="snake game board" />
                                <div class="card-body">
                                    <h5 class="card-title">Snake Game</h5>
                                    <p class="card-text">The classic Snake game. This game was created using the YouTube tutorial by Web Dev Simplified - 'How To Code The Snake Game In Javascript'.</p>
                                    <a href="https://e-davies.github.io/snake/" target="_blank" class="btn btn-primary">Play Snake</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- card 2 --> */}
                        <div class="cardContainer col-lg-4 col-sm-12 my-lg-5 my-sm-4">
                            <div class="card">
                                <img src="./images/drum-kit.JPG" class="card-img-top" alt="keyboard drum kit" />
                                <div class="card-body">
                                    <h5 class="card-title">Drum Kit</h5>
                                    <p class="card-text">A drum kit you can use with your keyboard! See how much noise you can make 🥁. This was a project from the Wes Bos' JavaScript 30 course - a 30 day vanilla JS coding challenge.</p>
                                    <a href="https://e-davies.github.io/drum-kit/" target="_blank" class="btn btn-primary">Come make some noise!</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- card 3 --> */}
                        <div class="cardContainer col-lg-4 col-sm-12 my-lg-5 my-sm-4">
                            <div class="card">
                                <img src="./images/pig-dice-game.JPG" class="card-img-top" alt="2 player dice game board" />
                                <div class="card-body">
                                <h5 class="card-title">Pig Dice Game</h5>
                                <p class="card-text">A simple 2 player dice game where the first player to score 100 or more points wins. But beware, you don't want to roll a 1!</p>
                                <a href="https://e-davies.github.io/pig-dice-game/" target="_blank" class="btn btn-primary">Roll the dice</a>
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