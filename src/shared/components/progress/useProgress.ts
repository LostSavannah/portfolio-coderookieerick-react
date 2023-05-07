import { useEffect } from 'react';


export default function useProgress(interval:number, steps:number, value:number, onStep: (value:number) => void){
    useEffect(() => {
        const originalStep = steps;
        const intervalStep = interval / steps;
        const handler = setInterval(() => {
            onStep(Math.round(value - (value * (steps / originalStep))));
            if(steps-- <= 0){
                clearInterval(handler);
            }
        }, intervalStep);
        return () => {
            clearInterval(handler);
        };
    }, []);
}