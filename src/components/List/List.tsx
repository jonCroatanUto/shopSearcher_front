import React, { useState } from "react";
import "./local.css";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { addTofavorites } from "../../apiCalls";
import {
  responseMessageManagment,
  displayAddToListModal,
} from "../../redux/modalReducer/action";
import { setShopIdAction } from "../../redux/shopReducer/action";

function List(props: {
  data: {
    _id: string;
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
  const location = useLocation();
  const { data } = props;

  const dispatch = useDispatch();
  function saveAsAFavourite() {
    addTofavorites(
      data.name,
      data.types[0],
      data.vicinity,
      "61a698e4743bbb430b1ebafe",
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
              {location.pathname === "/profile" ? (
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
