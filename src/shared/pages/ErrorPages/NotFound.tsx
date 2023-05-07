export default function NotFound(){
    return (<>
        <div className="d-flex align-items-center bg-dark text-light vh-100">
            <div className="d-flex flex-column align-items-center w-100">
                <div className="row">
                    <div className="col">
                        <h1>404</h1>
                    </div>
                    <div className="col">
                        <h4>Not found</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6>Maybe this page actually doesn't exists?</h6>
                    </div>
                </div>
            </div>
        </div>
    </>);
}