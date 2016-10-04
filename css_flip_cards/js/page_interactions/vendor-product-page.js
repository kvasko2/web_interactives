// Grid related Ids and Classes.
var widgetCanvasId = "#widget-canvas";
var contentHeaderClass = ".content-header";
var vendorProductsTable = null;

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

function expandExpandableWidgets(){
    // For each expandable widget.
    $("#widget-canvas").find(".expandable-widget").each(function() {
        // Grab what should be the height of the widget body (that of its content).
        var newBodyHeight = $(this).find(".widget-body").children().first().height();
        // Set the height of the widget body to this content height.
        $(this).find(".widget-body").height(newBodyHeight);
    });
}
/** End Grid initializing and refreshing functions. **/

$(document).ready(function() {
    // Create and retain a reference to the table.
    vendorProductsTable = createVendorProductTable("#vendor-products-table");

    // For each expandable widget.
    expandExpandableWidgets();

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

/** Begin Add Product Interactions **/
$('#add-product-button').on('click', function() {
    $("#add-product-modal").addClass("show");

    // Set the width of the form to that of the canvas.
    $("#add-product-modal").outerWidth($("#widget-canvas").width()*.955);
});

$('.close-button').on('click', function() {
    var modal = $(this).closest(".modal");
    modal.removeClass("show");
});

$('.cancel-button').on('click', function() {
    // Clear all of the fields.
    $("#new-product-name").val("");
    $("#new-product-category").val("");
    $("#new-product-version").val("");
    $("#new-product-description").val("");
    $("#new-product-picture").val("");
    $("#new-product-notes").val("");

    var modal = $(this).closest(".modal");
    modal.removeClass("show");
});

$('.save-button').on('click', function() {
    // Capture the data.
    var name = $("#new-product-name").val();
    var category = $("#new-product-category").val();
    var version = $("#new-product-version").val();
    var description = $("#new-product-description").val();
    var picture = $("#new-product-picture").val();
    var notes = $("#new-product-notes").val();

    if (name != "" && version != "" && category != "") {
        // Insert the product into the table.
        vendorProductsTable.row.add({
            name: name,
            version: version,
            category: category,
            instances: 0,
            ytdRevenue: 0,
            status: 'pending tech',
            submitted: '02.27.2015'
        });

        // Redraw the table.
        vendorProductsTable.draw();

        $("#widget-canvas").trigger("widgetResize", [$("#vendor-products-table").closest("div")]);
    }

    // Clear all of the fields.
    $("#new-product-name").val("");
    $("#new-product-category").val("");
    $("#new-product-version").val("");
    $("#new-product-description").val("");
    $("#new-product-picture").val("");
    $("#new-product-notes").val("");

    var modal = $(this).closest(".modal");
    modal.removeClass("show");
});
/** End Add Product Interactions **/