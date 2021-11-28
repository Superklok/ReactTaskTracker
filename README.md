# React Task Tracker v1.19.1
<br />

## LINUX Setup Guide For App Evaluation
###### This guide is intended for app testing purposes & it uses the Root user.
<br />

### 1. Update Linux OS:
`sudo apt update && sudo apt upgrade -y`
<br />
<br />

### 2. Install Node:
`curl -sL https://deb.nodesource.com/setup_17.x | sudo -E bash -`
<br />

`sudo apt install nodejs`
<br />

`npm --version`
<br />

**The NPM version should be displayed.**
<br />

`node --version`
<br />

**The Node version should be displayed.**
<br />
<br />

### 3. Clone the ReactTaskTracker GitHub repository:
`cd ~/`
<br />

`mkdir superkloklabs`
<br />

`cd superkloklabs`
<br />

`git clone https://github.com/Superklok/ReactTaskTracker.git`
<br />
<br />

### 4. Install dependencies:
`cd ReactTaskTracker/v1.x.x/`
<br />

`npm i`
<br />
<br />

### 5. Create a production build:
`npm run build`
<br />

`sudo npm i -g serve`
<br />
<br />

### 6. Start database:
`npm run server`
<br />
<br />

### 7. Start app in production mode (open a new terminal window):
`serve -s build -p 8000`
<br />
<br />

### 8. React Task Tracker can now be accessed on the browser by going to:
`http://localhost:8000/`
<br />
<br />
<br />

## DONE!
<br />

###### Languages

[<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />][javascript] [<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />][css] [<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />][html] [<img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" />][json] [<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />][markdown]

###### Database

[<img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" />][jsonserver]

###### Libraries, Frameworks & Runtime

[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />][react] [<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />][reactrouter] [<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />][node] [<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />][npm]

<br />
<br />

[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[json]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
[markdown]: https://www.markdownguide.org/getting-started/
[jsonserver]: https://www.npmjs.com/package/json-server
[react]: https://reactjs.org/docs/getting-started.html
[reactrouter]: https://reactrouter.com/web/guides/quick-start
[node]: https://nodejs.org/en/docs/guides/
[npm]: https://docs.npmjs.com/cli/v7/commands/npm