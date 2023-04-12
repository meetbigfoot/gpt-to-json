const toJSON = str => {
  const curly = str.indexOf('{')
  const square = str.indexOf('[')
  let first
  if (curly < 0) first = '[' // only for empty arrays
  else if (square < 0) first = '{'
  else first = curly < square ? '{' : '['
  const last = first === '{' ? '}' : ']'
  // ensure JSON is complete
  let count = 0
  for (c of str) {
    if (c === '{' || c === '[') count++
    else if (c === '}' || c === ']') count--
  }
  if (!count) return JSON.parse(str.slice(str.indexOf(first), str.lastIndexOf(last) + 1))
}

console.log(toJSON('{}'))
console.log(toJSON('[]'))
console.log(toJSON('asdf{}asdf'))
console.log(toJSON('asdf[]asdf'))
console.log(toJSON('asdf{"a":[{}]}asdf'))
console.log(toJSON('asdf[{"a":[{"b":"val"}]}]asdf'))
console.log(toJSON('asdf{"a":[{}]}'))
console.log(toJSON('asdf[{"a":[{"b":"val"}]}]'))
console.log(toJSON('{"a":[{}]}asdf'))
console.log(toJSON('[{"a":[{"b":"val"}]}]asdf'))
