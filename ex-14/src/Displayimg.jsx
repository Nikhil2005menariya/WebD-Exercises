import React from 'react';
import img from '/Users/niksmac/Desktop/react exercise/ex-2/ex-2/src/assets/729e0f6f88cc0638209780470c80932489c6900b.jpg'

export const Displayimg = () => {
  return (
    <>
      <h1>This is an image from the src folder</h1>
        <img src={img} alt="" />

      <h1>This is an image from the public folder</h1>
      <img src="/3d6313aace8db229f653e5d449ccdf9d8bf14df9.jpg" alt="From public folder" width="300" />
    </>
  );
};
