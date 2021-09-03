create index.html
  type html:5 tab
  add <script src="app.js" defer></script> under <title> tag

create app.ts file
  console.log("will see how lite:sever is changing live...")

compile .ts file -> tsc app.ts in terminal (can check by open inspect in browser)

in order auto compile and reload what we change -> install tool 
  1 - npm init (enter until done -> will see the package.json installed)
  2 - npm install --save-dev lite-server -> to install dependencies (will see package-lock.json)
  3 - go to package.json file:
    in "scripts": add -> "start": "lite-server" under "test"
  4 - in terminal, can type "npm start" to start at localhost:3000
    * if i change anything in app.ts -> save and tsc app.ts again -> browser updates what has changed
  

This set up will be same for most project
