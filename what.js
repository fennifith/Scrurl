var What = {};
What.display = function(text, options, offset) {
	if (text != null && offset != null && offset >= 0) {
		offset *= options.scrollamount != null ? Math.abs(options.scrollamount) : 1;
		offset %= text.length;
		if (options.direction == null || options.direction == "right")
			offset = text.length - offset;
		
		var start = text.substring(0, offset).split(" ").join("_");
		var end = text.substring(offset, text.length).split(" ").join("_");
		window.history.replaceState({}, "", "?" + end + "_" + start);
	} else if (text != null) {
		What.interval = setInterval(function() {
			if (What.offset != null)
				What.offset++;
			else What.offset = 0;

			What.display(text, options, What.offset);
		}, options.scrolldelay != null && options.scrolldelay > 0 ? options.scrolldelay : 200);
	} else {
		clearInterval(What.interval);
	}
};