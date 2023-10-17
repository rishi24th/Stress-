
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let seasons = ["Spring", "Summer", "Winter", "Fall"];

let responseType = { 
    yesNo: [{text: "Yes", score: 1}, {text: "No", score: 0}],
    weekday: weekdays,
    frequency: [
        {text: "Not at all", score: 0},
        {text: "A little bit", score: 1},
        {text: "A couple times a month", score: 2},
        {text: "A couple times a week", score: 3},
        {text: "Every Day", score: 4}],
    userInput: [],
    season: seasons
}

let depressionQuestions = [ 
    {question: "Are you having thoughts that you would be better off dead, or of hurting yourself?",
        response: responseType.yesNo},
    {question: "Are you having trouble concentrating on things such as reading the newspaper or watching TV?",
        response: responseType.yesNo},
    {question: "Are you feeling bad about yourself (ex. feel like a failure or let your family down)?",
        response: responseType.yesNo},
    {question: "Do you have a poor appetite or are you overeating?",
        response: responseType.yesNo},
    {question: "Are you feeling tired or having little energy?",
        response: responseType.yesNo},
    {question: "Are you having trouble falling or staying asleep, or sleeping too much?",
        response: responseType.yesNo},
    {question: "Are you feeling down, depressed, or hopeless?",
        response: responseType.yesNo},
    {question: "Do you have little interest or pleasure in doing things?",
        response: responseType.yesNo},
] // 8 questions

let ptsdQuestions = [
    {question: "Are you having nightmares about a distressing event(s) or thought about the event(s) when you did not want to?",
        response: responseType.yesNo},
    {question: "Are you trying hard not to think about a distressing event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
        response: responseType.yesNo},
    {question: "Do you feel constantly on guard, watchful, or easily startled?",
        response: responseType.yesNo},
    {question: "Do you feel numb or detached from people, activities, or your surroundings?",
        response: responseType.yesNo},
    {question: "Do you feel guilty or unable to stop blaming yourself or others for a distressing events(s) or any problems the event(s) may have caused?",
        response: responseType.yesNo},
] // 5 questions

let schQuestions = [ 
    {question: "Are you experiencing any brain fog?", response: responseType.yesNo},
    {question: "Are you struggling to remember to eat or drink water?", response: responseType.yesNo},
    {question: "Are your thoughts jumbled or are you unable to think clearly?", response: responseType.yesNo},
    {question: "Are you having trouble seeing things or are you seeing things that aren't there?", response: responseType.yesNo},
    {question: "Are you having trouble hearing things or are you hearing things that aren't there?", response: responseType.yesNo},
    {question: "Do you feel extremely tired?", response: responseType.yesNo},
    // mood disorder
    {question: "Are the happy thoughts speeding up your thought process?", response: responseType.yesNo},
    {question: "Are the sad thoughts slowing down your thought process?", response: responseType.yesNo},
    {question: "Are you having any grandiose thoughts?", response: responseType.yesNo},
];

let impairmentQuestions = [ // an array of objects -
    {question: "What is the Weekday?", response: responseType.weekday},
    {question: "Type in the first three things you see", response: responseType.userInput},
    {question: "What is the year?", response: responseType.userInput},
    {question: "What is the season?", response: responseType.season},
    {question: "Spell 'WORLD' backwards", response: responseType.userInput},
    {question: "What were the three things you typed in before", response: responseType.userInput},

]; // these questions have right or wrong answers - ICEBOX

let addictionQuestions = [
    {question: "Are you using substances to numb any physical or emotional pain?", response: responseType.yesNo},
    {question: "Do you feel like you should cut down on your substance use?", response: responseType.yesNo},
    {question: "Are you feeling guilty about using substances?", response: responseType.yesNo},
    {question: "Is anyone annoying you by criticizing your substance use?", response: responseType.yesNo},
    {question: "Do you feel that your substance use significantly decreases your ability to function?", response: responseType.yesNo},
    {question: "Are you using substances as soon as you wake up in the morning?", response: responseType.yesNo}
] // 6 questions

let anxietyQuestions = [  // an array of objects GAD-7
    {question: "Are you feeling nervous, anxious, or on edge?",
        response: responseType.yesNo},
    {question: "Are you feeling unable to stop or control worrying?",
        response: responseType.yesNo},
    {question: "Are you worrying too much about different things?",
        response: responseType.yesNo},
    {question: "Are you having trouble relaxing?",
        response: responseType.yesNo},
    {question: "Are you so restless that it is hard to sit still?",
        response: responseType.yesNo},
    {question: "Are you feeling easily annoyed or irritable?",
        response: responseType.yesNo},
    {question: "Are you feeling as if something awful might happen?",
        response: responseType.yesNo},
]; // 7 questions

let questionBank = [
    depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions
]

function saveQuestions() {
    localStorage.setItem("questions", JSON.stringify(questionOptions))
}

function loadQuestions() {
    let questionList = JSON.parse(localStorage.getItem("questions"));
    if (!questionList) {
        questionList = [];
    }
}