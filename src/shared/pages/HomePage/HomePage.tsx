import BioList from "../../components/bioList/BioList";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import SkillSet from "../../components/skill/SkillSet";
import Writer from '../../components/writer/Writer';

export default function HomePage(){
    const messages:string[] = [
        ".Net core 6++", 
        "Python", 
        "Transact-SQL",
        "React (just a bit)",
        "Angular (way less than react :))"
    ];

    return (<>
        <div className="flex container pfl-bg-dark text-light vh-100">
            <div className="row h-100">
                <div className="col-12 h-25">
                    <Jumbotron/>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                I can do <Writer messages={messages}></Writer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 vh-75">
                    <BioList></BioList>
                </div>
                <div className="col-12 col-sm-6 vh-75">
                    <SkillSet></SkillSet>    
                </div>
            </div>
        </div>
        <div className="flex container pfl-bg-light vh-100">
                <div className="h-100 d-flex flex-row align-items-center">
                    <div className="d-flex w-100 flex-column align-items-center">
                        <div>👷 Under construction 🚧</div>
                    </div>
                </div>
        </div>
      </>);
}