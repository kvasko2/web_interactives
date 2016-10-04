Orientation to Prototype
===============

A prototype web-application for viewing information regarding information, computer, network security applications presented and distributed through the Leidos Marketplace.

The prototype is delivered as a .zip file.

When unzipped, the directory will have the following structure:
	/customer/ the launchpoint for the user of type customer
	/vendor/ the launchpoint for the user of type vendor
	/assets/ images files used throughout the site
	/css/  cascading style sheets used throughout the site
	/fonts/ contains fontawesome
	/js/ contains the javascript libraries listed above and the custom javascript for the widgets

**Building the Dashboard**

To begin browsing the design, one need not run a webserver; simply point your browser at the index.html file in the customer directory:
	file:///.../customer/index.html

Likewise, to begin browsing the design of the Vendor role, one need not run a webserver; simply point your browser at the index.html file in the customer directory:
	file:///.../vendor/index.html

The data used in these visualizations can be found (and manipulated) at: 
	/js/example_data/

Custom written chart visualizations can be found at
	/js/custom_charts/

Examples of visualizations written using chart extensions can be found at
	/js/example_charts/

Examples of tables and lists using a table library can be found at
	/js/example_tables/
	/js/example_lists/

Interaction handling scritps can be found at
	/js/page_interactions/

General purpose functions can be found at
	/js/utils/

Libraries and dependencies created outside of MAYA can be found at
	/js/vendor/


**Technology**
The Leidos CSM Dashboard is constructed with a set of standard web technologies including HTML5, CSS3, and Javascript. 

In addition, MAYA used a number of javascript libraries to facilitate implementation:
- [jquery](http://jquery.com/)
- [bootstrap](http://getbootstrap.com/javascript/)
- [jquery-ui](http://jqueryui.com/): Interaction event handling.
- [jquery touch-punch](http://touchpunch.furf.com/): Touch interface handling.
- [d3](http://d3js.org/): Visualization library.
- [c3](http://c3js.org/): Chart extension of d3.
- [shapeshift](https://github.com/McPants/jquery.shapeshift): Interactive grid.
- [datatables](http://www.datatables.net/): Table and list building and sorting.