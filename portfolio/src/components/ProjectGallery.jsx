/*
Project Gallery:
    - Must render dynamically 6 instances of the Project component
        - Be sure to store your project data in a JSON file and import it into your project
*/



function ProjectGallery(props) {
    return (
        <div className="cardContainer col-lg-4 col-sm-12 my-lg-5 my-sm-4">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="snake game board" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.descr}</p>
                    <a href={props.link} target="_blank" className="btn btn-primary">{props.btn}</a>
                </div>
            </div>
        </div>
    );
};
  
export default ProjectGallery;