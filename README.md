# **wc-accordian**
> Creates an accordian from two child tags.

This is a small, simple web component button that provides a consistent look and feel. 

- Creates an accordian from two slotted children (header, section)
- It is universal: there is no formatting of the header and sections
- It is small, under 2k and completely self-contained
- It is simple enough to be hacked to change or fine tune behavior

## Usage

To use the wc-button:
1. copy `wc-accordian.js` to a suitable `libs` folder
2. use a `<wc-accordian>...</wc-accordian>` tag as needed
3. add 2 child elements slotted as header and section
3. import tag as shown below, near the bottom of the html

```html
<wc-accordian>
	<h1 slot="header" tabindex="0">Accordian</h1>
	<div slot="section">
		An accordian expands to show details when clicked.
	</div>
</wc-accordian>

<script type="module" src="./libs/wc-button.js"></script>
```

The `wc-accordian` has a few useful attributes
| Attribute | Values |
| --------- | ------ |
| open | by default, accordian will be collapsed, set open="true" to open by default |
| group | accordians sharing the same group name will only allow one to be open at any time |
<br>

## Demo
Use this link : <https://dalemargel.github.io/wc-accordian>
