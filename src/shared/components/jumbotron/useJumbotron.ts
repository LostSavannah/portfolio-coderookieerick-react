import { ContactDataEntry, PortfolioService } from "../../services/PortfolioService";
import { JumbotronProps } from "./Jumbotron";
import { useState, useEffect } from 'react';

export default function useJumbotron():JumbotronProps{
    const [links, setLinks] = useState<ContactDataEntry[]>([]);

    useEffect(() => {
        new PortfolioService().getContactData()
            .then(contactData => {
                setLinks([...contactData.filter(c => c.contactType == 3)])
            });
    }, []);


    return {
        lines:["Erick Fernando Mora Ramirez", "Software developer"],
        links:links.map(l => ({
            name: l.value,
            location: l.url
        }))
    }
};