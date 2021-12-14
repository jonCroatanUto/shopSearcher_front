import React, { useState } from "react";
import "./local.css";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { addTofavorites } from "../../apiCalls";
import {
  responseMessageManagment,
  displayAddToListModal,
} from "../../redux/modalReducer/action";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { setShopIdAction } from "../../redux/shopReducer/action";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import "leaflet/dist/leaflet.css";
import iconImage from "leaflet/dist/images/marker-icon.png";

function List(props: {
  data: {
    _id: string;
    name: string;
    geometry: { location: { lat: number; lng: number } };
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
  const icon = new Icon({
    iconUrl: iconImage,
    iconSize: [20, 30],
  });

  const [seeMap, setSeeMap] = useState(false);
  const actuaLocation = useLocation();
  const { data } = props;
  const { geometry } = data;
  const { location } = geometry;
  console.log(data);
  const { userData } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  function saveAsAFavourite() {
    addTofavorites(
      data.name,
      data.types[0],
      data.vicinity,
      userData._id,
      data.rating,
      data.user_ratings_total,
      data.icon
    ).then((res) => {
      if (res.data.succes) {
        dispatch(
          responseMessageManagment({
            responseMessage: res.data.message,
            isSuccedToSavePlace: "succes",
          })
        );
      } else {
        dispatch(
          responseMessageManagment({
            responseMessage: res.data.message,
            isSuccedToSavePlace: "fail",
          })
        );
      }
    });
  }
  function addToAList() {
    dispatch(displayAddToListModal(true));
    dispatch(setShopIdAction(data._id));
  }
  function singInAlert() {
    alert("FOR THIS FUNCTIONALITY LOGIN OR REGISTER");
  }
  function seeInMap() {
    if (seeMap === false) {
      setSeeMap(true);
    } else {
      setSeeMap(false);
    }
  }
  const lat = location.lat;
  const lng = location.lng;
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
            {userData.userName !== "" ? (
              <div className="col-4 align-self-center">
                {actuaLocation.pathname === "/profile" ? (
                  <button
                    onClick={addToAList}
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Add to a List
                  </button>
                ) : (
                  <button
                    onClick={saveAsAFavourite}
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Add as a favorite
                  </button>
                )}
              </div>
            ) : (
              <div className="col-4 align-self-center">
                <button
                  onClick={singInAlert}
                  type="button"
                  className="btn btn-outline-success"
                >
                  Add as a favorite
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="d-grid gap-1">
          <button
            onClick={seeInMap}
            type="button"
            className="btn btn-outline-info"
          >
            See in map
          </button>
          {seeMap ? (
            <MapContainer
              center={[lat, lng]}
              zoom={13}
              scrollWheelZoom={false}
              className="map"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[lat, lng]} icon={icon}>
                <Popup>
                  {data.name} <br /> {data.vicinity}
                </Popup>
              </Marker>
            </MapContainer>
          ) : (
            <div id="map"></div>
          )}
        </div>
      </div>
    </div>
  );
}
export default List;
