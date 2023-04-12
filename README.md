# gpt-to-json

Started with [this Stack Overflow](https://stackoverflow.com/questions/10574520/extract-json-from-text), then put my own spin on it:

- [x] does curly or square occur first?
- [x] find first index (indexOf)
- [x] find last index (lastIndexOf)
- [x] slice using those index values on both ends
- [x] like card counting in Blackjack, add and subtract for each open and close bracket respectively while ignoring everything else to ensure complete JSON by returning to zero
- [x] return string wrapped in JSON.parse()

## Usage

This isn’t a module and nothing is exported so you’ll need to copy the function from `tests.js` into your project.

To verify this function works as intended, run:

```
node tests.js
```
