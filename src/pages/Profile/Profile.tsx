import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { listFavorites } from "../../apiCalls";
import List from "../../components/List";
import { RootState } from "../../redux/reducers";
import "./profile.css";
import ShopListSelector from "../../components/ShopListSelector";

function Profile() {
  const { response, diplayAddToListModal } = useSelector(
    (state: RootState) => state.modalReducer
  );

  const [favouriteShops, SetFavouriteShops] = useState([]);
  const [emptyShop, setEmptyShop] = useState();

  useEffect(() => {
    listFavorites().then((res) => {
      setEmptyShop(res.data.message);
      SetFavouriteShops(res.data.shops);
    });
  }, []);

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
      )}
      {diplayAddToListModal ? (
        <div>
          <ShopListSelector />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
export default Profile;
