import { PersonalDataEntry } from "../../services/PortfolioService";

export type PersonalDataProps = {
    personalData:PersonalDataEntry
};

export default function PersonalData({personalData}:PersonalDataProps){
    return (<>
            <dt>{personalData.name}</dt>
            <dd>{personalData.value}</dd>
    </>)
}