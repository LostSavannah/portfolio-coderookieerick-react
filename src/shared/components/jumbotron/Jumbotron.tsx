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
                <div className="container">
                    <div className="row">
                        <div className="d-flex flex-column align-items-end col-2">
                            <img 
                                src="https://www.gravatar.com/avatar/942ba30693b42fae8f361d1a51220bcd" 
                                alt="Gravatar icon" />
                        </div>
                        <div className="col-10">
                             {(lines??[]).map((line, index) => (<h4 key={index}>
                                {line}
                             </h4>))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col">
                            <div className="d-flex flex-row align-items-start">
                                {(links??[]).map((link, index) => (<a 
                                    className="m-1 btn btn-danger"
                                    target="_blank"
                                    key={index}
                                    href={link.location}>
                                {link.name}
                                </a>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};