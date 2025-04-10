# About TypeScript

Typescript is a popular statically typed language which is build around javascript, so it means we can have exactly the same syntax like inside **JavaScript**, but we're adding static typing to this, which actually means we're not getting errors just like inside runtime with JavaScript, we're getting them in transpilation time when we're transpiling typescript to JavaScript.

And it is important to mention that you can't use TypeScript directly in browsers. There we can use just JavaScript. This is why we must always transpile our TypeScript code to JavaScript code.

So getting transpilation errors is the most important benefit of TypeScript. Secondly, it is easier to scale our code because we are breaking less things.

Typically, if you just refactor your JavaScript application, you will break something for sure because you can see your error just in runtime but not in transpiling time.

Also typically you will see your typescript error directly inside your editor, even not in your terminal, which makes development much faster.

And last but not least, TypeScript helps us to define entities.

If we are talking just about JavaScript there we have just arrays and objects.

We don't have anything else to define and write what we have inside our applications.

Inside typescript, we have different data types to describe what we have inside our application.

For example, we can create an interface for the user and then in every single place of our application, we don't simply write an object with ID and name, but we define it as a user interface, which actually means TypeScript allows us with the usage of typing to define entities and work with entities across your application.

And this approach is much more stable and easier to read.

And if you are being asked what are cons of using TypeScript, **first of all is the level of entrance.**

If you are simply a beginner, it is much more difficult to start with TypeScript because additionally, to all JavaScript knowledge you must learn typings and it is not an easy task.

Another problem I already mentioned we can't really execute TypeScript directly in the browser, which means we must always transpile our TypeScript code to JavaScript code and it can take quite a lot of time if your project is really huge.