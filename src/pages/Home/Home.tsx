import React, { useState, useEffect } from "react";

import List from "../../components/List";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { getMyLocation, getUserLocation } from "../../apiCalls";

function Home() {
  const [places, setPlaces] = useState([{ name: " String " }]);
  const [showPlaces, setShowPlaces] = useState(false);
  const [coordinates, setCoordinates] = useState(["", ""]);
  useEffect(() => {
    getUserLocation().then((res) => {
      const { data } = res;
      const { longitude, latitude } = data;
      const coordinate = [longitude, latitude];
      setCoordinates(coordinate);
    });
  }, []);

  function getNearLocals() {
    console.log(typeof coordinates[1]);
    console.log(coordinates[0]);
    getMyLocation("restaurant", "1500", coordinates[1], coordinates[0]).then(
      (res) => {
        setPlaces(res.data.results);
        console.log(places);
        // setTimeout(() => {
        setShowPlaces(true);
        // }, 500);
      }
    );
  }
  function debug() {
    console.log(places[0].name);
    console.log(coordinates);
  }
  //   console.log(places);
  //   console.log(coordinates);
  return (
    <>
      <div>
        <button onClick={getNearLocals}>home</button>
      </div>
      <div>
        <button onClick={debug}>debug</button>
      </div>
      <div className="container">
        <div className="row">
          <div className=" col-md-8 col-xs-12">
            <ul className="list-group ">
              {showPlaces ? (
                // <div>{places[0].name}</div>
                [...places].map((place: any, index) => {
                  return (
                    <li className="list-group-item bg-warning">
                      <List key={index} data={place} />
                    </li>
                  );
                })
              ) : (
                <div>no data</div>
              )}
            </ul>
          </div>
        </div>
      </div>

      <InputText />

      <Button />
    </>
  );
}
export default Home;
