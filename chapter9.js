(function() {

var re1 = new RegExp("abc");
var re2 = /abc/;



console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

// \d	Any digit character
// \w	An alphanumeric character (“word character”)
// \s	Any whitespace character (space, tab, newline, and similar)
// \D	A character that is not a digit
// \W	A nonalphanumeric character
// \S	A nonwhitespace character
// .	Any character except for newline

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

console.log(dateTime.test("30-01-2003 15:20"));
console.log(dateTime.test("30-jan-2003 15:20"));

//carets express wanting to match any character except the one you set

var notBinary = /[^01]/;

console.log(notBinary.test("1100100010100110"));
console.log(notBinary.test("1100100010200110"));

//when you put a plus sign (+) after something in regular expression, it indicates that the element may be repeated more than once. Thus, \/d+/ matches one or more digit characters (*) allows a character to match zero times

console.log(/'\d+'/.test("'123'"));

console.log(/'\d+'/.test("''"));

console.log(/'\d*'/.test("'123'"));

console.log(/'\d*'/.test("''"));
//? makes the u character optional in the following example
var neighbor = /neighbou?r/;

console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

//to indicate a pattern should occur a precise number of times use curly bracees {4} must occer 4 times to match {2,4} must occur at least twice and no more than 4 times

var dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(dateTime2.test("30-1-2003 8:45"));

//can also do open ended ranges with {5, }, which will give true if a match happens 5 or more times

var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));

var match = /\d+/.exec("one two 100");
console.log(match);

console.log(match.index);
console.log("one two 100".match(/\d+/));

var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(new Date());

console.log(new Date(2009, 11, 9));

console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

//month numbers start at zero, day numbers start at one, oh JavaScript you cruel cruel mistress

//Timestamps are stored as the number of milliseconds since the start of 1970, using negative numbers for times before 1970 following the unix time convention which was created around that time

console.log(new Date(2013, 11, 19).getTime());

var timeStamp = new Date(2013, 11, 19).getTime();

console.log(new Date(timeStamp));

//Date objects provide getFullYear, getMonth, getDate, getHours, getMinutes, and getSeconds as well as Date.now to get a millisecond count

function findDate(string) {
    var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
    var match = dateTime.exec(string);
    return new Date(Number(match[3]),Number(match[2]) -1, Number(match[1]));
}

console.log(findDate("30-1-2003"));

//carat matches the start of the input string, while the dollar sign matches the end

///^\d+$/ matches a string consisting entirely of one or more digits, /^!/ matches any string that starts with an exclamation point and /x^/ does not match any string (there cannot be an x before the start of the string)


// /\b denotes a word boundary








})('use strict');
