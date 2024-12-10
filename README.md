# This is my personal homepage ![rocket icon](./readme_assets/home-199.svg)

The page is to summarize my achievements so far, show my future plans and simply make contact with me easier 😊  
The page contains brief informations about my skills, my planned direction of development and my portfolio confains of GitHub repositories.

![preview in light mode](./readme_assets/demo_light.gif)

You can obviously switch to dark mode if you want to:

![theme switching](./readme_assets/theme_switching.gif)

The app will change theme. Moreover, your preferences will be saved in local storage, so next time you'll be visiting my page, it will be displayed of remembered theme of your choice 😉

![preview in dark mode](./readme_assets/demo_dark.gif)

After loading a page you can see loading animation for a while and then list of my public repositories will be listed. You can browse the repositories or check deployed versions of all of them, by clicking on proper link.

![loading repositories list](./readme_assets/repos_light.gif)

In case of any loading issues, you'll get proper information and would check my repositories later using attached link:

![error handling](./readme_assets/error_dark.gif)

To get in touch with me, just click on blue button or simply scroll to the bottom of page, where you can find email address and some socials thumbnails of mine:

![getting in touch](./readme_assets/contact_light.gif)

***
***

## The app contains such technologies as: ![rocket icon](./readme_assets/tool-box.svg)
- Responsive web design
- CSS-Flexbox
- CSS-Grid
- JS/ES6+ features
- Error handling
- Promises, Async/Await
- AJAX/API/LocalStorage
- React 19
- Styled components
- React/custom Hooks
- React-Redux
- Redux-Saga
- React Router
- Typescript
- Docker

***
***
## Demo: 

https://mcesarczyk.github.io/personal-homepage/

***
***
## Deployment with Docker: ![rocket icon](./readme_assets/rocket.svg)

To deploy the app with Docker, you need to have Docker installed on your machine.  
Then, you can simply clone the repository and run the following commands:
- build image:

```bash
docker image build \
--build-arg REACT_APP_GITHUB_ACCOUNT_URL=https://api.github.com/users/{Github username} \
--build-arg REACT_APP_GITHUB_API_TOKEN={your personal token} -t ph:1.0 .
```

- run container:

```bash
docker container run -d -p 8000:80 --name ph-prod-1.0 -t ph:1.0
```

_____________________

## Getting Started with Create React App ![rocket icon](./readme_assets/hammer-and-screwdriver.svg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
