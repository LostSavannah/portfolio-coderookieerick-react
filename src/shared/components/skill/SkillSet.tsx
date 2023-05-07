import Progress from "../progress/Progress";
import useSkillSet from "./useSkillSet";

export default function SkillSet(){
    const {skills} = useSkillSet();
    return (<>
        <div className="h-100 d-flex flex-row align-items-center">
            <div className="d-flex w-100 flex-column align-items-center">
                <dl className="w-50">
                {skills.map((s, index) => (
                    <div key={index}>
                        <dt>{s.name}</dt><dd><Progress max={10} value={s.value}></Progress></dd>
                    </div>))}
                </dl>
            </div>
        </div>
    </>);
}