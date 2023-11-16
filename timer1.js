// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

let inputs = process.argv.slice(2);

if (inputs === []) { // if empty, return immediately
  return;
}

inputs = inputs.map(x => Number(x)); // convert into numbers

for (let entry of inputs) {
  if (typeof entry === "number" && entry >= 0) { // skip any NaN or negatives
    setTimeout(() => {
      console.log(entry); // adding a write console here as my system sound takes longer than 1 second to play, so consecutive integers will not play the second sound
      process.stdout.write('\x07');
    }, (entry * 1000)); // it's in milliseconds
  }
}