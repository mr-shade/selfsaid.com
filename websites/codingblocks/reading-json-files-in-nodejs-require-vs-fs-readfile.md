---
title: "Reading json files in NodeJS: require() vs fs.readFile()"
date: "2018-12-11T21:24:43.000Z"
slug: "reading-json-files-in-nodejs-require-vs-fs-readfile"
image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
description: "Often we save settings or configurations in json files.  If you've spent some time using NodeJS, you'd know that there are quite a few  ways to read json files in NodeJS  Two of the most common ones are :  let jsonData = require('./file.json') // let jsonData = require('./file') // omitting"
tags: []
original_url: "https://blog.codingblocks.com/2018/reading-json-files-in-nodejs-require-vs-fs-readfile/"
---

![590px-Node.js_logo.svg](https://blog.codingblocks.com/content/images/2019/01/590px-Node.js_logo.svg.png)

Often we save settings or configurations in `json` files.  
If you've spent some time using NodeJS, you'd know that there are quite a few  
ways to read json files in NodeJS

Two of the most common ones are :

```javascript
let jsonData = require('./file.json')
// let jsonData = require('./file') // omitting .json also works
```

The other way is using the `fs` module.

We can either do it synchronously

```javascript
const fs = require('fs')
let jsonData = JSON.parse(fs.readFileSync('file.json', 'utf-8'))
```

Or we can do it asynchronously -

```javascript
const fs = require('fs')
let jsonData = {}
fs.readFile('file.json', 'utf-8', (err, data) => {
  if (err) throw err
  
  jsonData = JSON.parse(data)
})
```

Now obviously the question that comes to mind is which method to use,  
and if there are any obvious benefits to any one method  
![128px-JSON_vector_logo.svg](https://blog.codingblocks.com/content/images/2019/01/128px-JSON_vector_logo.svg.png)

Let us discuss the differences -

## Caching : (If the file data changes)

`require()` will cache the file in the require graph.  
So during the lifetime of the node app, if the `file.json` is changed,  
you will not get the new data, even if you re-run `require('./file.json')`

On the other hand `fs.readFile` or `fs.readFileSync` will always  
re-read the file, and pick up changes.

## Encoding : (UTF-8 is used 99% times, but still...)

In `require` you cannot define the file encoding. 99% of the times, that is  
not a problem.

Nevertheless if your json is not encoded in Unicode/UTF-8, you'd have to use  
`fs.readFile` as it supports encodings such as **ascii** or **latin1** or even  
**base64** (yes, yes, I hear you, no one saves JSON as base64)

## Sync vs Async

`require()` is synchronous, and hence blocking in nature.

`fs` provides both sync and async methods as shown above. If you want to  
read your JSON file without blocking, then `fs.readFile` is your only option.

_NOTE: From NodeJS 10.x, `import file from './file.json'` would be possible  
because of support for `modules`, which would allow async reading of json files  
without `fs`_

* * *

I hope you'll be able to take an informed decision in your future projects  
based on the points discussed here.