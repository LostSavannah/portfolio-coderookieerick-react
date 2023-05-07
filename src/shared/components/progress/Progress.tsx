import { useRef } from "react";
import useProgress from "./useProgress";

export type ProgressProps = {
    name:string,
    value:number
}

export default function Progress({name, value}:ProgressProps){
    const r = useRef<HTMLSpanElement>(null);
    useProgress(1000, 20, value, (n) => {
        if(r != null){
            r!.current!.innerHTML = n.toString();
        }
    });
    return (<>
        <div className="row">
            <div className="col-6">{name}</div>
            <div className="col-6"><span ref={r}></span>%</div>
        </div>
    </>);
}