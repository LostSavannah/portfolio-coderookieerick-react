import useJumbotron from "./useJumbotron";

export type JumbotronProps = {
    lines?:string[];
    links?:{
        name:string,
        location:string
    }[];
};

export default function Jumbotron(){
    
    const {lines, links} = useJumbotron();

    return(
        <>
            <div className="h-100 d-flex flex-column align-items-center justify-content-center bg-dark text-light">
                <img 
                    src="https://www.gravatar.com/avatar/942ba30693b42fae8f361d1a51220bcd" 
                    alt="Gravatar icon" />
                <div>
                    {(lines??[]).map((line, index) => (<h4 key={index} className="text-center">
                        {line}
                    </h4>))}
                </div>
                <div className="d-flex flex-row align-items-center">
                    {(links??[]).map((link, index) => (<a 
                        className="m-1 btn btn-danger"
                        target="_blank"
                        key={index}
                        href={link.location}>
                            {link.name}
                    </a>))}
                </div>
            </div>
        </>
    );
};