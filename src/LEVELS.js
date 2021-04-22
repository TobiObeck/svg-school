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

export default [
  {
    heading: "Introduction",
    tutorialText: "lorem...",
    solutionSVG: level2, // '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />'
  },
];
