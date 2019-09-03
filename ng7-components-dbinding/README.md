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
