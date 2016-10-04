function productSummaryContent(productSummaryElement, product){
    var summaryContent = '<div class="column">';
    // Summary text.
    summaryContent += '<div class="summary-text">'+product.summary+'</div>';

    // Features.
    // Start the table.
    var featuresShortTable = '<table class="short-features-table">';
    // Create the header row.
    featuresShortTable += '<tr>'+
                          '<th>feature</th><th>status</th><th>cost</th><th>usage</th>'+
                          '</tr>';
    // For each feature.
    for (index in product.features){
        // Create a row.
        featuresShortTable += '<tr>';
        // Add a column for the name.
        featuresShortTable += '<td>'+product.features[index].name+'</td>';
        // Add a column for the status.
        featuresShortTable += '<td>'+product.features[index].status+'</td>';
        // If the status is on.
        if (product.features[index].status == "on"){
            // Add a column for the cost.
            featuresShortTable += '<td>$'+product.features[index].cost.toFixed(2)+'</td>';
            // Add a column for the usage.
            var usage = 0;
            for (dataIndex in product.features[index].usage.data){
                usage += product.features[index].usage.data[dataIndex].value;
            }
            featuresShortTable += '<td>'+usage+product.features[index].usage.unit+'</td>';
        } else {
            // Add a column for the cost with parentheses around it.
            featuresShortTable += '<td>($'+product.features[index].cost.toFixed(2)+')</td>';
            // Add a column for the usage, but leave it empty.
            featuresShortTable += '<td></td>';
        }

        // Close the row.
        featuresShortTable += '</tr>';
    }
    // Close the table.
    featuresShortTable += '</table>';
    // Add the table to the summary content.
    summaryContent += '<div class="product-property">'+
                      '<div class="property-title">Features</div>'+
                      '<div class="property-content">'+featuresShortTable+'</div>'+
                      '</div>';

    // End the current column.
    summaryContent += '</div>';
    // Start new column.
    summaryContent += '<div class="column">';

    // Version.
    summaryContent += '<div class="product-property">'+
                      '<div class="property-title">Version</div>'+
                      '<div class="property-content">'+product.version+'</div>'+
                      '</div>';

    // Security Category.
    summaryContent += '<div class="product-property">'+
                      '<div class="property-title">Security Category</div>'+
                      '<div class="property-content">'+product.category+'</div>'+
                      '</div>';

    // Average Cost.
    var cost = 0;
    for (index in product.features){
        // If the feature is on.
        if (product.features[index].status == "on"){
            cost += product.features[index].cost;
        }
    }
    summaryContent += '<div class="product-property">'+
                      '<div class="property-title">Average Cost/Month</div>'+
                      '<div class="property-content">$'+cost.toFixed(2)+'</div>'+
                      '</div>';

    var summaryContentElement = $.parseHTML(summaryContent);
    productSummaryElement.append(summaryContentElement);
}