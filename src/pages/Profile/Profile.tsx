import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listFavorites } from "../../apiCalls";
import List from "../../components/List";
import { RootState } from "../../redux/reducers";

function Profile() {
  const { emptyShop } = useSelector((state: RootState) => state.modalReducer);
  const [favouriteShops, SetFavouriteShops] = useState([]);

  useEffect(() => {
    if (emptyShop) {
      <div>no Shops</div>;
    } else {
      listFavorites().then((res) => {
        console.log(res.data.shops);
        SetFavouriteShops(res.data.shops);
      });
    }
    //   setPlaces(res.data.results);

    //   setTimeout(() => {
    //     setShowPlaces(true);
    //   }, 200);
  }, []);

  return (
    <>
      {emptyShop ? (
        <div>no data</div>
      ) : (
        <div>
          {[...favouriteShops].map((shop: any, index) => {
            return <List key={index} data={shop.shopName} />;
          })}
        </div>
      )}
    </>
  );
}
export default Profile;
