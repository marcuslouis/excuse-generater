let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
function generater(arr){
    return Math.floor(Math.random() * arr.length)
}

// var pool = who[Math.floor(Math.random() * who.length)];
// var second = action[Math.floor(Math.random() * action.length)];
// var third = what[Math.floor(Math.random() * what.length)];
// var fourth = when[Math.floor(Math.random() * when.length)];

let p = `${who[generater(who)]} ${action[generater(action)]} ${what[generater(what)]} ${when[generater(when)]}`
document.getElementById("marcus").innerHTML = p;