# SemanticTalker

A browser-based semantic analysis tool.

This project:

- generates embeddings locally in-browser
- analyzes semantic attributes using probe vectors
- explores how embeddings preserve meaning
- investigates what semantic information survives compression

Built with:

- Angular
- Transformers.js
- Mixedbread embeddings

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Accessibility (A11y) changes

Summary of accessibility improvements made to increase ADA compliance:

- Added a keyboard "Skip to main content" link in `src/index.html` to help keyboard and screen reader users navigate quickly to the main application.
- Introduced semantic landmarks (`header`, `main`, `aside`, `footer`) and ARIA roles in `src/app/app.html` for clearer structure.
- Ensured form controls have labels and added `aria-label` / `aria-describedby` where appropriate.
- Added `aria-live="polite"` regions for status and dynamic results so screen readers announce updates.
- Added visible focus styles and a `visually-hidden` utility class in `src/app/app.css` for keyboard accessibility.

Next recommended steps:

- Run automated accessibility checks (axe, Lighthouse) and address contrast or semantic issues they report.
- Add unit/integration tests for accessibility-critical flows.
- Review color contrast and provide high-contrast theme options if needed.

