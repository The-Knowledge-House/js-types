# Javascript Data Types Exercises

> This worksheet will double as Javascript notes for future reference! Copy it into your preferred note-taking program at the end of class.

## Data Types

For each expression, predict what you think the output will be in a comment (`//`) **_without first running the command_**. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

#### Example

```js
typeof "potato";
// Prediction: Vegetable
// Actual: String
```

What is the output of each of the expressions below?

```js
typeof 15;
// Prediction: number
// Actual: number

typeof 5.5;
// Prediction: number
// Actual: number

typeof NaN;
// Prediction: NaN
// Actual: number

typeof "hello";
// Prediction: string
// Actual: string

typeof true;
// Prediction: boolean
// Actual: boolean

typeof (1 != 2);
// Prediction: boolean
// Actual: boolean

"hamburger" + "s";
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s";
// Prediction: hamburger
// Actual: hamburger

"1" + "3";
// Prediction: 4
// Actual: 4

"1" - "3";
// Prediction: -2
// Actual: -2

"johnny" + 5;
// Prediction:johnny5
// Actual: johnny5

"johnny" - 5;
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons";
//Prediction: 99luftbaloons
// Actual: NaN
```

What's going on in the second half of the previous question? Are there any "rules" we can pull from those examples?

> They need to be within a console.log()

## Data Structures

> Data structures include arrays and objects. We will go over objects in a later class.

### Arrays

Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...

- Add an element to the back of an array.
- Remove an element from the back of an array.
- Add an element to the front of an array.
- Remove an element from the front of an array.
- Concatenates all the elements in an array into a string.
- Separates the characters of a string into an array. This one is a string method.

> This is a great exercise for practicing your "Google Fu"! If you need a starting point, check out [MDN's documentation page on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

```js
// Your answers go here.
// Add an element to the back of an array: Array Push Method
Array.push();

// Remove an element from the back of an array: Array Pop Method || Array Splice Method
Array.pop();
Array.splice();

// Add an element to the front of an array: Array Unshift Method
Array.unshift();

// Remove an element from the front of an array: Array Shift Method
Array.shift();

// Concatenates all the elements in an array into a string: Array Join Method
Array.join();

// Separates the characters of a string into an array. This one is a string method: String Split Method
String.split();
```

What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

```js
let numbers = [2, 4, 6, 8];
numbers.pop();
numbers.push(10);
numbers.unshift(3);
```

```text
Your answer goes here.
numbers.pop();
- [2,4,6]

numbers.push(10);
- [2, 4, 6, 8, 10]

numbers.unshift(3);
- [3, 2, 4, 6, 8]

```

What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

```js
let morse = ["dot", "pause", "dot"];
let moreMorse = morse.join(" dash ");
moreMorse.split(" ");
```

```text
Your answer goes here.
let morse = ["dot", "pause", "dot"];
- ["dot", "pause", "dot"]

let moreMorse = morse.join(" dash ");
- "dot dash pause dash dot"

moreMorse.split(" ");
- ["dot", "dash", "pause", "dash", "dot"]

```

What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

```js
let bands = [];
let beatles = ["Paul", "John", "George", "Pete"];
let stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"];
bands.push(beatles);
bands.unshift(stones);
bands[bands.length - 1].pop();
bands[0].shift();
bands[1][3] = "Ringo";
```

```text
Your answer goes here.
bands.push(beatles);
- [["Paul", "John", "George", "Pete"]]

bands.unshift(stones);
- [["Brian", "Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Pete"]]

bands[bands.length - 1].pop();
- [["Brian", "Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George"]]

bands[0].shift();
- [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George"]]

bands[1][3] = "Ringo";
- [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Ringo"]]

```

## Booleans & Comparison Operators

Here's an example truth table for the `!` (not) operation. In it, we're listing the values of `!a` that correspond with a given value of `a`.

| a     | !a    |
| ----- | ----- |
| true  | false |
| false | true  |

Fill out the truth tables below for `&&` (and), `||` (or) and one that uses multiple comparison operators. All you need to do is replace the `?`'s with either `true` or `false`.

> **NOTE:** Because of markdown formatting, `||` and `&&` have been replaced with `OR` and `AND` respectively.
>
> **HINT:** With the last one, it may be helpful to add additional columns to the table for each individual comparison.

| a     | b     | a AND b |
| ----- | ----- | ------- |
| true  | true  | true    |
| true  | false | false   |
| false | true  | false   |
| false | false | false   |

| a     | b     | a OR b |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |

| a   | b   | a `!=` b |
| --- | --- | -------- |
| 3   | 3   | ?        |
| 1   | 5   | ?        |
| 2   | "2" | ?        |

| a     | b     | !a AND (a OR b) |
| ----- | ----- | --------------- |
| true  | true  | false           |
| true  | false | false           |
| false | true  | true            |
| false | false | true            |

## Conditionals

You're a bouncer at a bar. Given an `age` variable, create a conditional that satisfies the following requirements...

- If a patron is older than `21`, print out `"Come on in!"`.
- If a patron is between `18` and `21`, print out `"Come on in (but no drinking)!"`.
- If a patron is younger than 18, print out `"You're too young to be in here!"`.
- If a patron is older than 75, print out `"Are you sure you want to be here?"`.

```js
// Your answer goes here.
{
  let age = prompt("ID please.");
  {
    if (age >= 21 && age < 75) {
      console.log("Come on in!");
    } else if (age >= 18 && age < 21) {
      console.log("Come on in (but no drinking)!");
    } else if (age < 18) {
      console.log("You're too young to be in here!");
    } else if (age >= 75) {
      console.log("Are you sure you want to be here?");
    } else if (age == null || isNaN(age) == true) {
      console.log("No ID, no entry!");
    }
  }
}
```

#### Bonus

Bar patrons must have an ID if the bouncer is even going to consider what age they are.

- If the patron has an ID, the bouncer will then check if they are of the proper age
- If the patron does not have an ID, the bouncer will tell them `"No ID, no entry."`

> Hint: Whether the patron has an ID or not can be stored in a `hasId` variable. What do you think the stored data type should be?

## Loops

Your task is to create a loop that prints out all the odd numbers between 1 and 100...twice! Your solution must use one `for` loop and one `while` loop.

```js
// Your answer goes here.

//For Loop
let oddA = [];

for (let i = 1; i <= 1e2; i += 2) {
  oddA.push(i);
}

{
  console.log(oddA);
}

//While Loop
let oddB = [];

i = -1;
while (i <= 100 && i < 99) {
  i += 2;
  oddB.push(i);
}

{
  console.log(oddB);
}

//Bonus
let oddNums = [];
let evenNums = [];

for (let i = 1; i <= 1e2; i++) {
  if (i % 2 != 0) {
    oddNums.push(i);
  } else {
    evenNums.push(i);
  }
}
{
  console.log(oddNums);
  console.log(evenNums);
}
```

#### Bonus

- Try doing this using a single `for` loop
- Make it so that the first iteration of the loop prints out all odd numbers between 1 and 100 but the second iteration of the loop prints out all of the even numbers between 1 and 100

## Bonus: Fizz-Buzz

Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...

- Counts from 1 to 100 and prints out something for each number.
- If the number is divisible by 3, print `"Fizz"`.
- If the number is divisible by 5, print `"Buzz"`.
- If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
- If the number does not meet any of the above conditions, just print the number.

Your output should look something like this...

```text
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
```

```js
// Your answer goes here.
for (let i = 0; i <= 1e2; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

#### Bonus (for the bonus)

- Encapsulate all of your logic into a function, so that each iteration of the game will trigger function calls that look something like these...

```js
fizzBuzz(1);
// => prints "1" to the console

fizzBuzz(3);
// => prints "3" to the console

fizzBuzz(15);
// => prints "FizzBuzz" to the console
```

- Create a recursive solution (i.e., define a FizzBuzz function that calls itself in order to continue the game).

> [Resource](https://medium.com/@kevincennis/recursion-in-javascript-1608032c7a1f)
