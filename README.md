# Web Interactions

A few examples of interactions build for the web.

## Card Swipe

A simple swipe interaction for liking and disliking items given on cards. Prototype used during testing with middle school students.

0. Open `/card_swipe/interests/index.html` in a browser from local computer.

Built using basic CSS3 (animations and transforms), javascript + jQuery, and

Built for testing on iPad, functionally works on other devices, visually best in landscape:
* Chrome (desktop and mobile)
* Safari (desktop and mobile)
* Firefox (desktop)

## CSS Flip Cards

A simple interaction to flip a card front-to-back, back-to-front, using the arrow button in the container's header.

0. Open `/css_flip_cards/card_flipping.html` in a browser from local computer.

Built using:
* CSS3 (transitions and transforms) * * [JQuery.Shapeshift](http://mcpants.github.io/jquery.shapeshift/) for the grid
* Styles initially written in SCSS and then built with [Jekyll](https://jekyllrb.com/), which is partially why the main.css looks like a mess.

## Flip-Dots

Testing out flip-dot interactions.

### CSS flip-dots

Flips the dots on the `mouseenter` event.

0. Open `/flip_dots/index.html` in a browser from local computer.

### Webcam Flip-dots

*Incomplete*
Uses the webcam to build an image using flip-dots and the camera input.

## Hexagon path

An interaction and visualization enabling a person to select a given node/hexagon and to see the path it would take to get to that spot. Touching the hexagons will build a path, if it is applicable. Touching the "You Are Here" hexagon will cycle through the possible paths.

The paths represent potential career options. It was used during a test with middle school students to help determine meaningful interactions for discovering potential careers.

0. Open `/hexagon_path/path/index.html` in a browser from local computer.
*Best Viewed at a resolution of 1024x768*

Built using:
* Basic CSS
* Javascript (JQuery)

Built for and tested in:
* Chrome (desktop and iPad)
* Safari (desktop and iPad)
* Firefox (desktop)

## Draggable Grid

Draggable widgets for a dashboard. Mostly used out of the box JQuery.Shapeshift with small tweaks to make dragging from the "Add Widget" panel work.

0. Open `/jquery_draggable_grid/interactive_grid_desktop/index.html` in a browser from local computer.
0. Open `/jquery_draggable_grid/interactive_grid_responsive/index.html` in a browser from local computer.

Built using:
* CSS3 for transitions and transforms. [JQuery.Shapeshift](http://mcpants.github.io/jquery.shapeshift/) for the adjustable grid.
* Styles initially written in SCSS and then built with [Jekyll](https://jekyllrb.com/), which is partially why the main.css looks like a mess.

Built for and tested in:
* Chrome (desktop)

## 3D Population Visualization

### Ohio

A test of 3D interaction and visualization in the browser. This example shows the population of the counties in the state of Ohio, visually represented by the height of the county. Populations that come close to or are the highest in the state have a redder color, while ones with lower populations have a greener color. One county has a blue color... it is the one in which I grew up.

0. Start a server locally from `/ohio-threejs-test` *I have used [MAMP/WAMP](https://www.mamp.info/en/) or just python `python -m SimpleHTTPServer 8000`*
0. Navigate to the home page of the local server. *Might be `localhost:8888` for MAMP or `localhost:8000` for the given python code.*
0. Let the top-down view of the state of Ohio load.
0. Use the buttons at the top of the page to select the census data for the given year.
0. Click and drag the mouse over top of the state to change the perspective of the view.

Built using:
* JQuery
* [Three.js](https://threejs.org/)
* [D3.js](https://d3js.org/)
* [TopoJSON](https://github.com/topojson/topojson)

Tested in:
* Chrome (desktop)

### Pittsburgh
*incomplete*
