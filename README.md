# Kitze JS helpers
[Source on GitHub](https://github.com/kitze/kitze-js-helpers)

![NPM version](https://img.shields.io/npm/v/kitze-js-helpers.svg)
![Licence](https://img.shields.io/npm/l/kitze-js-helpers.svg)
![Dependencies](https://img.shields.io/david/kitze/kitze-js-helpers.svg)

What is it?
-------
These are helper functions that i use in all of my projects, so instead of copy-pasting them around i have published them as a npm module. 

What kind of helpers?
-------
* [Array helpers](http://kitze-js-helpers.surge.sh/module-Array%2520helpers.html)
* [Browser helpers](http://kitze-js-helpers.surge.sh/module-Browser%2520helpers.html)
* [DOM helpers](http://kitze-js-helpers.surge.sh/module-DOM%2520helpers.html)
* [Mobile helpers](http://kitze-js-helpers.surge.sh/module-Mobile%2520helpers.html)
* [Number helpers](http://kitze-js-helpers.surge.sh/module-Number%2520helpers.html)
* [Object helpers](http://kitze-js-helpers.surge.sh/module-Object%252520helpers.html)
* [String helpers](http://kitze-js-helpers.surge.sh/module-String%2520helpers.html)
* [Type helpers](http://kitze-js-helpers.surge.sh/module-Type%2520helpers.html)
* [Webpack helpers](http://kitze-js-helpers.surge.sh/module-Webpack%2520helpers.html)

Documentation
-------
You can see the [full documentation here](http://kitze-js-helpers.surge.sh).

Usage
-------
The functions are written with ES6 so if you're using a project with ES6 and Babel you can pick and import just the functions that you need. If you're using ES5 you need to import [the compiled version](https://github.com/kitze/kitze-js-helpers/blob/master/dist/kitze-js-helpers.min.js) that's in the [dist folder](https://github.com/kitze/kitze-js-helpers/tree/master/dist).

Dependencies
-------
Most of the functions depend on [lodash](https://github.com/lodash/lodash), and the encode and decode functions depend on [atob](https://www.npmjs.com/package/atob) and [btoa](https://www.npmjs.com/package/btoa).

Tests
-------
Every single one of the functions is tested with mocha and the coverage is reported with [istanbul](https://github.com/gotwarlost/istanbul).
If the test coverage report is under 100% i cannot publish a new release, so you can be 100% sure that everything is working fine and it's safe to use.

<img src="https://i.imgur.com/Opx6gCd.png" width="850">

You can check the full [test coverage report here](http://kitze-js-helpers-coverage.surge.sh/helpers/index.html).
More
-------
[Follow me on Twitter](https://twitter.com/thekitze) where i constantly ramble about JS, React, Redux etc. 