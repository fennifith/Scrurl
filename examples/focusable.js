var isFocused = true;
scroll();
		
function scroll() {
	Scrurl.display("this is a thing that does stuff", {
		"scrolldelay": 200,
		"scrollamount": 1,
		"direction": "left"
	});
}

window.onfocus = function() {
	if (!isFocused) {
		isFocused = true;
		scroll();
	}
};

window.onblur = function() {
	if (isFocused) {
		isFocused = false;
		Scrurl.display(null);
	}
};
