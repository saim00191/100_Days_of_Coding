// Nullish coalescing operator '??'

// The nullish coalescing operator is written as two question marks ??.

// As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.
// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

// The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

// We can rewrite result = a ?? b using the operators that we already know, like this:

result = (a !== null && a !== undefined) ? a : b;

// Now it should be absolutely clear what ?? does. Let’s see where it helps.

// The common use case for ?? is to provide a default value.

// For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:

let UserName;

console.log(UserName ?? "Anonymous");  // Anonymous (user is undefined)

let UserName2 = "John"

console.log(UserName2 ?? "Anonymous"); // John bescause UserName2 is not undefined

// We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.

// Let’s say we have a user’s data in variables firstName, lastName or nickName. All of them may be not defined, if the user decided not to fill in the corresponding values.

// We’d like to display the user name using one of these variables, or show “Anonymous” if all of them are null/undefined.

// Let’s use the ?? operator for that:

let fName = undefined
let lName = undefined
let nName = "John"
console.log(fName ?? lName ?? nName ?? "Anonymous"); //John b/c nName is defined

// Comparison with ||
// The OR || operator can be used in the same way as ??, as it was described in the previous chapter.

// For example, in the code above we could replace ?? with || and still get the same result:

let fName2 = undefined
let lName2 = undefined
let nName2 = "John"
console.log(fName2 || lName2 || nName2 || "Anonymous"); //John

// Historically, the OR || operator was there first. It’s been there since the beginning of JavaScript, so developers were using it for such purposes for a long time.

// On the other hand, the nullish coalescing operator ?? was added to JavaScript only recently, and the reason for that was that people weren’t quite happy with ||.

// The important difference between them is that:

// || returns the first truthy value.
// ?? returns the first defined value.
// In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

// In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

// For example, consider this:

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0


let height2 = 50
let width = null

let area = (height2 ?? 100) * (width ?? 100);
console.log(area); //5000


let x = (1 && 2) ?? 3; // Works
console.log(x); // 2


