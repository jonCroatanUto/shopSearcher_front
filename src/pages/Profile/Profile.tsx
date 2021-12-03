import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { listFavorites } from "../../apiCalls";
import List from "../../components/List";
import { RootState } from "../../redux/reducers";
import { displayAddToListModal } from "../../redux/modalReducer/action";
function Profile() {
  const dispatch = useDispatch();
  const { diplayAddToListModal } = useSelector(
    (state: RootState) => state.modalReducer
  );
  const [favouriteShops, SetFavouriteShops] = useState([]);
  const [emptyShop, setEmptyShop] = useState();

  useEffect(() => {
    // if (emptyShop) {
    //   <div>no Shops</div>;
    // } else {
    listFavorites().then((res) => {
      setEmptyShop(res.data.message);
      SetFavouriteShops(res.data.shops);
    });
    // }
    //   setPlaces(res.data.results);

    //   setTimeout(() => {
    //     setShowPlaces(true);
    //   }, 200);
  }, []);
  function send() {
    dispatch(displayAddToListModal(false));
  }
  return (
    <>
      {emptyShop === "No users" ? (
        <div>No shops</div>
      ) : (
        <div className="container">
          <div className="row">
            <div className=" col-md-6 col-xs-12">
              {[...favouriteShops].map((shop: any, index) => {
                return <List key={index} data={shop} />;
              })}
            </div>
            <div className=" col-md-6 col-xs-12">
              <div>My Lists</div>
              {/* {[...favouriteShops].map((shop: any, index) => {
                return <List key={index} data={shop} />;
              })} */}
            </div>
          </div>
        </div>
      )}
      {diplayAddToListModal ? (
        <div>
          isDiplayed
          <button onClick={send}>hide</button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
export default Profile;
