Draggable Widgets
===============

An interaction originally developed for a dashboard where one might move, add, and/or remove widgets, in order to customize the information they see.

Testing and simple static site building done with [jekyll](https://jekyllrb.com/).

**Technology**
This interaction uses HTML, CSS, and Javascript.

Javascript libraries used to keep from re-inventing the wheel:
- [jquery](http://jquery.com/)
- [jquery-ui](http://jqueryui.com/): Interaction event handling.
- [jquery touch-punch](http://touchpunch.furf.com/): Touch interface handling.
- [shapeshift](https://github.com/McPants/jquery.shapeshift): Interactive grid.

**Developer Notes**
jquery.shapeshift proved a very simple dynamic grid library to use. In the future, I might rewrite part of it, or write my own, for there are a few behaviors that were not quite to my liking, but shapeshift is very good.

Other dynamic grids to try:
- [gridstack](http://www.jqueryscript.net/demo/Responsive-Fluid-Drag-and-Drop-Grid-Layout-with-jQuery-gridstack-js/)
- [FreeWall](http://vnjs.net/www/project/freewall/)
