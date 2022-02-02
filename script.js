var map = L.map('mapid').setView([39.75621,-104.99404], 4);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);
var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Kienlen",
        "Review": "5 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.28976440429688,
          38.67210881558816
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Market",
        "Review": "4 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.23002624511719,
          38.65441572712308
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Porters Fried Cicken",
        "Review": "3 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.32615661621094,
          38.601846852838094
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Tower Grove",
        "Review": "2 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26504516601562,
          38.62169881367633
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Friedleys",
        "Review": "1 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.25131225585938,
          38.59540719940386
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "River": "Mississippi River"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.18333435058594,
            38.74953160553543
          ],
          [
            -90.21183013916016,
            38.72730457751627
          ],
          [
            -90.21045684814453,
            38.705606471589405
          ],
          [
            -90.20393371582031,
            38.69542484339968
          ],
          [
            -90.19466400146484,
            38.68684971644609
          ],
          [
            -90.18539428710938,
            38.66942832560808
          ],
          [
            -90.17818450927734,
            38.64664010894782
          ],
          [
            -90.17887115478516,
            38.634036452919226
          ],
          [
            -90.1816177368164,
            38.61713871410953
          ],
          [
            -90.18917083740234,
            38.60238346454492
          ],
          [
            -90.20118713378906,
            38.59138212262342
          ],
          [
            -90.21560668945311,
            38.579842318490066
          ],
          [
            -90.22796630859375,
            38.56910595216646
          ],
          [
            -90.2420425415039,
            38.55514627725395
          ],
          [
            -90.24959564208984,
            38.54413769884391
          ],
          [
            -90.26023864746094,
            38.52695020774627
          ],
          [
            -90.26504516601562,
            38.51271370850396
          ],
          [
            -90.2691650390625,
            38.50465406475561
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Park": "Forest Park"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30075073242186,
              38.63028174397134
            ],
            [
              -90.26779174804688,
              38.63028174397134
            ],
            [
              -90.26779174804688,
              38.647176385570134
            ],
            [
              -90.30075073242186,
              38.647176385570134
            ],
            [
              -90.30075073242186,
              38.63028174397134
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Park": "Tower Grove Park"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.26744842529297,
              38.603456675921755
            ],
            [
              -90.24272918701172,
              38.603456675921755
            ],
            [
              -90.24272918701172,
              38.60962732987789
            ],
            [
              -90.26744842529297,
              38.60962732987789
            ],
            [
              -90.26744842529297,
              38.603456675921755
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Park": "Terry Park"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.23428559303284,
              38.618178174080754
            ],
            [
              -90.23452162742615,
              38.61741534605674
            ],
            [
              -90.23232221603394,
              38.61713871410953
            ],
            [
              -90.23215055465698,
              38.61791831050015
            ],
            [
              -90.23428559303284,
              38.618178174080754
            ]
          ]
        ]
      }
    }
  ]
}
var feat = L.geoJSON(geojsonFeature).addTo(map);
feat.bindPopup("<b>Hello world! I'm marker 1</b><br>I am a popup.").openPopup();
