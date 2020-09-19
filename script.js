/**
 * All of your answers should be stored in
 * variables matching the question number (q1, q2, etc.)
 */

/**
 * EXAMPLE
 * QUESTION 1
 * Assign q1 a value of type boolean
 */

const q1 = true;

/**
 * QUESTION 2
 * Assign q2 a value of type number
 */
const q2 = 6;


/**
 * QUESTION 3
 * Assign q3 a value of type string
 */
const q3 = "Watermelon";


/**
 * QUESTION 4
 * Assign q4 a value of NaN (not a number). Produce NaN by performing
 * an operation where neither of the operands are NaN
 * (i.e. `const q4` = NaN * 5 does not count)
 */



const q4 =  0 / 0;

/**
 * QUESTION 5
 * Assign q5 a value of type boolean. Produce the value by performing
 * a comparison operation on two numbers.
 */
const q5 = 5 >= 5;

/**
 * QUESTION 6
 * Assign q6 a false value that is not the boolean false
 */
const q6 = 6 < 2;   

/**
 * For use in the next few questions, 
 * here's the text of the Gettsyburg Address.
 */
const address = `
Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.
But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.
`
/**
 * QUESTION 7
 * 
 * Assign a version of the Gettysburg address converted to all capital letters.
 */
const q7 = address.toUpperCase();


/**
 * QUESTION 8
 * Assign the number of characters in the Gettysburg Address
 */
const q8 = address.length;

/**
 * QUESTION 8
 * Assign the result of splitting the Gettysburg Address on spaces
 * (use the same variable `address` to get started)
 */
const q9 = address.split(" "); 


/**
 * QUESTION 9
 * Assign q9 the number of words in the Gettysburg Address
 * (use your answer from above)
 */
const q10 = q9.length; 


/**
 * QUESTION 10
 * The array created in question 9 includes periods.
 * Loop over that array and build a new array with the periods (.)
 * removed from each word. Assign q11 the result.
 */

let newArray = [];
for (let word of q9) {
  const wordNoPeriod = word.replace(".", "");
  newArray.push(wordNoPeriod);
}

const q11 = newArray;

/*  TNC
work => Four.
wordNoPeriod => ["Four"]
newArray => ["Four"]

...
word => groung.
wordNoPeriod => ground
newArray => ["Four", "score", ...earth]

TNC
*/

/**
 * QUESTION 12
 * The array created in question 11 is each word of the Gettysburg Address
 * with no punctuation. Loop over that array and create a new array of each
 * word's length. Assign q11 the result.
 */

wordLengthArray = [];
for (let word of q11) {

  const newWordLength = word.length;
  wordLengthArray.push(newWordLength);
}

const q12 = wordLengthArray; 


/**
 * QUESTION 13
 * Using the array created in question twelve, calculate the average word length
 * the Gettysburg address. Assign q13 the result.
 */

let gettyAddressTotal = 0;
for(let length of q12) {

    gettyAddressTotal += length;
}

let gettyAddressAverage = gettyAddressTotal / q12.length;



const q13 = gettyAddressAverage;

/*  When you do  "for ()" what you are doing is your setting up a variable for each item in the array.  "Of" get me each item in the array and set it to the variable that I just declared (ex: ("let length of q12"). Remember ti always check to see what you put to make sure its consistent. 

When we have the item "q12.length" we are saying get the length property of q12; what is the length of q12? When you have q12.push(5) your saying add 5 to the end of q12.

Make sure all corresponding "let's" and "const" names are the same.
 */


module.exports = {
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13
};