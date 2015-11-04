/**
 * TexterController
 *
 * @description :: Server-side logic for managing texters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	converttokeypad:
		function (req, res) {
			var texting = req.param('text').toLowerCase();;
			var keypad = require('../models/keypad.json');

			var keypadTranslation = "";
			var textIndex;
			var somelong = parseInt(texting.length);
			for(textIndex=0; textIndex < somelong; textIndex++) {
				keypadTranslation = keypadTranslation + keypad[texting.charAt(textIndex)] + "&tridot;";
			}
			var result = {
				keypadtranslation: keypadTranslation
			};
			return res.send(result);
		}
};
