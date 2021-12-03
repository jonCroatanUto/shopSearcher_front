import React from "react";

function List(props: {
  data: {
    name: string;
    vicinity: string;
    opening_hours: {
      open_now: true;
    };
    photos: [
      {
        html_attributions: string[];
      }
    ];
    rating: number;
  };
}) {
  const { data } = props;

  return <div>{data.name}</div>;
}
export default List;
