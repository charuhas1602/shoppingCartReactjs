import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";

class Shimmer extends React.Component {
   render() {
      return <>
         <ShimmerThumbnail height={250} rounded /><ShimmerThumbnail height={250} rounded /><ShimmerThumbnail height={250} rounded /><ShimmerThumbnail height={250} rounded /><ShimmerThumbnail height={250} rounded /><ShimmerThumbnail height={250} rounded /><ShimmerThumbnail height={250} rounded /><ShimmerThumbnail height={250} rounded /><ShimmerThumbnail height={250} rounded />
      </>;
   }
}

export default Shimmer