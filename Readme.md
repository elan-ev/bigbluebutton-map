# BigBlueButton Adopter's Map

This is the repository for the [map](http://bbbmap.uos.de) of [BigBlueButton](https://bigbluebutton.org/) adopters.
The map shows the locations of participating BigBlueButton installations.

## Get Your Installation on the Map!

If you have a BigBlueButton installation and would like it to appear on the map, just create a [pull request](https://github.com/elan-ev/bigbluebutton-map/pulls) where you add your data to the file [adopters.geojson](adopters.geojson).
To do so, add this object with your data as a new line `features`-list in said file:

```json
{"type": "Feature", "properties": {"institution": "YOUR_INSTITUTION"}, "geometry": {"type": "Point", "coordinates": [0.0, 0.0]}}
```

Replace `YOUR_INSTITUION` and `[0.0, 0.0]` with your x and y coordinates and your good to go.

## Idea & Origin

The idea for this map came up in the [regular meeting](https://hackmd.io/@lkiesow/bigbluebutton-adopters-meeting) of german speaking BigBlueButton adopters.
The inspiration and the [leaflet.js](https://leafletjs.com/) code comes from the [Opencast](https://opencast.org/) project and its similar [map.opencast.org](https://map.opencast.org/).
