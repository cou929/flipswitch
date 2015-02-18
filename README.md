# flipswitch

[![Build Status](https://travis-ci.org/cou929/flipswitch.svg?branch=master)](https://travis-ci.org/cou929/flipswitch)

Turn radio button and checkbox into old iOS like switches.

![example](/example/example.gif)

## Usage

```html
<!-- load jquery and flipswitch.css -->
<script src="https://code.jquery.com/jquery-1.11.2.js" type="text/javascript"></script>
<link href="flipswitch.css" rel="stylesheet" />

<!-- radio -->
<div class="flipswitch">
  <input type="radio" id="radio-enable" name="status" checked />
  <label for="radio-enable" class="flipswitch-label flipswitch-enable selected"><span>Enable</span></label>
  <input type="radio" id="radio-disable" name="status" />
  <label for="radio-disable" class="flipswitch-label flipswitch-disable"><span>Disable</span></label>
</div>

<!-- checkbox -->
<div class="flipswitch">
  <label class="flipswitch-label flipswitch-enable"><span>On</span></label>
  <label class="flipswitch-label flipswitch-disable selected"><span>Off</span></label>
  <input type="checkbox" name="another_status" />
</div>

<!-- load flipswitch.js -->
<script src="flipswitch.js" type="text/javascript"></script>
```

If you load flipswitch.js before taget dom ready, need to call `$.fn.flipswitch()` explicitly.

```js
$('.your-target-class').flipswitch();
```

## Browser support

flipswitch works on all modern browsers.

Some styles does not work on browsers which does not support border-radius or box-shadow, such as IE8 and below.

## Build

```
npm run build
```

## Test

```
npm run test
```

## Development

```
npm run server
```
