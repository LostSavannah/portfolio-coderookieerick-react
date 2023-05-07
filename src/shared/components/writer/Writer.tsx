import { useRef } from "react"
import useWriter from "./useWriter";

export type WriterProps = {
    messages?:string[]
};

export default function Writer({messages = ["Empty"]}:WriterProps){
    const writeRef = useRef<HTMLSpanElement>(null);
    useWriter(messages, (value) => {
        if(writeRef.current != null){
            writeRef.current.innerHTML = value;
        }
    });
    return (<>
        <span ref={writeRef}></span>
    </>);
}