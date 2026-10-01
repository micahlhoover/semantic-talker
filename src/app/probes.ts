export interface Probe {
  category: string;
  label: string;
  text: string;
}

export const PROBES: Probe[] = [
  {
    category: "Intent",
    label: "Asking A Question",
    text: "This text is asking a question."
  },
  {
    category: "Intent",
    label: "Requesting Help",
    text: "This text is requesting help."
  },
  {
    category: "Intent",
    label: "Instructions",
    text: "This text provides instructions."
  },
  {
    category: "Intent",
    label: "An Opinion",
    text: "This text expresses an opinion."
  },
  {
    category: "Intent",
    label: "This Text Explains A Concept",
    text: "This text explains a concept."
  },
  {
    category: "Intent",
    label: "A Recommendation",
    text: "This text makes a recommendation."
  },
  {
    category: "Intent",
    label: "Information",
    text: "This text reports information."
  },
  {
    category: "Intent",
    label: "Clarification",
    text: "This text asks for clarification."
  },
  {
    category: "Intent",
    label: "Advice",
    text: "This text seeks advice."
  },
  {
    category: "Intent",
    label: "An Idea",
    text: "This text proposes an idea."
  },
  {
    category: "Intent",
    label: "A Problem",
    text: "This text describes a problem."
  },
  {
    category: "Intent",
    label: "A Solution",
    text: "This text offers a solution."
  },
  {
    category: "Intent",
    label: "A Complaint",
    text: "This text is a complaint."
  },
  {
    category: "Intent",
    label: "Appreciation",
    text: "This text expresses appreciation."
  },
  {
    category: "Intent",
    label: "A Warning",
    text: "This text gives a warning."
  },
  {
    category: "Intent",
    label: "This Text Compares Alternatives",
    text: "This text compares alternatives."
  },
  {
    category: "Intent",
    label: "A Position",
    text: "This text argues for a position."
  },
  {
    category: "Intent",
    label: "A Story",
    text: "This text tells a story."
  },
  {
    category: "Intent",
    label: "Information",
    text: "This text summarizes information."
  },
  {
    category: "Intent",
    label: "A Prediction",
    text: "This text makes a prediction."
  },
  {
    category: "Tone",
    label: "This Text Has A Positive Tone",
    text: "This text has a positive tone."
  },
  {
    category: "Tone",
    label: "This Text Has A Negative Tone",
    text: "This text has a negative tone."
  },
  {
    category: "Tone",
    label: "This Text Has A Neutral Tone",
    text: "This text has a neutral tone."
  },
  {
    category: "Tone",
    label: "Excitement",
    text: "This text expresses excitement."
  },
  {
    category: "Tone",
    label: "Frustration",
    text: "This text expresses frustration."
  },
  {
    category: "Tone",
    label: "Curiosity",
    text: "This text expresses curiosity."
  },
  {
    category: "Tone",
    label: "Confidence",
    text: "This text expresses confidence."
  },
  {
    category: "Tone",
    label: "Uncertainty",
    text: "This text expresses uncertainty."
  },
  {
    category: "Tone",
    label: "Urgency",
    text: "This text expresses urgency."
  },
  {
    category: "Tone",
    label: "Formal",
    text: "This text is formal."
  },
  {
    category: "Tone",
    label: "Informal",
    text: "This text is informal."
  },
  {
    category: "Tone",
    label: "Humorous",
    text: "This text is humorous."
  },
  {
    category: "Tone",
    label: "Serious",
    text: "This text is serious."
  },
  {
    category: "Tone",
    label: "Polite",
    text: "This text is polite."
  },
  {
    category: "Tone",
    label: "Critical",
    text: "This text is critical."
  },
  {
    category: "Tone",
    label: "Optimistic",
    text: "This text is optimistic."
  },
  {
    category: "Tone",
    label: "Pessimistic",
    text: "This text is pessimistic."
  },
  {
    category: "Tone",
    label: "Enthusiastic",
    text: "This text is enthusiastic."
  },
  {
    category: "Tone",
    label: "Cautious",
    text: "This text is cautious."
  },
  {
    category: "Tone",
    label: "Emotional",
    text: "This text is emotional."
  },
  {
    category: "Technical / Intellectual",
    label: "Technical",
    text: "This text is technical."
  },
  {
    category: "Technical / Intellectual",
    label: "Software",
    text: "This text concerns software."
  },
  {
    category: "Technical / Intellectual",
    label: "Artificial Intelligence",
    text: "This text concerns artificial intelligence."
  },
  {
    category: "Technical / Intellectual",
    label: "Data Science",
    text: "This text concerns data science."
  },
  {
    category: "Technical / Intellectual",
    label: "Programming",
    text: "This text concerns programming."
  },
  {
    category: "Technical / Intellectual",
    label: "Cloud Computing",
    text: "This text concerns cloud computing."
  },
  {
    category: "Technical / Intellectual",
    label: "Cybersecurity",
    text: "This text concerns cybersecurity."
  },
  {
    category: "Technical / Intellectual",
    label: "Mathematics",
    text: "This text concerns mathematics."
  },
  {
    category: "Technical / Intellectual",
    label: "Scientific Research",
    text: "This text concerns scientific research."
  },
  {
    category: "Technical / Intellectual",
    label: "Engineering",
    text: "This text concerns engineering."
  },
  {
    category: "Technical / Intellectual",
    label: "A Concept",
    text: "This text teaches a concept."
  },
  {
    category: "Technical / Intellectual",
    label: "A Situation",
    text: "This text analyzes a situation."
  },
  {
    category: "Technical / Intellectual",
    label: "Problem Solving",
    text: "This text includes problem solving."
  },
  {
    category: "Technical / Intellectual",
    label: "Troubleshooting",
    text: "This text involves troubleshooting."
  },
  {
    category: "Technical / Intellectual",
    label: "Architecture Or Design",
    text: "This text concerns architecture or design."
  },
  {
    category: "Technical / Intellectual",
    label: "Implementation Details",
    text: "This text discusses implementation details."
  },
  {
    category: "Technical / Intellectual",
    label: "Procedural Thinking",
    text: "This text contains procedural thinking."
  },
  {
    category: "Technical / Intellectual",
    label: "Strategic Thinking",
    text: "This text contains strategic thinking."
  },
  {
    category: "Technical / Intellectual",
    label: "Automation",
    text: "This text discusses automation."
  },
  {
    category: "Technical / Intellectual",
    label: "Innovation",
    text: "This text discusses innovation."
  },
  {
    category: "Work / Business",
    label: "The Workplace",
    text: "This text concerns the workplace."
  },
  {
    category: "Work / Business",
    label: "Project Management",
    text: "This text concerns project management."
  },
  {
    category: "Work / Business",
    label: "Management",
    text: "This text concerns management."
  },
  {
    category: "Work / Business",
    label: "Leadership",
    text: "This text concerns leadership."
  },
  {
    category: "Work / Business",
    label: "Staffing",
    text: "This text concerns staffing."
  },
  {
    category: "Work / Business",
    label: "Career Development",
    text: "This text concerns career development."
  },
  {
    category: "Work / Business",
    label: "Training",
    text: "This text concerns training."
  },
  {
    category: "Work / Business",
    label: "Productivity",
    text: "This text concerns productivity."
  },
  {
    category: "Work / Business",
    label: "Teamwork",
    text: "This text concerns teamwork."
  },
  {
    category: "Work / Business",
    label: "Collaboration",
    text: "This text concerns collaboration."
  },
  {
    category: "Work / Business",
    label: "Communication",
    text: "This text concerns communication."
  },
  {
    category: "Work / Business",
    label: "Customers",
    text: "This text concerns customers."
  },
  {
    category: "Work / Business",
    label: "Business Strategy",
    text: "This text concerns business strategy."
  },
  {
    category: "Work / Business",
    label: "Budgeting",
    text: "This text concerns budgeting."
  },
  {
    category: "Work / Business",
    label: "Finance",
    text: "This text concerns finance."
  },
  {
    category: "Work / Business",
    label: "Marketing",
    text: "This text concerns marketing."
  },
  {
    category: "Work / Business",
    label: "Organizational Change",
    text: "This text concerns organizational change."
  },
  {
    category: "Work / Business",
    label: "Operations",
    text: "This text concerns operations."
  },
  {
    category: "Work / Business",
    label: "Decision Making",
    text: "This text concerns decision making."
  },
  {
    category: "Work / Business",
    label: "Professional Advice",
    text: "This text concerns professional advice."
  },
  {
    category: "Human Topics",
    label: "Food",
    text: "This text concerns food."
  },
  {
    category: "Human Topics",
    label: "Travel",
    text: "This text concerns travel."
  },
  {
    category: "Human Topics",
    label: "Entertainment",
    text: "This text concerns entertainment."
  },
  {
    category: "Human Topics",
    label: "Sports",
    text: "This text concerns sports."
  },
  {
    category: "Human Topics",
    label: "Education",
    text: "This text concerns education."
  },
  {
    category: "Human Topics",
    label: "Health",
    text: "This text concerns health."
  },
  {
    category: "Human Topics",
    label: "Family",
    text: "This text concerns family."
  },
  {
    category: "Human Topics",
    label: "Hobbies",
    text: "This text concerns hobbies."
  },
  {
    category: "Human Topics",
    label: "Relationships",
    text: "This text concerns relationships."
  },
  {
    category: "Human Topics",
    label: "Lifestyle",
    text: "This text concerns lifestyle."
  },
  {
    category: "Human Topics",
    label: "Religion",
    text: "This text concerns religion."
  },
  {
    category: "Human Topics",
    label: "Law",
    text: "This text concerns law."
  },
  {
    category: "Human Topics",
    label: "History",
    text: "This text concerns history."
  },
  {
    category: "Human Topics",
    label: "Geography",
    text: "This text concerns geography."
  },
  {
    category: "Human Topics",
    label: "Creativity",
    text: "This text concerns creativity."
  },
  {
    category: "Human Topics",
    label: "Art",
    text: "This text concerns art."
  },
  {
    category: "Human Topics",
    label: "Writing",
    text: "This text concerns writing."
  },
  {
    category: "Human Topics",
    label: "Reading",
    text: "This text concerns reading."
  },
  {
    category: "Human Topics",
    label: "Personal Growth",
    text: "This text concerns personal growth."
  },
  {
    category: "Human Topics",
    label: "Future Goals",
    text: "This text concerns future goals."
  },
];
