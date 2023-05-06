import { BioEntry } from "../../services/PortfolioService";

export type BioProps = {
    bio:BioEntry
};

export default function Bio({bio}:BioProps){
    return(<>
        <div className="shared-bio text-center">{bio.content}</div>
    </>);
}; 