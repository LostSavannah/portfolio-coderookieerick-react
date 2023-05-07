import BioList from "../../components/bioList/BioList";
import Jumbotron from "../../components/jumbotron/Jumbotron";

export default function HomePage(){
    return (<>
        <div className="flex container bg-dark text-light vh-100">
            <div className="row h-100">
                <div className="col-12 h-25">
                    <Jumbotron/>
                </div>
                <div className="col-12 col-sm-6 vh-75">
                    <BioList></BioList>
                </div>
                <div className="col-12 col-sm-6 vh-75">      
                    <div className="d-flex flex-column align-items-center">
                        <div className="align-self-center">Working really hard</div>
                        <div className="align-self-center">on this one</div>
                    </div>
                </div>
            </div>
        </div>
      </>);
}