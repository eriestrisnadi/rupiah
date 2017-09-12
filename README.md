# jQuery Rupiah Plugin
jQuery.rupiah is a plugin that convert to localized number to IDR and unlocalized string IDR to number.

## Install
jQuery is required, so include it first. Download [jQuery.rupiah](https://raw.githubusercontent.com/lowsprofile/rupiah/master/dist/rupiah.min.js) and include the script in your HTML file:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="/path/to/rupiah.min.js" charset="utf-8" type="text/javascript"></script>
```
You can also install using the node package managers [NPM](https://www.npmjs.com/package/rupiah).
```sh
npm install rupiah
```

## Usage
```js
$(function() {
  var data = 20000, idr = {};
  idr.string = data.rupiah({decimal: false});
  idr.number = idr.string.rupiah({localized: false});
  $('.idr').rupiah();
  console.log(idr);
});
```
Where `options` is an optional parameter.
See below for a description of the available options and defaults.

The above example will set all selected elements with the class idr to the localized IDR.
If the selected is an input, the value of the input will be set to the localized IDR, and if the selected is not an input, the text value of element will be set to the localized IDR.

## Options
The default `options` are:
```js
{
  localized: true,
  decimal: true,
}
```
Where:
* `localized: true` is to localized number to IDR
* `localized: false` is to unlocalized IDR to number
* `decimal: true` is to enabled 2 digits decimal of localized IDR
* `decimal: false` is to disabled 2 digits decimal of localized IDR

## Example
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>jQuery.rupiah</title>
  </head>
  <body>
    <input type="text" class="idr" value="20000">
    <span class="idr">20000</span>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="/dist/rupiah.min.js" charset="utf-8" type="text/javascript"></script>
    <script type="text/javascript">
      $(function() {
        var data = 20000, idr = {};
        idr.string = data.rupiah({decimal: false});
        idr.number = idr.string.rupiah({localized: false});
        $('.idr').rupiah();
        console.log(idr);
      });
    </script>
  </body>
</html>
```

## License
jQuery.rupiah is licensed under [The ISC License](https://opensource.org/licenses/ISC) (ISC)

Copyright (c) 2017 Eries Trisnadi [<me@eries.id>](mailto:me@eries.id)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
