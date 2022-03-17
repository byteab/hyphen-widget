# How to use the plugin

Include these two tags inside your html `<head/>` tag

```html
<script type="application/javascript" defer src="https://cdn.jsdelivr.net/gh/TheEhsanSarshar/hyphen-widget/doc/hyphen-widget.js"/>
<link href="https://cdn.jsdelivr.net/gh/TheEhsanSarshar/hyphen-widget/doc/main.css" rel="stylesheet" />
```
Include this tag inside your html `<body/>` tag
```html
<div id="hyphen-widget-app"/>
```

to popup the plugin you can call `window.toggleHyphenWidgetVisibility()` funcation from inside your app.

to customize the color of the plugin
you can override these variables inside your css file
```css
#hyphen-widget-app {
  --hyphen-default: 97, 92, 205;
  --hyphen-dark: 63, 60, 126;
  --hyphen-mid: 70, 68, 112;
  --hyphen-darker: 53, 51, 88;
}
```
Note: please make sure to provide them as `rgb` and the syntax of rgb should not inclulde `rgb()` function
so this is wrong
```css
  --hyphen-default: rgb(97, 92, 205); // ❌
```


## Available Scripts

In the project directory, you can run:

## yarn run build:widget:prod
Build the widget and copy the files to the doc directory
