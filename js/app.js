//- Project 5 - Quotes generator
//- Student: Thai Son Dang
//- Open Classroom




console.log("Call the function makeQuote() to generate a new Quote.");
console.log("Call the function  getQuotes() to get more Quotes.");

let topics, topic;

topics = {
    human: {
        subjects: [
            "The worker", "The woman", "The man", " The robot", "The teacher", "A person", "The student", "The girl", "The baby", "The fireman", "A saleman", "A saler", "A manager", "My sister", "The professor", "The chef", "The waiter", "The actor", "The actress", "The developer", "The customer", "The client"
        ],
        verbs: [
            "is doing", "is cooking", "is eating", "is playing", "is singing", "is reading", "is writing", "is buying", "is showing", "is checking", "is making", "is destroying", "is learning", "is collecting", "is baking", "is serving", "is planing", "is hitting"
        ],
        directObjects: [
            "homeworks", "flowers", "laundry", "books", "Math", "goods", "an app", "cakes", "stamps", "houses", "Physic", "Web developtment", "Javascript", "piano", "an instrument", "football", "hockey", "foods", "the table"
        ]
    },

    animals: {
        subjects: ["A cat", "A dog", "A horse", "A bear", "A monkey", "A donkey", "A lion", "A tiger", "A leopard", "A buffalo", "A cow", "A chicken", "A turtle", "A tortoise", "A camel", "A panda", "A penguin", "A crab", "An elephant", "A goat", "A sheep", "A pig", "A duck", "A fish", "A prawn"],
        verbs: [
            "is hunting", "is chasing after", "is eating", "is climbing", "is barking at", "is doing", "is cooking", "is eating", "is playing", "is singing", "is reading", "is writing", "is buying", "is showing", "is checking", "is making", "is destroying", "is learning", "is collecting", "is baking", "is serving", "is planing", "is hitting"
        ],
        directObjects: [
            "homeworks", "flowers", "laundry", "books", "Math", "goods", "an app", "cakes", "stamps", "houses", "Physic", "Web developtment", "Javascript", "piano", "an instrument", "football", "hockey", "foods", "the table"
        ]
    }
}

/*#################################
#########     STEP 1      #########
###################################*/
function makeQuote(topic = topics.human) {
    /*
    This function will make a new quote each time being called by assembling sentence fragments.

    Input: an object that has 3 properties : subjects, verbs, directObjects. Each of properties is an array. (default parameter is the human topic)

    Output: the assembled quote.
    */
    let quote, rand1, rand2, rand3, len1, len2, len3;
    len1 = topic.subjects.length;
    len2 = topic.verbs.length;
    len3 = topic.directObjects.length;

    rand1 = Math.floor(Math.random() * len1);
    rand2 = Math.floor(Math.random() * len2);
    rand3 = Math.floor(Math.random() * len3);

    quote = `${topic.subjects[rand1]} ${topic.verbs[rand2]} ${topic.directObjects[rand3]}.`;

    //console.log(quote);
    return quote;
}



/*#################################
#########     STEP 2      #########
###################################*/
function getQuotes() {

    /*
    This function when called will allow user choose the topic, number of quotes to be generated and then log the quotes to console.
    After that, user can make his choice to continue with the Quotes Generator or to quit it.
    */
    let topic, number, chosenTopic, quotes, userInput, output;

    //choose the topic (0 || 1)
    while (true) {
        userInput = parseInt(window.prompt("Please enter your choice:\n 0: Human activities\n1: Animal activities", 0));
        if (userInput == 1 || userInput == 0) {
            break;
        } else {
            alert("Please enter a valid number! 0 or 1");
            continue;
        }
    }

    //user's choice
    topic = (userInput == 0) ? "human" : "animals";

    //number of quotes to be generated. (1 - 5)
    while (true) {
        number = parseInt(window.prompt("How many quotes do you want to generate?\Choose between 1 and 5.", 1));
        if (number < 1 || number > 5 || isNaN(number)) {
            alert("Please choose a value between 1 and 5");
            continue;
        } else {
            break;
        }
    }

    //chosen topic (human || animals)
    chosenTopic = topics[topic];

    // array that contains #number random quotes.
    quotes = [];

    while (quotes.length != number) {
        // The loop will continue until we have enough quotes generated.
        let tempQuote = makeQuote(chosenTopic); //using the makeQuote() function to generate quote from a certain topic.

        if (quotes.indexOf(tempQuote) == -1) {
            quotes.push(tempQuote);
        } else {
            continue;
        }
    }

    // output to be log to console
    output = "";

    //loop through the array quotes.
    quotes.forEach((curr, index) => {
        output += "Quote #" + (index + 1) + ": " + curr + "\n";
    });


    console.log("*****************************************************");
    console.log(`${number} quotes from the topic  "${topic.toUpperCase()} ACTIVITIES".`);
    console.log(output + "\n");
    console.log("*****************************************************");


    // Now have the program to create new quotes || end the program
    let option = window.prompt("Choose an option below: \n0 to continue\n1 to quit the programm.", 0);

    if (option == "0") {
        getQuotes();
    }

    return "GOOD BYE !!!";
}

let t = true;

function onChange(event) {
    t ? t = false : t = true;
    console.log(t);
}
