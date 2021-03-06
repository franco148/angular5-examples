# Ng7ComponentsDbinding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Notes
// "bootstrap": "^4.3.1",


###### What are "Modules"
NgModule thing that we have in our app, like the app module or the app routing module. So modules in the end are ways of bundling Angular building blocks together, that would be components, directives, services, pipes. You have to group all together into such Angular modules so that Angular is aware of these features, because Angular does not automatically scan all the files in your project, it does a search all the code you write and automatically detect all components and services, instead you need to tell Angular what is a component, which components do you have and you can then bundle them together into modules. Every Angular app needs to have at least one module, that app module.
- Angular analyzes NgModules to "understand" you application and its features.
- Angular modules define all building blocks your app uses: Components, Directives, Services
- An app requires at least one module (AppModule) but may be split into multiple modules.
- Core Angular features are included in Angular modules (e.g. FormsModule) to load them only when needed.
- You can not use a feature/building block without including it in a module.


###### Ahead of Time Compilation
The following command takes our angular application and now does not spin up a development server where you can see it but it actually builds your entire app into a few files which you can then deploy.
- ng build --prod

###### Firebase Hosting
- npm install -g firebase-tools
- firebase login
- firebase init : In the root path of the project.
- Do not use the default public directory! In this specific case will be: dist/ng7-components-dbinding
- rewrite all urls to /index.html? choose y
- File ... already exists. Overwrite? n
- firebase deploy
- When it finishes you will receive a link of your deployed app.
  - Project Console: https://console.firebase.google.com/project/ngheroesfirebase/overview
  - Hosting URL: https://ngheroesfirebase.firebaseapp.com


###### NgRx
NgRx is in the end just Angular's implementation of Redux. Now it comes with some differences or Angular specific things.

- NgRx Steps
  - npm install --save @ngrx/store
  - npm install --save @ngrx/effects
  - npm install --save @ngrx/router-store


- Tools
  - redux-devtools-extension
  - npm install --save-dev @ngrx/store-devtools


###### Angular Universal

- ng add @nguniversal/express-engine --clientProject <ProjectNameFromAngularJsonFile>
- npm install --save @nguniversal/module-map-ngfactory-loader
- npm run build:ssr
- npm run serve:ssr

Another approach for implementing server side render would be using nestjs framework (backend side framework)
- ng add @nestjs/ng-universal
















