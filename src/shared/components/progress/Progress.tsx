import { useRef } from "react";
import useProgress from "./useProgress";

export type ProgressProps = {
    value:number,
    max:number,
    interval?:number,
    steps?:number
}

export default function Progress({value, max, interval = 500, steps = 10}:ProgressProps){
    const r = useRef<HTMLSpanElement>(null);
    useProgress(interval, steps, value, (n) => {
        if(r != null){
            let value:string = Array<string>(max)
                .fill("☆", 0, max)
                .fill("★", 0, n)
                .join("");
            r!.current!.innerHTML = value;
        }
    });
    return (<><span className="pfl-progress" ref={r}></span></>);
}