import { useState, useEffect } from 'react';
import { PersonalDataEntry, PortfolioService } from '../../services/PortfolioService';

export default function usePersonalDataList(){
    const [personalDataList, setPersonalDataList] = useState<PersonalDataEntry[]>([]);
    useEffect(() => {
        new PortfolioService()
            .getPersonalData()
            .then(personalData => setPersonalDataList([...personalData]));
    }, []);
    return {
        personalDataList
    };
}