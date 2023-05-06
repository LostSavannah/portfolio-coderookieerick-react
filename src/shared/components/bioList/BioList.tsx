import Bio from "./Bio";
import useBioList from "./useBioList";


export default function BioList(){
    const {bioList} = useBioList();
    return(<>
        <div className="container">
            <div className="row">
                <div className="col">
                    {bioList.map(entry => (<Bio key={entry.id} bio={entry}></Bio>))} 
                </div>
            </div>
        </div>
    </>);   
};