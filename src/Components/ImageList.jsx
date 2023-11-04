import React from "react";
import ImageItem from "./ImageItem.jsx";

const ImageList = ({ imagesPlaceholder }) => {
  return (
    <div>
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
};

export default ImageList;
