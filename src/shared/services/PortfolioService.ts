interface Entry{
    id:string;
};

export interface BioEntry extends Entry{
    content:string;
};

export interface PersonalDataEntry extends Entry{
    name:string;
    value:string;
};

export interface ContactDataEntry extends Entry{
    contactType:0|1|2|3|4;
    value:string;
    description:string;
    url:string;
};

export class PortfolioService{
    private baseUrl:string = "https://dev.moradev.dev/portfolio/api";
    constructor(){

    }

    async getBioEntries():Promise<BioEntry[]>{
        const response = await fetch(`${this.baseUrl}/bio`);
        return (await response.json()) as BioEntry[];
    }

    async getPersonalData():Promise<PersonalDataEntry[]>{
        const response = await fetch(`${this.baseUrl}/personal-data`);
        return (await response.json()) as PersonalDataEntry[];
    }

    async getContactData():Promise<ContactDataEntry[]>{
        const response = await fetch(`${this.baseUrl}/contact`);
        return (await response.json()) as ContactDataEntry[];
    }
};