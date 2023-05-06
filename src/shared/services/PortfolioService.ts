interface Entry{
    id:string;
};

export interface BioEntry extends Entry{
    content:string;
};

export class PortfolioService{
    private baseUrl:string = "https://dev.moradev.dev/portfolio/api";
    constructor(){

    }

    async getBioEntries():Promise<BioEntry[]>{
        const response = await fetch(`${this.baseUrl}/bio`);
        return (await response.json()) as BioEntry[];
    }

};