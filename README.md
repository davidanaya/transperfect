# Transperfect

To install all dependencies, please run ```npm install```

Afterwards, run the app in development mode or as a standalone app (see below).
Easiest way is with ```ng serve``` or ```npm start```

Also, the project is ready for AoT compilation with ```ng build --prod```

## Considerations

This is a pretty simple project and no requirements where specified, but I tried to demonstrate a few things with it.

- Project configured for lazy loading.

- Routing and resolvers.

- Smart and presentational components.

- Change detection strategy onPush for presentational components.

- Services and pipes.

- Dynamic styles in components.

- Async pipes.

- *ngIf / else wih ng-template

- New HttpClient

- Html sanitization in components.

- Basic syling with BEM and Flex.

- Unit testing for components, services and pipes.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

I've created unit tests for all components,services and pipes.

The tests can improved, I just wanted to showcase the configuration for different types of units.

## Running end-to-end tests

I've not created e2e tests for this application.