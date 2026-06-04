# JavaScript String Methods Cheat Sheet

> **Quick Reference** for all built-in `String` methods.  
> Just remember: in JS, strings are **immutable** — every method returns a *new* string, it doesn't change the original.

---

## 🔍 Search & Check

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `charAt(index)` | Returns character at `index` | `"Hello".charAt(1)` | `"e"` |
| `charCodeAt(index)` | Returns UTF-16 code unit at `index` | `"A".charCodeAt(0)` | `65` |
| `codePointAt(index)` | Returns full Unicode code point | `"𠮷".codePointAt(0)` | `134071` |
| `includes(sub)` | Checks if string contains substring | `"Hello".includes("ell")` | `true` |
| `endsWith(sub)` | Checks if string ends with substring | `"file.js".endsWith(".js")` | `true` |
| `startsWith(sub)` | Checks if string starts with substring | `"Hello".startsWith("He")` | `true` |
| `indexOf(sub)` | First index of substring (or `-1`) | `"banana".indexOf("na")` | `2` |
| `lastIndexOf(sub)` | Last index of substring (or `-1`) | `"banana".lastIndexOf("na")` | `4` |
| `search(regex)` | Matches a regex, returns index | `"abc123".search(/\d/)` | `3` |
| `match(regex)` | Returns match array or `null` | `"abc123".match(/\d+/)` | `["123"]` |
| `matchAll(regex)` | Returns iterator of all matches | `[..."a1b2".matchAll(/\d/g)]` | `[["1"],["2"]]` |
| `at(index)` | Character at index (supports negatives) | `"Hello".at(-1)` | `"o"` |

---

## ✂️ Extract & Slice

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `slice(start, end?)` | Extracts section of string | `"Hello World".slice(0, 5)` | `"Hello"` |
| `substring(start, end?)` | Like `slice` but swaps negatives to `0` | `"Hello".substring(1, 4)` | `"ell"` |
| `substr(start, length?)` | **Deprecated** — extract `length` chars from `start` | `"Hello".substr(1, 3)` | `"ell"` |
| `split(sep, limit?)` | Splits string into an array | `"a,b,c".split(",")` | `["a","b","c"]` |
| `trim()` | Removes whitespace from both ends | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` / `trimLeft()` | Removes whitespace from start | `"  hi  ".trimStart()` | `"hi  "` |
| `trimEnd()` / `trimRight()` | Removes whitespace from end | `"  hi  ".trimEnd()` | `"  hi"` |

---

## 📝 Modify & Transform

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` | `"hello"` |
| `toUpperCase()` | Converts to uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `toLocaleLowerCase()` | Locale-aware lowercase | `"CAFE".toLocaleLowerCase("tr")` | `"cafe"` |
| `toLocaleUpperCase()` | Locale-aware uppercase | `"cafe".toLocaleUpperCase("tr")` | `"CAFE"` |
| `replace(search, newSub)` | Replaces **first** match only | `"a-a".replace("a", "b")` | `"b-a"` |
| `replaceAll(search, newSub)` | Replaces **all** matches | `"a-a".replaceAll("a", "b")` | `"b-b"` |
| `padStart(targetLen, padStr)` | Pads from the start | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(targetLen, padStr)` | Pads from the end | `"5".padEnd(3, "0")` | `"500"` |
| `repeat(count)` | Repeats the string | `"ha".repeat(3)` | `"hahaha"` |
| `concat(str2, ...)` | Joins strings together | `"He".concat("llo")` | `"Hello"` |
| `normalize(form?)` | Unicode normalization | `"\u0041\u030A".normalize()` | `"\u00C5"` |
| `toWellFormed()` | Replaces lone surrogates | `"\uD800".toWellFormed()` | `"\uFFFD"` |

---

## 🔗 Compare & Other

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `localeCompare(str)` | Compares two strings | `"a".localeCompare("b")` | `-1` |
| `valueOf()` | Returns primitive string value | `"hello".valueOf()` | `"hello"` |
| `toString()` | Returns the string itself | `(123).toString()` | `"123"` |
| `length` *(property)* | Returns number of characters | `"hello".length` | `5` |

---

## ⚠️ Deprecated (Avoid in new code)

These create HTML tags and should not be used in modern development:

| Method | Description |
|--------|-------------|
| `anchor(name)` | Creates `<a name="...">` tag |
| `big()` | Creates `<big>` tag |
| `blink()` | Creates `<blink>` tag |
| `bold()` | Creates `<b>` tag |
| `fixed()` | Creates `<tt>` tag |
| `fontcolor(color)` | Creates `<font color>` tag |
| `fontsize(size)` | Creates `<font size>` tag |
| `italics()` | Creates `<i>` tag |
| `link(url)` | Creates `<a href>` tag |
| `small()` | Creates `<small>` tag |
| `strike()` | Creates `<strike>` tag |
| `sub()` | Creates `<sub>` tag |
| `sup()` | Creates `<sup>` tag |

---

## 🧪 Static Methods

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `String.fromCharCode(...codes)` | Creates string from UTF-16 codes | `String.fromCharCode(65, 66)` | `"AB"` |
| `String.fromCodePoint(...codes)` | Creates string from code points | `String.fromCodePoint(134071)` | `"𠮷"` |
| `String.raw` | Returns raw template string | `String.raw`Hi\nHello` | `"Hi\\nHello"` |

---

## 💡 Pro Tip

| Operator | Description | Example | Output |
|----------|-------------|---------|--------|
| Bracket `[]` | Access character by index | `"hello"[1]` | `"e"` |
| `+` | Concatenation | `"he" + "llo"` | `"hello"` |
| Template Literal | Embedded expressions | `` `Hi ${name}` `` | (interpolated) |

---

*Made for quick reference. All examples are tested in modern JavaScript (ES6+).*