/* Formatting function for row details of products table. */
function formatExpandableProducts ( rowData ) {
    return '<table class="inner-table">'+
        '<tr>'+
            '<td class="column-one"></td>'+
            '<td class="column-two"></td>'+
            '<td class="partner-column"><div class="label-text">Partner</div> <div class="data-text">'+rowData[6]+'</div></td>'+
            '<td class="action-column"><div class="label-text">Action</div> <div class="data-text">'+rowData[8]+'</div></td>'+
        '</tr>'+
        '<tr>'+
            '<td class="column-one"></td>'+
            '<td class="column-two"></td>'+
            '<td class="partner-column"><div class="label-text">Submitted</div> <div class="data-text">'+rowData[7]+'</div></td>'+
        '</tr>'+
    '</table>';
}

/* Formatting function for row details of short orders list. */
function formatExpandableShortOrders ( rowData ) {
    return '<table class="inner-table">'+
        '<tr>'+
            '<td class="column-one"></td>'+
            '<td class="order-sumbmitted-column"><div class="label-text">Submitted</div> <div class="data-text">'+rowData[2]+'</div></td>'+
        '</tr>'+
    '</table>';
}

/* Formatting function for fow details of product usage. */
function formatExpandableProductUsage ( rowData, numDays ){
    // Create the variable to hold the content for the inner table.
    var innerTable = '<table class="inner-table">';

    // Create the table header.
    innerTable += '<thead><tr>'+
                    '<th class="feature-name-column">feature</th>'+
                    '<th class="status-column">status</th>'+
                    '<th class="cost-column">cost</th>'+
                    '<th class="usage-text-column">usage</th>'+
                    '<th class="usage-sparkline-column">usage</th>'+
                    '</tr></thead>';

    // Start the table body.
    innerTable += '<tbody>';

    // List to hold sparklines for later creation.
    var sparklineDatum = {};

    // For each feature.
    for (index in rowData.features){
        // Append the new row.
        // If it is the last row.
        if (index == rowData.features.length-1){
            // Set the row as the last row.
            innerTable += '<tr class="last-row">';
        } else { // Otherwise, it is just a regular row.
            innerTable += '<tr>';
        }
        // Add the feature name.
        innerTable += '<td class="feature-name-column">'+rowData.features[index].name+'</td>';
        // Add the status.
        innerTable += '<td class="status-column">'+rowData.features[index].status+'</td>';
        // If there is data provided.
        if ("data" in rowData.features[index].usage) {
            // Add the cost.
            innerTable += '<td class="cost-column">$'+rowData.features[index].cost.toFixed(2)+'</td>';
            // Add the usage columns.
            var featureUsage = 0; // Variable to hold total usage.
            var adjustedData = []; // List with the values formatted for a sparkline.
            for (var i = 0; i < rowData.features[index].usage.data.length; i++){
                // Add more to the usage.
                featureUsage += rowData.features[index].usage.data[i].value;
                // Format the data for the sparkline.
                adjustedData.push({
                    x:parseInt(rowData.features[index].usage.data[i].label),
                    y:rowData.features[index].usage.data[i].value
                });
            }
            // Add usage text.
            innerTable += '<td class="usage-text-column">'+featureUsage+rowData.features[index].usage.unit+'</td>';
            // Add the usage sparkline row (add an id for referencing later).
            var sparklineId = rowData.name+'-'+
                              rowData.features[index].name.replace(" ", "_")+
                              '-sparkline';
            innerTable += '<td class="usage-sparkline-column" id="'+sparklineId+'"></td';
            // Append the sparkline to the sparklines list with the data.
            sparklineDatum[sparklineId] = adjustedData;
        } else {
            // Add the cost.
            innerTable += '<td class="cost-column">($'+rowData.features[index].cost.toFixed(2)+')</td>';
            // Add empty columns.
            innerTable += '<td class="usage-text-column"></td>';
            innerTable += '<td class="usage-sparkline-column"></td';
        }

        // Close the row.
        innerTable += '</tr>';
    }

    innerTable += '</tbody></table>';

    var innerTableNode = $($.parseHTML(innerTable))[0];

    // Create sparklines for the cells for usage sparkline columns.
    for (sparklineId in sparklineDatum){
        // create the sparkline data items (mostly empty since this has no tooltip).
        var sparklineData = {unit:"",
                             timeIntervalLabel:"",
                             numberOfIntervalsToEvaluateFromLatest: numDays,
                             data:sparklineDatum[sparklineId]
                            };

        SparkLine($(innerTableNode).find("#"+sparklineId)[0], sparklineData, 200, 25, 2, 3, false);
    }

    return innerTableNode;
}

/* Formatting function for row details of orders table. */
function formatExpandableOrders ( rowData ) {
    var innerContent = "";
    // For each product in the order.
    for (var i = 0; i < rowData[4].length; i++){
        var productDetails = rowData[4][i];
        for (var k = 0; k < productDetails.features.length; k++){
            // Open row element.
            innerContent = innerContent.concat('<tr>');
            
            innerContent = innerContent.concat('<td class="column-one"></td>');
            innerContent = innerContent.concat('<td class="column-two"></td>');
            
            // If it is the first feature.
            if (k == 0){
                // Product name.
                innerContent = innerContent.concat('<td class="product-name-column">'+productDetails.product+'</td>');
                // Product version.
                innerContent = innerContent.concat('<td class="version-column">'+productDetails.version+'</td>');
            } else {
                // Empty product name.
                innerContent = innerContent.concat('<td class="product-name-column"></td>');
                // Empty product version.
                innerContent = innerContent.concat('<td class="version-column"></td>');
            }
            // Feature.
            innerContent = innerContent.concat('<td class="feature-column">'+productDetails.features[k].name+'</td>');
            // State.
            innerContent = innerContent.concat('<td class="state-column">'+productDetails.features[k].state+'</td>');
            
            // Vendor
            // If it is the first feature.
            if (k == 0){
                innerContent = innerContent.concat('<td class="vendor-column">'+productDetails.vendor+'</td>');
            } else {
                // Empty vendor name.
                innerContent = innerContent.concat('<td class="vendor-column"></td>');
            }
            // Close row element.
            innerContent = innerContent.concat('</tr>');
        }
    }
    return '<table class="inner-table">'+
        '<thead>'+
            '<tr>'+
                '<td class="column-one"></td>'+
                '<td class="column-two"></td>'+
                '<td>Products</td>'+
                '<td>Version</td>'+
                '<td>Feature</td>'+
                '<td>On/Off</td>'+
                '<td>Vendor</td>'+
            '</tr>'+
        '</thead>'+
        '<tbody>'+
            innerContent+
        '</tbody>'+
    '</table>';
}

/* Formatting function for fow details of users. */
function formatExpandableUsers ( rowData, numDays ){
    // Create the variable to hold the content for the inner table.
    var innerTable = '<table class="inner-table">';

    // Create the table header.
    innerTable += '<thead><tr>'+
                    '<th class="product-name-column">product</th>'+
                    '<th class="version-column">version</th>'+
                    '<th class="features-column">features</th>'+
                    '<th class="usage-text-column">usage</th>'+
                    '<th class="cost-column">cost</th>'+
                    '<th class="startdate-column">start date</th>'+
                    '<th class="enddate-column">end date</th>'+
                    '<th class="usage-sparkline-column">'+numDays+' day usage</th>'+
                    '</tr></thead>';

    // Start the table body.
    innerTable += '<tbody>';

    // List to hold sparklines for later creation.
    var sparklineDatum = {};

    // For each product.
    for (index in rowData.usage){
        /* Active features. */
        var activeFeatureIndices = [];
        // Iterate over the features until one that is turned on it found.
        for (featureIndex in rowData.usage[index].features){
            // If the feature is on.
            if (rowData.usage[index].features[featureIndex].status == "on"){
                // Append the index to the active indices list.
                activeFeatureIndices.push(featureIndex);
            }
        }

        // If at least one feature is on.
        if (activeFeatureIndices.length > 0){
            var firstFeature = true;

            // For each active feature.
            for (var i = 0; i < activeFeatureIndices.length; i++){
                // Append the new row.
                innerTable += '<tr>';

                // If this is the first feature.
                if (firstFeature){
                    // Add the product name.
                    var productLink = '<a href="../products/'+rowData.usage[index].name.toLowerCase().replace(" ", "_")+'.html">'+rowData.usage[index].name+'</a>';
                    innerTable += '<td class="product-name-column">'+productLink+'</td>';
                    // Add the version.
                    innerTable += '<td class="version-column">'+rowData.usage[index].version+'</td>';
                } else { // If not the first feature.
                    // Add blank columns for the name and version.
                    innerTable += '<td class="product-name-column"></td>';
                    // Add the version.
                    innerTable += '<td class="version-column"></td>';
                }

                // Add the feature name.
                innerTable += '<td class="features-column">'+rowData.usage[index].features[activeFeatureIndices[i]].name+'</td>';
                // Add the feature usage.
                var tempUsage = {total:0, adjustedData: []};
                for (usageIndex in rowData.usage[index].features[activeFeatureIndices[i]].usage.data){
                    // Add to the total
                    tempUsage.total += rowData.usage[index].features[activeFeatureIndices[i]].usage.data[usageIndex].value;
                    // Adjust the data to the sparkline format.
                    tempUsage.adjustedData.push({x:parseInt(rowData.usage[index].features[activeFeatureIndices[i]].usage.data[usageIndex].label),
                                                 y:rowData.usage[index].features[activeFeatureIndices[i]].usage.data[usageIndex].value});
                }
                innerTable += '<td class="usage-text-column">'+tempUsage.total+rowData.usage[index].features[activeFeatureIndices[i]].usage.unit+'</td>';
                // Add the feature cost.
                innerTable += '<td class="cost-column">$'+rowData.usage[index].features[activeFeatureIndices[i]].cost.toFixed(2)+'</td>';

                // If this is the first feature.
                if (firstFeature){
                    // Add the product start date.
                    innerTable += '<td class="startdate-column">'+rowData.usage[index].startdate+'</td>';
                    // Add the product end date.
                    innerTable += '<td class="enddate-column">'+rowData.usage[index].enddate+'</td>';
                } else { // Otherwise, add blank start and end date columns.
                    innerTable += '<td class="startdate-column"></td>';
                    innerTable += '<td class="enddate-column"></td>';
                }

                // Add the first feature usage sparkline.
                var tempSparklineId = rowData.username+'-'+
                                      rowData.usage[index].name.replace(" ", "_")+'-'+
                                      rowData.usage[index].features[activeFeatureIndices[i]].name.replace(" ", "_");
                innerTable += '<td class="usage-sparkline-column" id="'+tempSparklineId+'""></td>';

                // Add a sparkline object to the waiting data object.
                sparklineDatum[tempSparklineId] = tempUsage.adjustedData;

                firstFeature = false;
            }
        } 

        // Close the row.
        innerTable += '</tr>';
    }

    innerTable += '</tbody></table>';

    var innerTableNode = $($.parseHTML(innerTable))[0];

    // Create sparklines for the cells for usage sparkline columns.
    for (sparklineId in sparklineDatum){
        // create the sparkline data items (mostly empty since this has no tooltip).
        var sparklineData = {unit:"",
                             timeIntervalLabel:"",
                             numberOfIntervalsToEvaluateFromLatest: numDays,
                             data:sparklineDatum[sparklineId]
                            };
        SparkLine($(innerTableNode).find("#"+sparklineId)[0], sparklineData, 80, 15, 2, 3, false);
    }

    return innerTableNode;
}

/* Formatting function for fow details of product usage. */
function formatExpandableProductRevenue ( rowData, numDays ){
    var telcos = '<table class="header-inner-table">';
    telcos += '<thead><th>Available In</th></thead>';
    telcos += '<tbody><tr>TELCO A Marketplace, TELCO B Marketplace</tr></tbody>';
    telcos += '</table>'
    // Create the variable to hold the content for the inner table.
    var innerTable = '<table class="inner-table">';

    // Create the table header.
    innerTable += '<thead><tr>'+
                    '<th class="feature-name-column">feature</th>'+
                    '<th class="status-column">status</th>'+
                    '<th class="instances-column">no. instances</th>'+
                    '<th class="revenue-column">revenue</th>'+
                    '<th class="usage-sparkline-column">usage</th>'+
                    '</tr></thead>';

    // Start the table body.
    innerTable += '<tbody>';

    // List to hold sparklines for later creation.
    var sparklineDatum = {};

    // For each feature.
    for (index in rowData.features){
        // Append the new row.
        // If it is the last row.
        if (index == rowData.features.length-1){
            // Set the row as the last row.
            innerTable += '<tr class="last-row">';
        } else { // Otherwise, it is just a regular row.
            innerTable += '<tr>';
        }
        // Add the feature name.
        innerTable += '<td class="feature-name-column">'+rowData.features[index].name+'</td>';
        // Add the status.
        innerTable += '<td class="status-column">'+rowData.features[index].status+'</td>';
        // If there is data provided.
        if ("data" in rowData.features[index].usage) {
            // Add the cost.
            innerTable += '<td class="instances-column">'+(Math.floor(Math.random()*10)+1)+'</td>';
            // Add the usage columns.
            var featureUsage = 0; // Variable to hold total usage.
            var adjustedData = []; // List with the values formatted for a sparkline.
            for (var i = 0; i < rowData.features[index].usage.data.length; i++){
                // Add more to the usage.
                featureUsage += rowData.features[index].usage.data[i].value;
                // Format the data for the sparkline.
                adjustedData.push({
                    x:parseInt(rowData.features[index].usage.data[i].label),
                    y:rowData.features[index].usage.data[i].value
                });
            }
            // Add usage text.
            var revenue = '$'+Number((featureUsage*rowData.features[index].cost/10).toFixed(2)).toLocaleString('en');
            innerTable += '<td class="revenue-column">'+revenue+'</td>';
            // Add the usage sparkline row (add an id for referencing later).
            var sparklineId = rowData.name+'-'+
                              rowData.features[index].name.replace(" ", "_")+
                              '-sparkline';
            innerTable += '<td class="usage-sparkline-column" id="'+sparklineId+'"></td';
            // Append the sparkline to the sparklines list with the data.
            sparklineDatum[sparklineId] = adjustedData;
        } else {
            // Add the cost.
            innerTable += '<td class="instances-column">'+0+'</td>';
            // Add empty columns.
            innerTable += '<td class="usage-text-column"></td>';
            innerTable += '<td class="usage-sparkline-column"></td';
        }

        // Close the row.
        innerTable += '</tr>';
    }

    innerTable += '</tbody></table>';

    var innerTableNode = $($.parseHTML(innerTable))[0];

    // Create sparklines for the cells for usage sparkline columns.
    for (sparklineId in sparklineDatum){
        // create the sparkline data items (mostly empty since this has no tooltip).
        var sparklineData = {unit:"",
                             timeIntervalLabel:"",
                             numberOfIntervalsToEvaluateFromLatest: numDays,
                             data:sparklineDatum[sparklineId]
                            };

        SparkLine($(innerTableNode).find("#"+sparklineId)[0], sparklineData, 200, 25, 2, 3, false);
    }

    return innerTableNode;
}