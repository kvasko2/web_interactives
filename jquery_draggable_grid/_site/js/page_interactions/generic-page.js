// Grid related Ids and Classes.
var widgetCanvasId = "#widget-canvas";
var contentHeaderClass = ".content-header";

// Scaling variables.
var columnWidthPercent = 30.35;

/** Begin Grid initializing and refreshing functions. **/

function refreshWidgetGrid(gridIdOrClass, adjustedWidth){
    // Default values.
    adjustedWidth = typeof adjustedWidth !== 'undefined' ? adjustedWidth : (columnWidthPercent/100) * ($(widgetCanvasId).parent().width());
    // Shapeshift the canvas.
    $(gridIdOrClass).shapeshift({
        minColumns: 3,
        colWidth: adjustedWidth,
        minHeight: 280,
        autoHeight: true,
        columns: 3,
        gutterX: 20,
        gutterY: 20,
        enableDrag: false
    });
}

function refreshContentHeader(adjustedWidth){
    var newWidth;
    if (adjustedWidth == null){
        newWidth = (columnWidthPercent/100) * ($(widgetCanvasId).parent().width());
    } else {
        newWidth = adjustedWidth;
    }

    // Shapeshift the canvas.
    $(contentHeaderClass).shapeshift({
        minColumns: 3,
        colWidth: newWidth,
        enableDrag: false,
        minHeight: 50,
        columns: 3,
        gutterX: 20,
        gutterY: 20
    });
}

function refreshGrid() {
    var adjustedWidth = (columnWidthPercent/100) * ($("#widget-canvas").parent().width());

    // Refresh the canvas.
    refreshWidgetGrid(widgetCanvasId, adjustedWidth);
    // Refresh the content header.
    refreshContentHeader(adjustedWidth);
};
/** End Grid initializing and refreshing functions. **/

$(document).ready(function() {
    // For each expandable widget.
    $(this).find(".expandable-widget").each(function() {
        // Grab what should be the height of the widget body (that of its content).
        var newBodyHeight = $(this).find(".widget-body").children().first().height();
        // Set the height of the widget body to this content height.
        $(this).find(".widget-body").height(newBodyHeight);
    });

    refreshGrid();
});

$(window).resize(function(){
    refreshGrid();
});

$("#widget-canvas").on("widgetResize", function(event, sourceElement) {
    // Set the height of the object.
    sourceElement.closest(".widget-body").height(sourceElement.height());
    refreshGrid();
});

/** Begin Card-flip **/
$('#widget-canvas').on('click', '.flip-button', function() {
    var widget = $(this).closest(".widget");
    widget.addClass("flipping")
    widget.toggleClass('flipped');
    window.setTimeout(function(){widget.removeClass("flipping");}, 500);
});
/** End Card-flip **/

/** Begin Widget Settings **/
$('#widget-canvas').on('click', '.settings-button', function() {
    console.log("settings button pressed");
});
/** End Widget Settings **/

/** Begin Export **/
$('#widget-canvas').on('click', '.export-button', function() {
    console.log("export button pressed");
});
/** End Export **/
