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
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-6 col-xs-12">
          <h1>MY lists of places</h1>
          {[...MyListShops].map((shopList: any, index) => {
            return (
              <div className="card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="rgb(238, 211, 163)"
                  className="bi bi-folder"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                </svg>
                <div className="card-body">
                  <h2> {shopList.shopListName}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListShop;
