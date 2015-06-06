# Framed Template

A free minimal clean HTML template

This Template created with [Temply] by [Sweefty.com].

### Libraries

Framed template uses:

* [BareCss] - Bare Minimal Css framework!
* Icons set by [Fontastic]
* [Lessc]
* [handlebars]
* [jQuery]

### Installation

Once downloaded extract archive package and cd to the extracted files location, in order to start editing you need to install [Temply] globally

```sh
$ npm install temply -g
```

To Compile Source

```sh
$ temply compile
```

You can also run file change watcher to auto compile every time you make a new change:

```sh
$ temply watch
```

```If you're not familiar with less/handlebars/nodejs then you still can edit the template directly by going to the dist folder and edit html/css/js files, not recommended though.```

## Edit The Template

- ``init.js`` : starter js file, where general template options are defined.
- ``handlebars`` : handlebars files will compile to html, *.hbs inside handlebars folder, you can create new pages by placing a new ``something.hbs`` file inside handlebars folder, and will be automatically compiled to ``something.html`` in the dist folder.
- ``less`` : will be compiled to main.css in ``dist/assets/css`` folder.

### Less Editing Notes

- [LESS Elements] : is pre installed so you can use it immediately.
- media query : we pre defined some media queries, based on [BareCss] media queries, you can use as the following:

```css
.some-class-selector {
    @media @small { ... }
    @media @medium { ... }
    @media @large { ... }
    @media @xlarge { ... }
}
```

### handlebars Edit Notes

- Each page can has it own set of options, to do this at the top of the page add a wellformed json inside ``{{#config}}``  ``{{/config}}`` handlebars tags.

```js
{{#config}}
    {
        "title" : "About Page",
        "description" : "This is a description",
        ...
    }
{{/config}}
```

- You can define handlebars helpers and partials from init.js file, but avoid declaring ``config`` and ``wrapper`` helpers as they are used internally by [Temply].

License
----

MIT

**Free Template, by [sweefty.com]**

[jQuery]:http://jquery.com
[Temply]:http://sweefty.com/temply
[Sweefty.com]:http://sweefty.com
[Fontastic]:http://fontastic.me
[BareCss]:http://sweefty.com/bare
[LESS Elements]:http://lesselements.com
[Lessc]:http://lesscss.org
[handlebars]: http://handlebarsjs.com
