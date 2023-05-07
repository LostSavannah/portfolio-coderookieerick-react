import Bio from "./Bio";
import useBioList from "./useBioList";


export default function BioList(){
    const {bioList} = useBioList();
    return(<>
        <div className="h-100 d-flex flex-row align-items-center pfl-bio-list">
            <div className="d-flex w-100 flex-column align-items-center">
                <div className="col">
                    {bioList.map(entry => (<Bio key={entry.id} bio={entry}></Bio>))} 
                </div>
            </div>
        </div>
    </>);   
};