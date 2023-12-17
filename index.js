// Code your solutions in this file
// Function to write thank you cards
function writeCards(names, eventName) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  // usage
  const thankYouCards = writeCards(["Ada", "Brendan", "Ali"], "birthday");
  console.log(thankYouCards);
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }

  countDown(10);
  