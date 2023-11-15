## NPM

Node commands 
1. `npm i` - install node dependencies
2. `npm start` or `gulp` - build project with dev mode and run local sever
3. `npm run build` - build project with development mode 
4. `npm run prod` - build project with production mode 
5. `npm run fonts` - generate fonts, from ```src/assets/fonts/*.ttf``` to the same folder. After you will get ```.eot```, ```.woff```, ```.woff2```, ```.svg```, ```.ttf```.

[//]: # (WebP usage:)
[//]: # (The assembler includes WebP support. WebP is a graphics format developed by Google in 2010. It was created as an alternative to PNG and JPG and differs from them in a much smaller size with the same image quality.)

## File structure
For simplification navigation in a project use module file structure, in ```src/assets/scss```, ```src/assets/js``` or ```src/views``` 
use the same folder and file naming. Main pattern is:
- ```ui``` - some king of buttons, input field, links, modal dialogs, topography or any another element which we are shared fo all of website
- ```components``` - some king of select, form, accordion, filter or any another part of code includes ```ui``` elements and also can be shared for all of website 
- ```modules``` - some independent entity, like a page section which includes ```ui``` and ```components``` also can be shared for all of pages

## Developers warn
To keep the same codding style, before start the project install eslint and prettier extensions and enable them in settings.

## Twig usage

Documentation of usage as gulp module, you can read [here](https://github.com/simon-dt/gulp-twig).
Documentation of syntax and more options, you can read [here](https://twig.symfony.com/doc/3.x/).

### Default macros
To use icons from ```svgSprite``` in twig ```{{ media.icon(<iconName>, <iconModifyClass>) }}``` for output you will get:
```
<svg class="icon icon-<iconName> <iconModifyClass>">
  <use href="icon/icons/icons.svg#<iconName>" />
</svg>
```

To use ```.webp``` image ```{{ media.img(<path>, <format>, <parentClass>) }}``` for output you will get:
```
<picture class="<parentClass>__image">
  <source srcset="img/<path>.webp" type="image/webp" class="<parentClass>__img" />
  <img src="img/<path>.<format>" alt="img" class="<parentClass>__img" />
</picture>
``` 

### Global custom variables

-   `currentPage` - contains a `string` with current page value.
-   `prod` - contains a `bool` with current global development mod.
-   `webpack` - contains a `bool` with current javaScript development mod.

## PWA
In ```src/assets/pwa``` you can see ```favicon.png```, ```launch-screen.png``` and ```manifest.json```. We that need to generate [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) template.
- ```favicon.png``` - is the picture which user will see as app icon or browser tab icon of webpage.Should be maximum 240x240
- ```launch.png``` - is a welcome and loading screen of app. Should be maximum 3200x3200, and content image inside 540x540
- ```manifest.png``` - is [config](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file for app
- ```service-worker.js``` - is controlling cache of the application, write path for caching items

With develop mode, in the window of browser press ```Ctrl``` + ```I``` the open examples and docs 
