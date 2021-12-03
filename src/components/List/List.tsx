import React, { useState } from "react";
import "./local.css";
import { addTofavorites } from "../../apiCalls";
function List(props: {
  data: {
    name: string;
    vicinity: string;
    opening_hours: {
      open_now: boolean;
    };
    user_ratings_total: number;
    icon: string;
    photos: [
      {
        html_attributions: string[];
      }
    ];
    rating: number;
    types: string[];
  };
}) {
  const { data } = props;
  //   const { opening_hours } = data;
  //   console.log("open hours", opening_hours.open_now);
  // function seeInMap() {
  //   let map: google.maps.Map;

  //   function initMap(): void {
  //     map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //       center: { lat: -34.397, lng: 150.644 },
  //       zoom: 8,
  //     });
  //   }
  const [shopAddedSuccesfully, setShopAddedSuccesfully] = useState("");
  function saveAsAFavourite() {
    addTofavorites(
      data.name,
      data.types[0],
      data.vicinity,
      "61a698e4743bbb430b1ebafe"
    ).then((res) => setShopAddedSuccesfully(res.data.message));
  }
  return (
    <div className="card">
      <img className="card-img-top" src={data.icon} />
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2> {data.name}</h2>
              <p>rating: {data.rating}</p>
              <p>Total user rating: {data.user_ratings_total}</p>
              <h4>Adress: {data.vicinity}</h4>
              {/* <p>{data.opening_hours ? "Open now" : "Closed now"}</p> */}
            </div>
            <div className="col-4 align-self-center">
              <button
                onClick={saveAsAFavourite}
                type="button"
                className="btn btn-outline-success"
              >
                Add as a favorite
              </button>
            </div>
            <div className="col-12 align-self-center">
              <p>{shopAddedSuccesfully}</p>
            </div>
          </div>
        </div>
        <div className="d-grid gap-1">
          <button
            //  onClick={seeInMap}
            type="button"
            className="btn btn-outline-info"
          >
            See in map
          </button>

          <div id="map"></div>
        </div>
      </div>
    </div>
  );
}
export default List;
