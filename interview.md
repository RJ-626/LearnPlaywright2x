# Why We Always Use `const` for Objects in JavaScript

When you declare an object with `const` in JavaScript, you're not making the **object's properties** immutable — you're making the **variable binding** immutable. Here is why that is the preferred default:

## 1. Prevents Accidental Reassignment
`const` ensures you don't accidentally overwrite the entire object later:

```javascript
const config = { apiUrl: 'https://api.example.com' };

config = { apiUrl: 'https://hacked.com' }; // ❌ TypeError: Assignment to constant variable
```

## 2. The Reference is Frozen, Not the Contents
You can still modify, add, or delete properties:

```javascript
const user = { name: 'Alice' };
user.name = 'Bob';        // ✅ Works fine
user.age = 30;            // ✅ Works fine
delete user.name;         // ✅ Works fine
```

If you want true immutability (read-only properties), you must use `Object.freeze()`:

```javascript
const user = Object.freeze({ name: 'Alice' });
user.name = 'Bob';        // ❌ Silently ignored (or throws in strict mode)
```

## 3. Signals Intent to Other Developers
Using `const` tells readers: *"This identifier will always point to this specific object instance."* It makes code easier to reason about, especially in large codebases.

## 4. Best Practice: Default to `const`, Use `let` Only When Reassignment is Needed
Modern JavaScript style guides recommend:

- **`const`** for values that won't be reassigned (most objects).
- **`let`** only when you genuinely need to reassign the variable (e.g., counters, accumulators, conditionally swapped references).

## Quick Comparison

| Declaration | Can Reassign Variable? | Can Mutate Object? |
|-------------|------------------------|--------------------|
| `const obj` | ❌ No | ✅ Yes |
| `let obj`   | ✅ Yes | ✅ Yes |

## Bottom Line
Use `const` for objects because you usually want to modify the *contents* of the object (properties) without replacing the *entire object* with a new reference. If you need to reassign the variable itself, switch to `let`.
