import React, { useEffect, useState } from "react";
import Select from "react-select";
import Button from "../Button";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import {
  getAllMyShoplists,
  addSHopToShoplist,
  createNewShoplistApi,
} from "../../apiCalls";
import { AnyIfEmpty, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import InputText from "../InputText";
import "./style.css";
import {
  responseMessageManagment,
  displayAddToListModal,
} from "../../redux/modalReducer/action";

function PlaylistSelector() {
  const dispatch = useDispatch();
  const { shopID } = useSelector((state: RootState) => state.shopReducer);
  const { userData } = useSelector((state: RootState) => state.userReducer);

  const [formToCreatePlaylist, setFormToCreatePlaylist] = useState(false);
  const [newShopList, setNewShopList] = useState("");

  useEffect(() => {
    getAllMyShoplists().then((res) => {
      const { shopsList } = res.data;

      if (shopsList !== undefined) {
        shopsList.map((item: any) => {
          makeNewOptions(item.shopListName);
        });
      }
    });
  }, []);
  function createNewPlaylist(e: any) {
    e.preventDefault();
    createNewShoplistApi(newShopList, shopID, userData._id).then((res) => {
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
      dispatch(displayAddToListModal(false));
    });
    // dispatch(reloadPlaylistFetchAction(true));
    // dispatch(setMyPlaylistModal(false));
  }
  function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setNewShopList(e.target.value);
  }

  function choseOption(e: any) {
    addSHopToShoplist(shopID, e.value).then((res) => {
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
      dispatch(displayAddToListModal(false));
    });
  }

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
  const options: any = [];

  function makeNewOptions(newPlaylist: string) {
    options.push({ value: newPlaylist, label: newPlaylist });
  }

  return (
    <>
      <div
        onClick={() => {
          dispatch(displayAddToListModal(false));
        }}
        className="back-context"
      ></div>
      <div className="selectorModal">
        <h2 className="titleSelect">Select a list were save shop: </h2>

        <Select
          styles={customStyles}
          onChange={choseOption}
          options={options}
        />

        <h2 className="titleSelect">or... </h2>
        {formToCreatePlaylist ? (
          <form onSubmit={createNewPlaylist}>
            <div className="inputBox">
              <InputText
                type="text"
                id="title"
                placeholder="Give a name to new shop list"
                value={newShopList}
                label="new shop list"
                handleChange={handleChangeTitle}
              />
            </div>

            <button className="btn btn-outline-success" type="submit">
              create ShopList
            </button>
          </form>
        ) : (
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={() => setFormToCreatePlaylist(true)}
          >
            create
          </button>
        )}
      </div>
    </>
  );
}

export default PlaylistSelector;
