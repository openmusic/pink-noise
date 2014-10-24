# openmusic-pink-noise

> Function to generate n samples of pink noise

[![Install with NPM](https://nodei.co/npm/openmusic-pink-noise.png?downloads=true&stars=true)](https://nodei.co/npm/openmusic-pink-noise/)

## Usage

Install first: `npm install openmusic-pink-noise`.

Then you can use it in your code:

```javascript
var generatePinkNoise = require('openmusic-pink-noise');

// this generates an array with 100 pink noise samples
var samples = generatePinkNoise(100);

// a second of pink noise if sampling rate is 44100:
var pinkNoiseSecond = generatePinkNoise(44100);
```

## Demo

** YOU NEED SUPPORT FOR WEB COMPONENTS IN YOUR BROWSER BECAUSE WE'RE NOT SHIMMING ANYTHING IN **

Firefox: go to `about:config`, find `dom.webcomponents.enabled` and set it to true.

Chrome: maybe nothing to do?

Run `npm install` so it installs stuff for the demo. The `gulp build` script will be run for you automatically, and then you can open `build/demo/index.html` for the demo.

If you do changes in the code, you'll need to rebuild the demo. Use `gulp build` or `gulp` only for running `build` and setting up a `watch` loop that automatically rebuilds the demo as you change its files.
