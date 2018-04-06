Probably one of the worst things I've ever used my free time for, this is a script that displays scrolling text in the address bar. It is almost entirely useless. Please do not use it for anything. That said, if you want to make it any worse than it already is, please feel free to make a PR.

If for some reason you wish to change the message that scrolls in the url, simply prefix the query with an '@' symbol, for example: [https://jfenn.me/Scrurl/?@this_is_a_different_message](https://jfenn.me/Scrurl/?@this_is_a_different_message).

## Usage

If you for some reason do want to use this project in your own website, here's a quick guide to using it.

### Define the Script Tag

```html
<script type="text/javascript" src="https://jfenn.me/Scrurl/scrurl.js"></script>
```

### Start the Scrolly Thing

```javascript
Scrurl.display("a bunch of text", {
  "scrolldelay": 200, //the delay (in ms) between each scroll update
  "scrollamount": 1,  //the amount of characters to scroll on each update
  "direction": "left" //the direction to scroll through the characters in
});
```

### Stop the Scrolly Thing
This will stop the url from scrolling, but will not remove it from the address bar, because frankly I'm just too lazy to do that, and I don't think anyone will use it if I do.

```javascript
Scrurl.display(null);
```
