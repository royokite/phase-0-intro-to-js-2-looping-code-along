// JS looping code along!

function writeCards(gifterName, eventName) {
    const messages = [];

    for (let i = 0; i < gifterName.length; i++) {
        messages.push(`Thank you, ${gifterName[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

function countDown(positiveInteger) {
    let counter = 10;
    while (counter >= 0) {
        console.log(counter--)
    }
}
