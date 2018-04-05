var What = {};
What.display = function(text, speed, offset) {
	if (text != null && speed == 0 && offset >= 0) {
		offset %= text.length;
		var start = text.substring(0, offset).split(" ").join("_");
		var end = text.substring(offset, text.length).split(" ").join("_");
		//console.log(start + "___" + end);
		window.history.replaceState({}, "", "?" + end + "_" + start);
	} else if (text != null && speed > 0) {
		What.interval = setInterval(function() {
			if (What.offset != null)
				What.offset++;
			else What.offset = 0;

			What.display(text, 0, What.offset);
		}, speed);
	} else {
		clearInterval(What.interval);
	}
};