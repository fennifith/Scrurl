var Scrurl = {};
Scrurl.display = function(text, options, offset) {
	if (text != null && offset != null && offset >= 0) {
		offset *= options.scrollamount != null ? Math.abs(options.scrollamount) : 1;
		offset %= text.length;
		if (options.direction == "right")
			offset = text.length - offset;
		
		Scrurl.start = text.substring(0, offset).split(" ").join("_");
		Scrurl.end = text.substring(offset, text.length).split(" ").join("_");
		window.history.replaceState({}, "", "?" + Scrurl.end + "_" + Scrurl.start);
	} else if (text != null) {
		Scrurl.interval = setInterval(function() {
			if (Scrurl.offset != null)
				Scrurl.offset++;
			else Scrurl.offset = 0;

			Scrurl.display(text, options, Scrurl.offset);
		}, options.scrolldelay != null && options.scrolldelay > 0 ? options.scrolldelay : 200);
	} else {
		clearInterval(Scrurl.interval);
	}
};