# Javascript Data Types Exercises

> This worksheet will double as Javascript notes for future reference! Copy it into your preferred note-taking program at the end of class.

## Data Types

For each expression, predict what you think the output will be in a comment (`//`) ***without first running the command***. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

#### Example

```js
typeof("potato")
// Prediction: Vegetable
// Actual: String

The "typeof" operator returns the data type of its operand in the form of a string. The operand can be any object, function, or variable.
```

What is the output of each of the expressions below?

```js
typeof(15)
// Prediction: number
// Actual:  Number

typeof(5.5)
// Prediction: Decimal	
// Actual: Number 

typeof(NaN)
// Prediction: function
// Actual:   Number

typeof("hello")
// Prediction: Word	
// Actual: String

typeof(true)  	
// Prediction:  Word
// Actual:  Boolean

typeof(1 != 2)
// Prediction:  Numbers
// Actual:   Boolean


"hamburger" + "s"
// Prediction:  words and a letter
// Actual:  String

"hamburgers" - "s"
// Prediction:  words minus a letter
// Actual:  String

"1" + "3"
// Prediction:  Addition
// Actual:  Addition of strings

"1" - "3"
// Prediction:  Subtraction
// Actual:  Subtraction of Strings

"johnny" + 5
// Prediction:  Words plus number
// Actual:  String plus a number

"johnny" - 5
// Prediction:  Words minus a number 
// Actual:  String minus a number 

99 * "luftbaloons"
// Prediction: A number and an asterisk in front of a word
// Actual:  A generator for the word luftbaloons

/* The asterisk indicates that the function is a generator and the yield keyword which pauses function execution

Generator Function — defined with an asterisk near the function name or keyword
Generator Iterator — created when you invoke the Generator Function  */
```

What's going on in the second half of the previous question? Are there any "rules" we can pull from those examples?

Generator Function — defined with an asterisk near the function name or keyword
Generator Iterator — created when you invoke the Generator Function

## Data Structures

> Data structures include arrays and objects. We will go over objects in a later class.

### Arrays

Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...
* Add an element to the back of an array.

var greetings = [
  'Hello',
  'Bonjour'
];
greetings.push('Hola');
console.log(greetings);
'Hello, Bonjour, Hola';



* Remove an element from the back of an array.

var names = [Mary, Jane, Sue, Jenny];
names.length = 2; 
console.log( names ); 
'Mary', 'Jane', 'Sue';



* Add an element to the front of an array.

let numbers = [10, 20, 30, 40];
numbers.unshift(5, 7);
console.log(numbers);
5,7, 10, 20, 30, 40;



* Remove an element from the front of an array.

let months = ['Jan', 'Feb', 'March', 'April'];
months.shift(); 
console.log(months); 
'Feb', 'March', 'April';



* Concatenates all the elements in an array into a string.

const words = ['I', 'want', 'a', 'new', 'dog'];
const myWords = words.join(WOOF);
console.log(myWords);
'IWOOFwantWOOFaWOOFnewWOOFdogWOOF';



* Separates the characters of a string into an array. This one is a string method.

> This is a great exercise for practicing your "Google Fu"! If you need a starting point, check out [MDN's documentation page on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

```js
// Your answers go here.

```
JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.


What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

```js
let numbers = [2, 4, 6, 8];
numbers.pop();
console.log(numbers);
2, 4, 6;

numbers.push(10);
console.log(numbers);
2, 4, 6, 8, 10;


numbers.unshift(3);
console.log(numbers);
3, 2, 4, 6, 8;
```

```text
Your answer goes here.

let text = ['big', 'fat', brown', 'fox'];
text.pop();
console.log(text);
'big,' 'fat', 'brown';

text.push(burps);
console.log(text);
'big', 'fat', 'brown', 'fox', 'burps';


text.unshift(Totally);
console.log(text);
'Totally', 'big', 'fat', 'brown', 'fox';

What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

```js
let morse = ["dot", "pause", "dot"];
let moreMorse = morse.join(" dash ");
moreMorse.split(" ")
```

```text
Your answer goes here.

moreMorse = 'dot, 'dash', 'pause', 'dash', 'dot';

moreMorse = 'dotpausedot'; 
```

What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

```js
let bands = []
let beatles = ["Paul", "John", "George", "Pete"]
let stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"
```

```text
Your answer goes here.

bands.push(beatles);
console.log['Paul', 'John', 'George', 'Pete', 'beatles'];

bands.unshift(stones);
console.log['stones', 'Brian', 'Mick', Keith, 'Ronnie', 'Charlie'];

bands[bands.length -1].pop();
console.log['John', 'George'];
console.log['Mick', 'Keith', 'Ronnie'];

bands[0].shift();
console.log['George', 'Pete'];
console.log['Keith', 'Ronnie', 'Charlie'];

bands[1][3] = 'Ringo';
console.log['Paul', 'George', 'Ringo'];
console.log["Brian", "Keith", "Charlie", 'Ringo'];


```

## Booleans & Comparison Operators

Here's an example truth table for the `!` (not) operation. In it, we're listing the values of `!a` that correspond with a given value of `a`.

|a|!a|
|---|---|
|true|false|
|false|true|

Fill out the truth tables below for `&&` (and), `||` (or) and one that uses multiple comparison operators. All you need to do is replace the `?`'s with either `true` or `false`.

> **NOTE:** Because of markdown formatting, `||` and `&&` have been replaced with `OR` and `AND` respectively.
>
> **HINT:** With the last one, it may be helpful to add additional columns to the table for each individual comparison.

| a | b | a AND b |
| --- | --- | --- |
| true | true | TRUE |
| true | false | FALSE |
| false | true | FALSE |
| false | false | FALSE |

|a|b|a OR b|
|---|---|---|
|true|true|TRUE|
|true|false|TRUE|
|false|true|TRUE|
|false|false|TRUE|

|a|b|a `!=` b|
|---|---|---|
|3|3|TRUE|
|1|5|FALSE|
|2|"2"|FALSE|

|a|b|!a AND (a OR b)|
|---|---|---|
|true|true|TRUE|
|true|false|TRUE|
|false|true|TRUE|
|false|false|FALSE|

## Conditionals

You're a bouncer at a bar. Given an `age` variable, create a conditional that satisfies the following requirements...
* If a patron is older than `21`, print out `"Come on in!"`.
* If a patron is between `18` and `21`, print out `"Come on in (but no drinking)!"`.
* If a patron is younger than 18, print out `"You're too young to be in here!"`.
* If a patron is older than 75, print out `"Are you sure you want to be here?"`.

```js
// Your answer goes here.

let age = newBar().getAge();
if (age > 21){
	greeting = "Come on in!" {
		}else if (age >= 18 || <= 21) {
			greeting = "Come on in (but no drinking)!" {
				}else if (age < 18) {
		greeting = "You're too young to be here!" {
		}else (age >= 75) {
		greeting = "Are you sure you want to be here?";		
		     	}
			}
		}
	}		
		
	


```

#### Bonus

Bar patrons must have an ID if the bouncer is even going to consider what age they are.
- If the patron has an ID, the bouncer will then check if they are of the proper age
- If the patron does not have an ID, the bouncer will tell them `"No ID, no entry."`

> Hint: Whether the patron has an ID or not can be stored in a `hasId` variable. What do you think the stored data type should be?

let = noId 

## Loops

Your task is to create a loop that prints out all the odd numbers between 1 and 100...twice! Your solution must use one `for` loop and one `while` loop.

```js
// Your answer goes here.

var i = 0;
for (let i = 1; i <= 100; i+=2){
while (i <= 100) {
  console.log(i);
  
}
```

#### Bonus

* Try doing this using a single `for` loop
* Make it so that the first iteration of the loop prints out all odd numbers between 1 and 100 but the second iteration of the loop prints out all of the even numbers between 1 and 100

## Bonus: Fizz-Buzz

Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...
* Counts from 1 to 100 and prints out something for each number.
* If the number is divisible by 3, print `"Fizz"`.
* If the number is divisible by 5, print `"Buzz"`.
* If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
* If the number does not meet any of the above conditions, just print the number.

Your output should look something like this...

```text
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
```

```js
// Your answer goes here.
```

#### Bonus (for the bonus)

* Encapsulate all of your logic into a function, so that each iteration of the game will trigger function calls that look something like these...

```js
fizzBuzz(1)
// => prints "1" to the console

fizzBuzz(3)
// => prints "3" to the console

fizzBuzz(15)
// => prints "FizzBuzz" to the console
```

* Create a recursive solution (i.e., define a FizzBuzz function that calls itself in order to continue the game).

> [Resource](https://medium.com/@kevincennis/recursion-in-javascript-1608032c7a1f)
