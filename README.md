# React NPM Package 

1. [Installation](docker/README.md)
2. [Development](#development)
3. [How to Bundle](#build) 

---
<div id="development"> 
   <h3> Development </h3> 
</div>

Install and run the development enviroment locally on docker. See [Installation](docker/README.md)

To create a new component run the following command and follow the prompts.
This will create a new component, optional subdirectory and a Jest test file.

```sh
npm run new:component
```


Add the new component and features.

Import/Export the new component inside the `./src/Package.js` 

Then you can bundle the app.

---
<div id="build"> 
<h3> How to Build/Bundle the package </h3> 
</div>

Node Version: `Node v16.15.1`

[Installing Node via NVM for Mac](https://amanhimself.dev/blog/install-nodejs-using-nvm-on-macos-m1/)


Run the following to install dependencies.

```
npm install
```

Then run the following to output into the `lib` folder

```
npm run build
```
