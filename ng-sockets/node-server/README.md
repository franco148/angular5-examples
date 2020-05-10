### Required libraries
- npm install --save express
- npm install cors
- npm install body-parser
- npm install @types/express --save-dev # Suggested by node
- npm install @types/cors --save-dev # Suggested by node
- npm install --save socket.io
- npm install @types/socket.io --save-dev # Suggested by node

- Steps for installing `nodemon`
  - `sudo npm install nodemon -g`


### Extra tools
For using typescript in node js we would need to configure it. So for that execute `tsc --init`
Other required commands:
- tsc -w
- 

### Important Git Commands
- List the repository tags: `git tag`
- Create a tag: `git tag -a <version> -m "message"`
- Push the tag: `git push --tags`

### Required libraries CLIENT SIDE
- ngx-socket-io: npm i ngx-socket-io


### Dev Notes
- For TS we will need to do some configurations like, where the files should be generated, for that we need to configure `tsconfig.json`
  - target: We would want to changes the target from `ES5` to `ES6`
  - types: For now we will add `node`, so it can help us with imports.
  - outDir: The folder in which the TS code will be generated.



### Fixing issues:
- If we get an error like: `[nodemon] Internal watch failed: ENOSPC:`
  - We can be fixed according the following [fixing issue ](https://stackoverflow.com/questions/46938073/nodemon-internal-watch-failed-error), so the command is: `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
  - [Second source](https://stackoverflow.com/questions/22475849/node-js-what-is-enospc-error-and-how-to-solve)


