import * as React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import { objMaker } from "./SiteHeader";

const accessToken =
  "pk.eyJ1Ijoic29tZGFzaHNvbSIsImEiOiJja2NwNXFmenowcm0wMnptb2l4N21rMTR3In0.Shm9zvgMBqQTvXhJs0H8wg";

export default function SiteMap({ Schema }: any) {
  const data = objMaker(Schema);
  const { coordinatex, coordinatey, max_zoom, min_zoom, sitecolor } = data;

  const coordinate_x = parseFloat(coordinatex);
  const coordinate_y = parseFloat(coordinatey);
  const maxzoom = Math.floor(max_zoom);
  const minzoom = Math.floor(min_zoom);

  React.useEffect(() => {
    var r: any = document.querySelector(":root");
    r.style.setProperty("--primary", sitecolor);
  }, [sitecolor]);

  const Map = ReactMapboxGl({
    maxZoom: maxzoom,
    minZoom: minzoom,
    accessToken: accessToken,
  });

  return (
    <section className="site-map" id="map">
      {!isNaN(coordinate_x) && Map && (
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={[coordinate_x, coordinate_y]}
          containerStyle={{
            height: "70vh",
            width: "auto",
          }}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={[coordinate_x, coordinate_y]} />
          </Layer>
          <Marker coordinates={[coordinate_x, coordinate_y]} anchor="bottom">
            <span></span>
          </Marker>
        </Map>
      )}
    </section>
  );
}
