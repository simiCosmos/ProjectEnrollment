# Proto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

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

## deno backend Service

 This microservice was written as a [Deno](https://deno.land/) application.

To run the microservice, download and install Deno and run the following command in this directory from the command line:

```
deno run --allow-net server.ts
```

(Note that you have to be sure to specify `--allow-net` to grant the server network access. This is because Deno is [secure by default](https://deno.land/manual/getting_started/permissions). 👌)

The server will start on port 8080. If you need to change this (maybe you're running something else on port 8080), you can specify the port:

```
deno run --allow-net server.ts --port=8081

