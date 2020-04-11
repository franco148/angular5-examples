# Ng7Components

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

## Angular Concepts
#### COMPONENT LIFECYCLE
###### ngOnChanges:
- Called after a bound input property changes (properties decorated with @Input).
###### ngOnInit:
- Called once the component is initialized. This will run after the constructor.
###### ngDoCheck:
- Called during every change detection run (This takes events, it means verifies if something changed after some event).
###### ngAfterContentInit:
- Called after content (ng-content) has been projected into view. This is called whenever the content which is projected via ng-content has been initialized.
###### ngAfterContentChecked:
- Called every time the projected content has been checked.
###### ngAfterViewInit:
- Called after the component's view (and child views) has been initialized.
###### ngAfterViewChecked:
- Called every time the view (and child views) have been checked.
###### ngOnDestroy:
- Called once the component is about to be destroyed.














