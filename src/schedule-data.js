const scheduleData = [
  [
    {
      date: "Aug 30",
      content: "Read 0.1 (all 3 pages)<br>Automata, Computability, Complexity<br>",
    },
    {
      date: "Aug 31",
      content: ""
    },
    {
      date: "Sep 1",
      content: "Read 1.1 (first 10 pages)<br>Finite Automata<br>"
    },
    {
      date: "Sep 2",
      content: " ",
    },
    {
      date: "Sep 3",
      content: "Read 1.1 (last 7 pages)<br>Regular Operations<br>"
    },
  ],
  [
    {
      date: "Sep 6",
      content: "<strong>Holiday<br></strong>",
    },
    {
      date: "Sep 7",
      content: "<strong>Add/Drop Deadline<br></strong>",
    },
    {
      date: "Sep 8",
      content: "Read 1.2 (first 8 pages)<br>Nondeterminism<br>",
    },
    {
      date: "Sep 9",
      content: " ",
    },
    {
      date: "Sep 10",
      content: "Read 1.2 (last 8 pages)<br>Equivalence of NFAs and DFAs<br>",
    },
  ],
  [
      {
      date: "Sep 13",
      content: "Read 1.3 (first 7 pages)<br>Regular Expressions<br>",
    },
    {
      date: "Sep 14",
      content: " ",
    },
    {
      date: "Sep 15",
      content: "Read 1.3 (last 7 pages)<br>Kleene's Theorem<br>",
    },
    {
      date: "Sep 16",
      content: " ",
    },
    {
      date: "Sep 17",
      content: "Read 1.4 (all 6 pages)<br>Nonregular Languages<br>",
    },
  ],
  [
      {
      date: "Sep 20",
      content: "Read 1.4 (all 6 pages again)<br>Nonregular Languages continued<br>",
    },
    {
      date: "Sep 21",
      content: " ",
    },
    {
      date: "Sep 22",
      content: "Read 2.1 (first 6 pages)<br>Context-Free Grammars<br>",
    },
    {
      date: "Sep 23",
      content: " ",
    },
    {
      date: "Sep 24",
      content: "Read 2.1 (last 4 pages)<br>Chomsky Normal Form<br>",
    },
  ],
  [
    {
      date: "Sep 27",
      content: "Read 2.2 (first 6 pages)<br>Pushdown Automata<br>",
    },
    {
      date: "Sep 28",
      content: " ",
    },
    {
      date: "Sep 29",
      content: "Read 2.2 (last 8 pages)<br>Equivalence of PDAs and CFGs<br>",
    },
    {
      date: "Sep 30",
      content: " ",
    },
    {
      date: "Oct 1",
      content: "Read 2.3 (all 5 pages)<br>Non-Context-Free Languages<br>",
    },
  ],
  [
    {
      date: "Oct 4",
      content: "Read 2.3 (all 5 pages again)<br>Non-Context-Free Languages<br>",
    },
    {
      date: "Oct 5",
      content: " ",
    },
    {
      date: "Oct 6",
      content: "Read 3.1 (all 11 pages)<br>Turing Machines<br>",
    },
    {
      date: "Oct 7",
      content: " ",
    },
    {
      date: "Oct 8",
      content: "Read 3.2 (all 6 pages)<br>Variations of Turing Machines<br>",
    },
  ],
  [
      {
      date: "Oct 11",
      content: "Read 3.3 (all 6 pages)<br>Definition of Algorithm<br>",
    },
    {
      date: "Oct 12",
      content: " ",
    },
    {
      date: "Oct 13",
      content: "Midterm Exam Review<br>",
    },
    {
      date: "Oct 14",
      content: " ",
    },
    {
      date: "Oct 15",
      content: "Midterm Exam Review<br>",
    },
  ],
  [
      {
      date: "Oct 18",
      content: "<strong>Midterm Exam (Oct 18 - Oct 19)<br></strong><br>No Class (due to exam)<br>",
    },
    {
      date: "Oct 19",
      content: "<strong>Midterm Exam (Oct 18 - Oct 19)<br></strong>",
    },
    {
      date: "Oct 20",
      content: "Read 4.1 (all 7 pages)<br>Decidable Languages<br>",
    },
    {
      date: "Oct 21",
      content: " ",
    },
    {
      date: "Oct 22",
      content: "Read 4.2 (first 6 pages)<br>Undecidable<br>",
    },
  ],
  [
    {
      date: "Oct 25",
      content: "Read 4.2 (last 4 pages)<br>Unrecognizable<br>",
    },
    {
      date: "Oct 26",
      content: " ",
    },
    {
      date: "Oct 27",
      content: "Read 5.1 (first 5 pages)<br>Reducibility<br>",
    },
    {
      date: "Oct 28",
      content: " ",
    },
    {
      date: "Oct 29",
      content: "Read 5.1 (first 5 pages again)<br>Reducibility continued<br>",
    },
  ],
  [
    {
      date: "Nov 1",
      content: "Read 5.1 (first 5 pages again)<br>Reducibility continued<br>",
    },
    {
      date: "Nov 2",
      content: " ",
    },
    {
      date: "Nov 3",
      content: "Read 5.3 (all 5 pages)<br>Mapping Reducibility<br>",
    },
    {
      date: "Nov 4",
      content: " ",
    },
    {
      date: "Nov 5",
      content: "Read 5.3 (all 5 pages again)<br>Mapping Reducibility continued<br>",
    },
  ],
  [
    {
      date: "Nov 8",
      content: "<strong>Withdraw Deadline<br></strong><br>Read 5.3 (all 5 pages again)<br>Mapping Reducibility continued<br>",
    },
    {
      date: "Nov 9",
      content: " ",
    },
    {
      date: "Nov 10",
      content: "Read 7.1 (first 4 pages)<br>Big-Oh Analysis<br>",
    },
    {
      date: "Nov 11",
      content: " ",
    },
    {
      date: "Nov 12",
      content: "Read 7.1 (last 6 pages)<br>Big-Oh Analysis continued<br>",
    },
  ],
  [
    {
      date: "Nov 15",
      content: "Read 7.2 (first 4 pages)<br>The Class P<br>",
    },
    {
      date: "Nov 16",
      content: " ",
    },
    {
      date: "Nov 17",
      content: "Read 7.2 (last 3 pages)<br>The Class P<br>",
    },
    {
      date: "Nov 18",
      content: " ",
    },
    {
      date: "Nov 19",
      content: "Read 7.3 (first 4 pages)<br>The Class NP<br>",
    },
  ],
  [
    {
      date: "Nov 22",
      content: "Read 7.3 (last 3 pages)<br>The Class NP<br>",
    },
    {
      date: "Nov 23",
      content: "No Class<br>",
    },
    {
      date: "Nov 24",
      content: "No Class<br>",
    },
    {
      date: "Nov 25",
      content: "<strong>Holiday<br></strong>",
    },
    {
      date: "Nov 26",
      content: "<strong>Holiday<br></strong>",
    },
  ],
  [
    {
      date: "Nov 29",
      content: "Read 7.4 (first 6 pages)<br>NP-Completeness<br>",
    },
    {
      date: "Nov 30",
      content: " ",
    },
    {
      date: "Dec 1",
      content: "Read 7.5 (first 3 pages)<br>More NP-Complete Problems<br>",
    },
    {
      date: "Dec 2",
      content: " ",
    },
    {
      date: "Dec 3",
      content: "Final Exam Review<br>",
    },
  ],
  [
    {
      date: "Dec 6",
      content: "Final Exam Review<br>",
    },
    {
      date: "Dec 7",
      content: " ",
    },
    {
      date: "Dec 8",
      content: "Final Exam Review<br>",
    },
    {
      date: "Dec 9",
      content: " ",
    },
    {
      date: "Dec 10",
      content: "Reading Day<br>",
    },
  ],
  [
    {
      date: "Dec 13",
      content: " ",
    },
    {
      date: "Dec 14",
      content: " ",
    },
    {
      date: "Dec 15",
      content: " ",
    },
    {
      date: "Dec 16",
      content: "<!--<strong>Section 1 Final Exam (Learning Suite)<br></strong><strong>Section 2 Final Exam (3106 JKB, 11:00 am)<br></strong>--><strong>Section 1 Final Exam<br></strong><br><strong>Section 2 Final Exam<br></strong>",
    },
    {
      date: "Dec 17",
      content: " ",
    },
  ],
];

export default scheduleData;
