var generateWhiteNoise = require('openmusic-white-noise');

// Adapted from https://github.com/zacharydenton/noise.js/blob/master/noise.js
module.exports = function(size) {

	var out = generateWhiteNoise(size);
	var b0, b1, b2, b3, b4, b5, b6;
	
	b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;

	for (var i = 0; i < size; i++) {

		var white = out[i];

		b0 = 0.99886 * b0 + white * 0.0555179;
		b1 = 0.99332 * b1 + white * 0.0750759;
		b2 = 0.96900 * b2 + white * 0.1538520;
		b3 = 0.86650 * b3 + white * 0.3104856;
		b4 = 0.55000 * b4 + white * 0.5329522;
		b5 = -0.7616 * b5 - white * 0.0168980;
		out[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
		out[i] *= 0.11; // (roughly) compensate for gain
		b6 = white * 0.115926;

	}

	return out;
	
};
