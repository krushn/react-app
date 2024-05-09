import { NavLink } from "react-router-dom";

function Error404() {
    return (
        <div className="d-flex justify-content-center 
                        align-items-center">
            <div className="col-md-12 text-center">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    Sorry, the page you are looking
                    for does not exist.
                </p>

                <NavLink to="/app">Home</NavLink>
            </div>
        </div>
    );
}

export default Error404;