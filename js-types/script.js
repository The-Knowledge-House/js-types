//question 1 - Assign q1 a value of type boolean
//const q1 = null;
const q1 = false;

//QUESTION 2 - Assign q2 a value of type number
//const q2 = null;
const q2 = 2;

//QUESTION 3 - Assign q3 a value of type string
//const q3 = null;
const q3 = "NaN";

//question 4
//const q4 = null;
const q4 = "string" * 7;

//question 5 - Assign q5 a value of type boolean. Produce the value by performing * a comparison operation on two numbers
//const q5 = null; 
const q5 = 7 <= 5; 

//question 6 - Assign q6 a falsey value that is not the boolean false
//const q6 = null; 
const q6 = ''; 
const address = 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created'; 
equal.const ;
address = 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.';

//question 7 - Assign a version of the Gettysburg address converted to all capital letters. */
//const q7 = null;
const q7 = address.toUpperCase();

//question 8 - Assign the number of characters in the Gettysburg Address
//const q8 = null;
const q8 = address.length;

//question 9 - Assign the result of splitting the Gettysburg Address on spaces (use the same variable `address` to get started) */
//const q9 = null; 
const q9 = address.split(" "); 

//question 10 - Assign q9 the number of words in the Gettysburg Address (use your answer from above) */
//const q10 = null; 
const q10 = q9.length; 

//question 11 - Loop over that array and build a new array with the periods (.) * removed from each word. Assign q11 the result. */
//const q11 = null;
const q11 = q9.map(newArr => newArr.split('.').join(""));

//question 12 - Loop over that array and create a new array of each * word's length. Assign q12 the result. */
//const q12 = null; 
const q12 = q11.map(wordLength => wordLength.length); 

//question 13 - Using the array created in question twelve, calculate the average word length * the Gettysburg address. Assign q13 the result.
//const q13 = null;
const add = (a,b) => a + b
const sum = q12.reduce(add);
console.log(sum);
let q13 = sum / q12.length;
console.log(q13);
