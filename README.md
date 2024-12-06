# A barebone Svelte project that shows testing functionality.

## Unit tests

Unit tests are implemented using vitest. All tests are placed in the \tests\ folder.

```bash
# To run the unit test:
npm run unittests

# or, without the script
npx vitest ./tests/
```

## End-to-end tests

End-to-end testing is implemented with playwright. It requires your app running in different browsers. 

```bash
# To run the end-to-end test:
npm run e2etests

# or, without the script
npx playwright test
```

## Adjustung
Use the ```playwright.config.js``` or ```ite.config.js``` to adjust the testing libraries to your needs. 

Happy coding!
