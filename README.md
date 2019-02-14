##Running the wallaby tests in webstorm I get the following error

````
.\test\jest-pretest.js:2
import 'aurelia-polyfills';
       ^^^^^^^^^^^^^^^^^^^

SyntaxError: Unexpected string

	at test/jest-pretest.ts:1

Jest encountered an unexpected token

This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

Here's what you can do:
 • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
 • If you need a custom transformation specify a "transform" option in your config.
 • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

You'll find more details and examples of these config options in the docs:
https://jestjs.io/docs/en/configuration.html

Details:

.\test\unit\app.spec.js:2
import { App } from '../../src/app';
       ^

SyntaxError: Unexpected token {

	at test/unit/app.spec.ts:1

```
