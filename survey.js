const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//define response variables:
let fullName = "";
let favActivity = "";
let favMusic = "";
let favFood = "";
let favSport = "";
let superPower = "";

// What's your name? Nicknames are also acceptable
rl.question('What is your name? (Nicknames are also acceptable)', (answer) => {
  fullName = answer;
  console.log(`Nice to meet you ${fullName}!`);
  rl.question("What's an activity you like doing?", (answer) => {
    favActivity = answer;
    console.log(`Aah, ${favActivity} is a fine choice!`);
    rl.question("What do you listen to while doing that?", (answer) => {
      favMusic = answer;
      console.log(`Nice! I listen to ${favMusic} too`);
      rl.question(`What is your favorite meal?`, (answer) => {
        favFood = answer;
        console.log(`Yum! ${favFood} is great!`);
        rl.question(`Which sport is your favorite?`, (answer) => {
          favSport = answer;
          console.log(`${favSport} is very fun!`);
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
            superPower = answer;
            rl.close();
            let fullResponse = `Hi there! my name is ${fullName}, and my favorite activity is: ${favActivity}. I listen to ${favMusic} while doing it, and enjoying eating ${favFood} while I watch my favorite sport: ${favSport}. My superpower is: ${superPower}!`;
            console.log(fullResponse);
          });
        });
      });
    });
  });
});
