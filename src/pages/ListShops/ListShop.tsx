import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { getAllMyShoplists } from "../../apiCalls";

function ListShop() {
  const { userData } = useSelector((state: RootState) => state.userReducer);
  const [MyListShops, setMyListShops] = useState([]);
  useEffect(() => {
    getAllMyShoplists(userData._id).then((res) => {
      console.log(res);
      const { shopsList } = res.data;

      setMyListShops(shopsList);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-6 col-xs-12">
          <h1>All my favorite Places</h1>
          {[...MyListShops].map((shopList: any, index) => {
            return <p>{shopList.shopListName}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ListShop;
