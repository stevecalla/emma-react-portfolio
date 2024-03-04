/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
// function Project(props) {
function Project({ img, descr, title, deployedLink, githubLink, btn }) {
  console.log(img);
  return (
    <div className="cardContainer col-lg-4 col-sm-12 my-lg-5 my-sm-4">
      <div className="card">
        <img src={img} className="card-img-top" alt="snake game board" />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descr}</p>
          </div>
          <div className="mt-3">
            <a
              href={deployedLink}
              target="_blank"
              className="btn btn-primary d-block"
            >
              {btn}
            </a>
            <a
              href={githubLink}
              target="_blank"
              className="btn btn-primary mt-2 d-block"
            >
              Go to GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
