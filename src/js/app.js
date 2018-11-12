let topics;

topics = {
  human: {
    subjects: [
      "The worker",
      "The woman",
      "The man",
      " The robot",
      "The teacher",
      "A person",
      "The student",
      "The girl",
      "The baby",
      "The fireman",
      "A saleman",
      "A saler",
      "A manager",
      "My sister",
      "The professor",
      "The chef",
      "The waiter",
      "The actor",
      "The actress",
      "The developer",
      "The customer",
      "The client"
    ],
    verbs: [
      "is doing",
      "is cooking",
      "is eating",
      "is playing",
      "is singing",
      "is reading",
      "is writing",
      "is buying",
      "is showing",
      "is checking",
      "is making",
      "is destroying",
      "is learning",
      "is collecting",
      "is baking",
      "is serving",
      "is planing",
      "is hitting"
    ],
    directObjects: [
      "homeworks",
      "flowers",
      "laundry",
      "books",
      "Math",
      "goods",
      "an app",
      "cakes",
      "stamps",
      "houses",
      "Physic",
      "Web developtment",
      "Javascript",
      "piano",
      "an instrument",
      "football",
      "hockey",
      "foods",
      "the table"
    ]
  },

  animals: {
    subjects: [
      "A cat",
      "A dog",
      "A horse",
      "A bear",
      "A monkey",
      "A donkey",
      "A lion",
      "A tiger",
      "A leopard",
      "A buffalo",
      "A cow",
      "A chicken",
      "A turtle",
      "A tortoise",
      "A camel",
      "A panda",
      "A penguin",
      "A crab",
      "An elephant",
      "A goat",
      "A sheep",
      "A pig",
      "A duck",
      "A fish",
      "A prawn"
    ],
    verbs: [
      "is hunting",
      "is chasing after",
      "is eating",
      "is climbing",
      "is barking at",
      "is doing",
      "is cooking",
      "is eating",
      "is playing",
      "is singing",
      "is reading",
      "is writing",
      "is buying",
      "is showing",
      "is checking",
      "is making",
      "is destroying",
      "is learning",
      "is collecting",
      "is baking",
      "is serving",
      "is planing",
      "is hitting"
    ],
    directObjects: [
      "homeworks",
      "flowers",
      "laundry",
      "books",
      "Math",
      "goods",
      "an app",
      "cakes",
      "stamps",
      "houses",
      "Physic",
      "Web developtment",
      "Javascript",
      "piano",
      "an instrument",
      "football",
      "hockey",
      "foods",
      "the table"
    ]
  }
};
let topic = "animals"; // initiate the topic

function makeQuote(topic = topics.human) {
  /*
    This function generates a random quote each time it get called.

    INPUT: A choosen topic from topics object.

    OUTPUT: A assembled quote
    */
  let quote, rand1, rand2, rand3, len1, len2, len3;

  len1 = topic.subjects.length;
  len2 = topic.verbs.length;
  len3 = topic.directObjects.length;

  // get random indexes
  rand1 = Math.floor(Math.random() * len1);
  rand2 = Math.floor(Math.random() * len2);
  rand3 = Math.floor(Math.random() * len3);

  quote = `${topic.subjects[rand1]} ${topic.verbs[rand2]} ${
    topic.directObjects[rand3]
  }.`;

  return quote;
}

function getQuotes(topic, quantity) {
  /*
    This function makes use of the function makeQuotes() to generate a desired quantity of quotesArr.

    INPUT: topic: Object
           quantity: Integer

    OUTPUT: String :html format  contains all generated quotesArr.
    */
  let quotesArr, output;

  // array that contains #number random quotesArr.
  quotesArr = [];

  while (quotesArr.length != quantity) {
    // The loop will continue until we have enough quotesArr generated.

    let tempQuote = makeQuote(topic); // 1 quote per Call

    if (quotesArr.indexOf(tempQuote) == -1) {
      quotesArr.push(tempQuote);
    } else {
      continue;
    }
  }

  // output to be log to console
  output = "";

  //loop through the array quotesArr.
  quotesArr.forEach((curr, index) => {
    output +=
      "<p class='quote'>" +
      "<b>Quote #" +
      (index + 1) +
      ":</b> &nbsp;&nbsp;" +
      curr +
      "</p>" +
      "\n";
  });

  $(".board__display").html(output);
  // console.log(output);
}

$(function() {
  /*
        switch topic
    */
  $(".switch-button").on("click", function(e) {
    e.target.checked ? (topic = "animals") : (topic = "human");
  });
});

$(function() {
  /*
        click on generate button
    */
  $(".generate-button").on("click", function() {
    let quantity = $("#input--quantity").val();
    getQuotes(topics[topic], quantity);
  });
});

$(function() {
  /*
    controll how many quotesArr user wants to generate.
    min of 1 and max of 5.
    */
  $("input").focus(function() {
    $(this).blur();
  });
  $("button").focus(function() {
    $(this).blur();
  });

  $("#plus").click(function() {
    let t = $("#input--quantity").val();
    t++;
    t > 5 ? (t = 1) : (t = t);
    $("#input--quantity").val(t);
  });

  $("#minus").click(function() {
    let t = $("#input--quantity").val();
    t--;
    t < 1 ? (t = 5) : (t = t);
    $("#input--quantity").val(t);
  });
});
