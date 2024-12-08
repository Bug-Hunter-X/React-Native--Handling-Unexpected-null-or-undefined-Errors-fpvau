The solution involves using optional chaining and the nullish coalescing operator to safely access object properties.

```javascript
//Correct code
const user = await getUser();
console.log(user?.name ?? 'Guest'); //Uses optional chaining and nullish coalescing
```

Optional chaining (`?.`) allows you to safely access nested properties. If any part of the chain is `null` or `undefined`, the expression short-circuits and returns `undefined` without throwing an error.

The nullish coalescing operator (`??`) provides a default value if the left-hand operand is `null` or `undefined`.  It avoids unexpected behavior when `0`, `false`, or empty strings are used as default values.

By combining these two operators, you create resilient code that gracefully handles unexpected `null` or `undefined` values.