function Error500() {
    return (
        <div className="d-flex justify-content-center 
                        align-items-center">
            <div className="col-md-12 text-center">
                <h1>500</h1>
                <h2>Server Error</h2>
                <p>
                    Sorry, the server got broken.
                </p>
            </div>
        </div>
    );
}

export default Error500;