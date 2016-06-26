# conservative esLint 6

Description: Conservative esLint 6 is a set of esLint configuration options that will
help you to keep your codebase clean. The rules are strict, and if you 
observe them, it will pay off.

Background: Javascript is a very pliable language and discipline is required to avoid
your JS codebase from becoming an unmaintainable mess. ESLint provides
a way to perform useful checks on your code, but getting the configuration
right is the tricky part. 

Formatting: standard formatting is useful, mostly because it prevents useless discussions 
(about spacing, semicolons, etc), for this reason conservative esLint 6 extends
the [standard](https://github.com/feross/standard) base configuration.

Maintainability: standard formatting is not terribly helpful in improving maintainability.
Shorter functions, shorter files, less nesting, less (or no) reassignment
are key to greater maintainability, so these rules are enforced here.
For full details, just see [index.js](./index.js).
