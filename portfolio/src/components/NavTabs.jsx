import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink 
                to="/" 
                // end 
                className={({isActive}) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                My Portfolio 
            </NavLink>
            {/* <a className="navbar-brand" href="#">My Portfolio</a> */}
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink 
                        to="/" 
                        // end 
                        className={({isActive}) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Home {/*<span className="sr-only">(current)</span>*/}
                    </NavLink>
                    {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="project"  
                        className={({isActive}) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Projects
                    </NavLink>
                    {/* <a className="nav-link" href="#">Projects</a> */}
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="contact"  
                        className={({isActive}) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Contact Me
                    </NavLink>
                    {/* <a className="nav-link" href="#">Contact Me</a> */}
                </li>
                </ul>
            </div>
        </nav>
    );
};

// function NavTabs() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Features</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Pricing</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };
  
export default NavTabs;