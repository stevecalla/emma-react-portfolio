/*
Home:
    This should be a welcome landing page that contains:
        - Your Name
        - A Headshot of you
        - Your brand statement
        - Some indication that this is your portfolio site
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
        </div>
    );
};
  
  export default Home;