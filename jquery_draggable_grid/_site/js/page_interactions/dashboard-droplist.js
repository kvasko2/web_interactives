var columnWidthPercent = 30.35;
//var baseHeightToWidthRatio = 280/275;

function refreshGrid() {
    var adjustedWidth = (columnWidthPercent/100) * ($("#widget-canvas").parent().width());
    //var adjustedHeight = baseHeightToWidthRatio * adjustedWidth;
    
    // Shapeshift the canvas.
    $("#widget-canvas").shapeshift({
        minColumns: 3,
        colWidth: adjustedWidth,
        //colWidth: 275,
        minHeight: 280,
        columns: 3,
        gutterX: 20,
        gutterY: 20
    });
};

$(document).ready(function() {
    refreshGrid();
});

$(window).resize(function(){
    refreshGrid();
});

$(window).on("widgetExpand", function() {
    console.log("widgetExpand event");
});

// Disable the drop-down button when it is clicked.
$('.dropdown-menu').on('click', function(event) {
    event.stopPropagation();
});

// Show the dropdown triangle.
$('.dropdown-toggle').on('click', function() {
    $(".dropdown-triangle").toggleClass("open");
    $(".dropdown-menu").toggleClass("open");
});

// Opening the available widget items.
$('.widget-selection').on('click', function() {
    // For each sibling that is a widget item.
    $(this).siblings(".widget-item").each(function() {
        $(this).toggle();
    });
    
    if ($(this).find("i").hasClass("fa-chevron-down")){
        $(this).find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    } else {
        $(this).find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    }
});

// Opening the available widget items.
$('.name-field').on('click', "i", function() {
    $(".dropdown-menu").removeClass("open");
    $(".dropdown-triangle").removeClass("open");
});

// Card-flip.
$('#widget-canvas').on('click', '.flip-button', function() {
    var widget = $(this).closest(".widget");
    widget.addClass("flipping")
    widget.toggleClass('flipped');
    window.setTimeout(function(){widget.removeClass("flipping");}, 500);
});

/** Begin Widget Item Event Handlers **/
$('.widget-item').on('mouseenter', function() {
    // Add a placeholder to the grid.
    var placeholder = "<div class='ss-placeholder-child'></div>";
    
    $('#widget-canvas').prepend(placeholder);
    
    refreshGrid();
});

$('.widget-item').on('mouseout', function() {
    // Remove the placeholder.
    $('#widget-canvas').find('.ss-placeholder-child').remove();
    
    refreshGrid();
});

// Open the widget-palette.
$('.widget-item').click(function(){
    var widgetToAdd = $(this).find('.widget');
    
    // Add the widget to the canvas.
    $('#widget-canvas').prepend(widgetToAdd);
    
    // Remove the placeholder.
    $('#widget-canvas').find('.ss-placeholder-child').remove();
    
    refreshGrid();
    
    $(this).detach();
});
/** End Widget Item Event Handlers **/