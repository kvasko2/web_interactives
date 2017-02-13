Install dependencies
~~~~
npm install -g topojson@1
~~~~

[Pittsburgh Neighborhood data](https://catalog.data.gov/harvest/041cd86b-18ea-412b-8d67-2ed1d6124bbf)

Converting data
~~~~
topojson -o pgh_hoods.json --id-property hood_no --properties name=hood Pittsburgh_Neighborhoods.geojson
~~~~
