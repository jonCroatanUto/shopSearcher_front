import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import List from "../../components/List";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { getMyLocation, getUserLocation } from "../../apiCalls";
import { RootState } from "../../redux/reducers";
import "./home.css";
import Select from "react-select";

function Home() {
  const [typeOfPlace, setTypeOfPlace] = useState("");
  const [radiusOfSearch, setradiusOfSearch] = useState("");
  const [places, setPlaces] = useState([{ name: " String " }]);
  const [showPlaces, setShowPlaces] = useState(false);
  const [coordinates, setCoordinates] = useState(["", ""]);
  const { response } = useSelector((state: RootState) => state.modalReducer);
  const optionsRadius: any = [
    { value: "100", label: "100 m " },
    { value: "500", label: "500 m " },
    { value: "1000", label: "1 km" },
    { value: "1500", label: "1'5 km" },
    { value: "2000", label: "2 km" },
    { value: "5000", label: "5 km" },
    { value: "10000", label: "10 km" },
    { value: "50000", label: "50 km" },
    { value: "100000", label: "100 km" },
  ];
  const optionsTypeOfPlace: any = [
    { value: "restaurant", label: "restaurant" },
    { value: "aquarium", label: "aquarium " },
    { value: "art_gallery", label: "art gallery" },
    { value: "cafe", label: "cafe" },
    { value: "bus_station", label: "bus station" },
    { value: "car_wash", label: "car wash" },
    { value: "church", label: "church" },
    { value: "city_hall", label: "city hall" },
    { value: "fire_station", label: "fire station" },
    { value: "gas_station", label: "gas station" },
    { value: "gym", label: "gym" },
    { value: "hospital", label: "hospital" },
    { value: "park", label: "park" },
    { value: "pharmacy", label: "pharmacy" },
    { value: "post_office", label: "post office" },
    { value: "train_station", label: "train station" },
    { value: "university", label: "university" },
    { value: "supermarket", label: "supermarket" },
    { value: "airport", label: "airport" },
  ];
  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      width: "500px",
      menuColor: "red",
      borderBottom: "1px dotted pink",
      color: "green",
      padding: 20,
    }),
  };

  useEffect(() => {
    // console.log(response);
    getUserLocation().then((res) => {
      const { data } = res;
      const { longitude, latitude } = data;
      const coordinate = [longitude, latitude];
      setCoordinates(coordinate);
    });
  }, []);

  function getNearLocals() {
    console.log(radiusOfSearch);
    console.log(typeOfPlace);

    getMyLocation(
      typeOfPlace,
      radiusOfSearch,
      coordinates[1],
      coordinates[0]
    ).then((res) => {
      console.log(res.data.results);
      setPlaces(res.data.results);

      setTimeout(() => {
        setShowPlaces(true);
      }, 200);
    });
  }
  function handleChangeTypeOfPlace(e: any) {
    setTypeOfPlace(e.value);
  }

  function choseOption(e: any) {
    setradiusOfSearch(e.value);
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <InputText
              type="text"
              id="title"
              placeholder="Type of the place"
              value={typeOfPlace}
              label="Choose witch type of place you would to search"
              handleChange={() => console.log("hola")}
            />

            <Select
              styles={customStyles}
              onChange={handleChangeTypeOfPlace}
              options={optionsTypeOfPlace}
            />

            <InputText
              type="text"
              id="title"
              placeholder="Radius Search"
              value={radiusOfSearch}
              label="Choose a radius distance "
              handleChange={handleChangeTypeOfPlace}
            />

            <Select
              styles={customStyles}
              onChange={choseOption}
              options={optionsRadius}
            />
          </div>
          <div className="col-md-8 submitButton">
            <div className="row justify-content-md-center">
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => getNearLocals()}
              >
                Search
              </button>
            </div>
          </div>
          <div className=" col-md-8 col-xs-12">
            <ul className="list-group ">
              {showPlaces ? (
                [...places].map((place: any, index) => {
                  // console.log(place);
                  return (
                    <li key={index} className="list-group-item ">
                      <List key={index} data={place} />
                    </li>
                  );
                })
              ) : (
                <div>no data</div>
              )}
            </ul>
          </div>
          <div className="message col-6 ">
            {response.responseMessage === "" ? (
              <div></div>
            ) : (
              <>
                {response.isSuccedToSavePlace === "fail" ? (
                  <div
                    className="col-12 align-self-center alert alert-warning"
                    role="alert"
                  >
                    <p>{response.responseMessage}</p>
                  </div>
                ) : (
                  <div
                    className="col-12 align-self-center alert alert-success"
                    role="alert"
                  >
                    <p>{response.responseMessage}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
