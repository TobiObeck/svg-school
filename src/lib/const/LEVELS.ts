
interface Level {
    solutionSVG: string,
    title: string,
    description: string
}

export const LEVELS: Array<Level> = [
    {
        title: 'the black square',
        solutionSVG: '<rect x="20" y="20" width="60" height="60" fill="black" />',
        description: `The very first task is to create a black square.
        Use the syntax for a rectangle \`<rect x="" y="" width="" height=""/>\` to create a square.
        Choose proper number values e.g. \`x="10"\`.`,
        // trivia: you can learn more about the famous black square painting here: https://en.wikipedia.org/wiki/Black_Square_(painting)
        // Also the square is just wearing black until a darker color comes out
    },
    {
        title: 'Abstract Art Mondrian',
        solutionSVG: `
        <rect x="20" y="20" width="20" height="40" fill="black" />
        <rect x="40" y="60" width="40" height="20" fill="black" />
        `,
        description: `I hope you remember the syntax from the last level to create a rectangle.
        This time you also have to apply two different colors.
        to do this use the fill attribute and a color. E.g.: \`fill="yellow"\` 
        A list of possible color keyword can be found here: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value`,
    },
    {
        title: '9 blue squared balls',
        solutionSVG: `<circle cx="30" cy="30" r="10" fill="blue" />
        <circle cx="50" cy="30" r="10" fill="blue" />
        <circle cx="70" cy="30" r="10" fill="blue" />
        
        <circle cx="30" cy="50" r="10" fill="blue" />
        <circle cx="50" cy="50" r="10" fill="blue" />
        <circle cx="70" cy="50" r="10" fill="blue" />
        
        <circle cx="30" cy="70" r="10" fill="blue" />
        <circle cx="50" cy="70" r="10" fill="blue" />
        <circle cx="70" cy="70" r="10" fill="blue" />`,
        description: '',
    },
    {
        title: 'swig swaggity swoody',
        solutionSVG: `<rect x="5" y="10" width="10" height="80" />
        <rect x="30" y="30" width="40" height="40" stroke-width="20" stroke="black" fill="white" />
        <rect x="85" y="10" width="10" height="80"/>`,
        description: ''
    },
    {
        title: 'Mondrian (abstract art)',
        solutionSVG: `<rect x="1" y="1" width="58" height="60" style="fill:rgb(255,0,0);stroke:black;stroke-width:2px;"/>
        <rect x="59" y="1" width="40" height="30" style="fill:rgb(255,237,0);stroke:black;stroke-width:2px;"/>
        <rect x="59" y="30" width="20" height="30" style="fill:white;stroke:black;stroke-width:2px;"/>
        <rect x="80" y="30" width="20" height="30" style="fill:white;stroke:black;stroke-width:2px;"/>
        <rect x="60" y="60" width="40" height="15" style="fill:white;stroke:black;stroke-width:2px;"/>
        <rect x="30" y="60" width="30" height="15" style="fill:white;stroke:black;stroke-width:2px;"/>
        <rect x="30" y="75" width="30" height="15" style="fill:white;stroke:black;stroke-width:2px;"/>
        <rect x="0" y="90" width="30" height="20" style="fill:white;stroke:black;stroke-width:2px;"/>
        <rect x="30" y="90" width="30" height="10" style="fill:rgb(19,19,19);stroke:black;stroke-width:2px;"/>
        <rect x="0" y="60" width="30" height="30" style="fill:rgb(19,19,19);stroke:black;stroke-width:2px;"/>
        <rect x="60" y="75" width="40" height="25" style="fill:rgb(32,59,113);stroke:black;stroke-width:2px;"/>`,
        description: ''
    },
    {
        title: 'default exports sind illegel, Punkt!',
        solutionSVG:'',
        description: ''
    }
]

