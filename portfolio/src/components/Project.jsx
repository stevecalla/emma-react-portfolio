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

function Project(props) {
    return (
        <div className="cardContainer col-lg-4 col-sm-12 my-lg-5 my-sm-4">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="snake game board" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.descr}</p>
                    <a href={props.deployedLink} target="_blank" className="btn btn-primary">{props.btn}</a>
                    <a href={props.githubLink} target="_blank" className="btn btn-primary mt-2">Go to GitHub Repo</a>
                </div>
            </div>
        </div>
    );
};
  
export default Project;