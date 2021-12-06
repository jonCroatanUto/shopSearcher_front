import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listFavorites } from "../../apiCalls";
import List from "../../components/List";
import { RootState } from "../../redux/reducers";
import "./profile.css";
import ShopListSelector from "../../components/ShopListSelector";

function Profile() {
  const { response, diplayAddToListModal } = useSelector(
    (state: RootState) => state.modalReducer
  );
  const { userData } = useSelector((state: RootState) => state.userReducer);
  const [favouriteShops, SetFavouriteShops] = useState([]);
  const [emptyShop, setEmptyShop] = useState();

  useEffect(() => {
    listFavorites(userData._id).then((res) => {
      console.log(res);
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
              <h1>All my favorite Places</h1>
              {[...favouriteShops].map((shop: any, index) => {
                return <List key={index} data={shop} />;
              })}
            </div>
            <div className=" col-md-6 col-xs-12">
              <Link to="/listShop" style={{ textDecoration: "none" }}>
                <h1>My list shops</h1>
              </Link>
            </div>
            <div className="message col-12 ">
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
