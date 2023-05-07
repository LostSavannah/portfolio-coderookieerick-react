import PersonalData from "./PersonalData";
import usePersonalDataList from "./usePersonalDataList";

export default function PersonalDataList(){
    const {personalDataList} = usePersonalDataList();
    return (<>
    <div className="p-3 personal-data-list text-light">
        <div>
            <h3>Personal Data</h3>
        </div>
        <dl>
            {personalDataList.map(personEntry => 
                (<PersonalData key={personEntry.id}  personalData={personEntry}/>))}
        </dl>
    </div>
    </>);
};