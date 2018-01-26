Nearley Generator
===================

This module takes a compiled [Nearley parser grammar](https://nearley.js.org/) and turns it into an efficient fake-text generator that produces random strings from the grammar.

To use:

```
import NearleyGenerator from 'nearley-generator';
import myGrammar from './compiled-nearley-grammar.js';
let g = new NearleyGenerator(myGrammar);

g.generate('startSymbol', convergenceFactor);
```

The convergence (`0 < convergenceFactor < 1`) determines, roughly, how "deep" the generator will descend into recursive production rules.
Using `1.0` means that any production for a every symbol is always equally likely, but may produce extremely large strings or take a long time to terminate, whereas using a value like `0.6` or `0.7` discourages following a recursive rule more than two or three levels deep.

Examples
========

Coming soon
