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

This package powers [the mLab](https://cemulate.github.io/the-mlab/), a satire/parody site making fun of [the nLab](https://ncatlab.org/nlab/show/HomePage), a wiki for higher mathematics and category theory. 
You can view the Nearley grammar powering the site [here](https://github.com/cemulate/the-mlab/blob/master/src/grammar/nlab.ne).

Credit
========

The algorithm used for generation was heavily inspired by [this article](https://eli.thegreenplace.net/2010/01/28/generating-random-sentences-from-a-context-free-grammar) by Eli Bendersky.
