import { useState, useEffect } from 'react';
import { BioEntry, PortfolioService } from '../../services/PortfolioService';


export default function useBioList(){
    const [bioList, setBioList] = useState<BioEntry[]>([]);
    useEffect(() => {
        new PortfolioService().getBioEntries().then(entries => setBioList(entries));
    }, []);
    return{
        bioList
    };
}