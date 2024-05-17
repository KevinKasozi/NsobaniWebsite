// testRunner.js
import jestConfig from './jest.config.mjs';
import { runCLI } from 'jest';

// Use Jest configuration
runCLI({
  config: JSON.stringify(jestConfig),
}, [process.cwd()])
  .then((result) => {
    if (result.results.success) {
      console.log('All tests passed');
    } else {
      console.error('Some tests failed');
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('Error running tests:', error);
    process.exit(1);
  });
