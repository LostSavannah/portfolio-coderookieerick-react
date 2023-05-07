import { useEffect } from "react";


export default function useWriter(lines:string[], onChange:(value:string)=>void){
    useEffect(()=>{
        let index = 0;
        let letterIndex = 0;
        const handler = setInterval(() => {
            if(lines.length > 0){
                if(letterIndex - 10 > lines[index % lines.length].length){
                    letterIndex = 0;
                    index++;
                }
                let value:string = lines[index % lines.length].substring(0, letterIndex);
                onChange(value);
                letterIndex++;
            }
        }, 100);
        return () =>{
            clearInterval(handler);
        };
    }, []);
}