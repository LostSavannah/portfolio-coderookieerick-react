export type SkillSetResult = {
    skills:{
        name:string,
        value:number
    }[]
};

export default function useSkillSet():SkillSetResult{
    return{
        skills:[
            {name:"C#", value: 9},
            {name:"Transact-SQL", value: 7},
            {name:"Python", value: 6},
            {name:"Typescript", value: 4}
        ]
    };
};