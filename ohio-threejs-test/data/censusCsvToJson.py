import csv, json

counties = {}

with open('ohio-census.csv') as csvCensus:
    countiesArray = [row for row in csv.reader(csvCensus.read().splitlines())]
    # For each county.
    for county in countiesArray:
        # Add the county's census data to the counties dictionary.
        
        # Get the county name.
        countyName = county[0]

        # Get the census data from 1990 all the way back to 1900.
        pop1990 = county[1]
        pop1980 = county[2]
        pop1970 = county[3]
        pop1960 = county[4]
        pop1950 = county[5]
        pop1940 = county[6]
        pop1930 = county[7]
        pop1920 = county[8]
        pop1910 = county[9]
        pop1900 = county[10]

        # Add this county and its population information to the counties dictionary.
        counties[countyName] = {"pop1990":pop1990, "pop1980":pop1980, "pop1970":pop1970, "pop1960":pop1960, "pop1950":pop1950, "pop1940":pop1940, "pop1930":pop1930, "pop1920":pop1920, "pop1910":pop1910, "pop1900":pop1900}
        # end if first element
    # end for each county.
    
    print json.dumps(counties, indent=4, sort_keys=True)