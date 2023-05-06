import { JumbotronProps } from "./Jumbotron";

export default function useJumbotron():JumbotronProps{
    return {
        lines:["Erick Fernando Mora Ramirez", "Software developer"],
        links:[
            {
                name: 'Github',
                location: 'https://github.com/codeRookieErick'
            },
            {
                name: 'Nuget',
                location: 'https://www.nuget.org/profiles/codeRookieErick'
            },
            {
                name: 'Pypi',
                location: 'https://pypi.org/user/erick.mora'
            },
            {
                name: 'Resume',
                location: 'https://drive.google.com/drive/folders/164DI5lazSDvE8u5chMXRwJBG69kRwAc6?usp=share_link'
            },
        ]
    }
};