# roll [![Build Status](https://travis-ci.com/ricardomatias/roll.svg?branch=master)](https://travis-ci.com/ricardomatias/roll)

Let's you pick an element randomly based on a chosen probability distribution

```js
import { roll, distribute } from '@ricardomatias/roll';
import seedRandom from 'seed-random'; // works nicely together

const rng = seedRandom('roll');
const AM7 = [ 'A', 'C', 'E', 'G' ];

const equalOdds = distribute.equal(AM7.length);
const decreasingOdds = distribute.decreasing(AM7.length);
const increasingOdds = distribute.increasing(AM7);

roll(AM7, equalOdds, rng); // => G
roll(AM7, equalOdds, rng); // => C
roll(AM7, decreasingOdds, rng); // => A
roll(AM7, increasingOdds, rng); // => E
```

## Install

Use [npm](https://npmjs.com/) to install.

```sh
npm install @ricardomatias/roll --save
```

## Usage

### roll

#### roll(elements, probabilities, rng) ⇒ <code>Object</code> \| <code>Null</code>
Pick an element randomly based on a chosen probability distribution

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array</code> |  |
| probabilities | <code>Array.&lt;String&gt;</code> |  |
| rng | <code>function</code> | Random Number Generator |

### distribute

<dl>
<dt><a href="#sumDistribution">sumDistribution(probabilities, [precision])</a> ⇒ <code>Array.&lt;String&gt;</code></dt>
<dd><p>Sum probabilities together</p>
</dd>
<dt><a href="#decreasing">decreasing(k, precision)</a> ⇒ <code>Array.&lt;String&gt;</code></dt>
<dd><p>Creates a decreasing probability distribution</p>
</dd>
<dt><a href="#increasing">increasing(k, precision)</a> ⇒ <code>Array.&lt;String&gt;</code></dt>
<dd><p>Creates an increasing probability distribution</p>
</dd>
<dt><a href="#equal">equal(k, precision)</a> ⇒ <code>Array.&lt;String&gt;</code></dt>
<dd><p>Creates an equal probability distribution</p>
</dd>
</dl>

<a name="decreasing"></a>

### decreasing(k, precision) ⇒ <code>Array.&lt;String&gt;</code>
Creates a decreasing probability distribution

| Param | Type |
| --- | --- |
| k | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> |
| [precision] | <code>Number</code> | <code>3</code> |

<a name="increasing"></a>

### increasing(k, precision) ⇒ <code>Array.&lt;String&gt;</code>
Creates an increasing probability distribution

| Param | Type |
| --- | --- |
| k | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> |
| [precision] | <code>Number</code> | <code>3</code> |

<a name="equal"></a>

### equal(k, precision) ⇒ <code>Array.&lt;String&gt;</code>
Creates an equal probability distribution

| Param | Type |
| --- | --- |
| k | <code>Number</code> \| <code>Array.&lt;Number&gt;</code> |
| [precision] | <code>Number</code> | <code>3</code> |


## License

MIT, see [LICENSE.md](http://github.com/ricardomatias/ring/blob/master/LICENSE.md) for details.
