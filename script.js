const truths = [
"If you could fuck any one of your friends, who would it be?",
"What's your favorite sexual fantasy?",
"How large was your first dick or, for guys, how long is yours?",
"Are you more a dom or a sub?",
"What's your biggest turn-on?",
"What's your biggest turn-off?",
"Top or bottom?",
"What's your least favorite thing about the opposite sex?",
"When did you masturbate for the first time, and what did you do it to?",
"What's the dumbest thing you've done for love?",
"Least favorite position?",
"Most favorite position?",
"What's your perfect size?",
"Do you believe in \"friends with benefits\"?",
"Does naughty talk get you aroused?",
"Is this better or worse than CAH?",
"What's your favorite body part on yourself or another person?",
"Who here would you want to sleep with?",
"Who would fuck, marry, kill?",
"Would you rather have sex in a pool, hot tub, or shower?",
"Do you believe in love at first sight?",
"Do you like giving/receiving anal?",
"Do you like giving/receiving oral?",
"Do you like giving/receiving vaginal?",
"How often do you think about sex?",
"Have you ever taken it in the butt, would you?",
"What is your biggest fear in a relationship?",
"How would you go about turning someone on?",
"Does size matter?",
"Would you eat someone out?",
"If you could pick a current friend to be \"friends with benefits\" with, who would it be?",
"Would you let someone sit on your face?",
"What's the biggest you'll go?",
"What's the smallest you'll go?",
"Tits or Ass?"
];

const dares = [
"Ask a friend what the size of their privates are and figure out if they're lying.",
"Do a lap-dance (even if your a guy).",
"Give someone a hickey.",
"Massage a random members butt.",
"Say the first thing that comes to mind.",
"Slap someone's rear.",
"Flash the group (if y'all are that daring).",
"Remove 2 pieces of clothing.",
"Sit on another player's lap until the end of the game.",
"If there's a pool or hot tub, choose a buddy and go skinny dipping.",
"Take off your pants for the rest of the game.",
"Whisper something in another member's ear.",
"Pick a player to tackle you.",
"Guess the size of another player's privates.",
"Challenge another player to a game of rock, paper, scissors. Winner gets their body part of choice sucked for 15 seconds.",
"Get another member horny.",
"Take off your shirt for the rest of the game.",
"T-Pose in your underwear.",
"In front of the group, turn all of your clothes inside out.",
"\"Ride\" someone with clothes on.",
"Mime a sex act and have others guess it.",
"Show how you would turn someone on.",
"Take off a piece of clothing for the next 3 rounds.",
"Show part of your buttocks so another player can draw a smiley on it.",
"Give a player a hickey in your place of choice (even if your a guy).",
"(If you're up to it) sit naked for the next 3 rounds.",
"Swap an article of clothing with the player on your left.",
"Guess the size of another player's breasts/penis.",
"Fuck it, just have sex or something.",
"Guess the condom size of another player."
];

function output(title,list) {

let max, item, result;

result=title+": "

max=list.length;
item=Math.floor(Math.random()*Math.floor(max));
result+=list[item];
  
document.getElementById("output").innerHTML = result;
  
}

function truth() { output("Truth",truths); }
function dare() { output("Dare",dares); }

function or() {
let id=Math.floor(Math.random()*Math.floor(2));
if (id==0) { truth(); }
else { dare(); }
