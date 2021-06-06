const level1 = `<rect x="20" y="20" width="60" height="60" fill="black" />`;
const level2 = `<circle cx="30" cy="30" r="10" />
<circle cx="50" cy="30" r="10" />
<circle cx="70" cy="30" r="10" />

<circle cx="30" cy="50" r="10" />
<circle cx="50" cy="50" r="10" />
<circle cx="70" cy="50" r="10" />

<circle cx="30" cy="70" r="10" />
<circle cx="50" cy="70" r="10" />
<circle cx="70" cy="70" r="10" />`;

const triangle = `<path d="M71 47L92 79L51 79L11 79L31 47L51 16L71 47Z" fill="#b61656" />`;

// teaches that the order of overlapping objects is important
// and alternative of building it with a thik stroke
const level3 = `
<rect x="5" y="10" width="10" height="80" />
<rect x="30" y="30" width="40" height="40" stroke-width="20" stroke="black" fill="white" />
<rect x="85" y="10" width="10" height="80"/>
`;

export default [
  {
    heading: "Introduction",
    tutorialText: "lorem...",
    solutionSVG: level1, // '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />'
  },
  {
    heading: "Introduction 2",
    tutorialText: "lorem...",
    solutionSVG: level2, // '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />'
  },
  {
    heading: "Introduction 3",
    tutorialText: "lorem...",
    solutionSVG: level3, // '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />'
  },
];
