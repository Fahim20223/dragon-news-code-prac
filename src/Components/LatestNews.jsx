import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-3 items-center bg-base-300 p-5 rounded-lg">
      <h2 className="bg-secondary text-white px-4 py-2">Latest</h2>
      <Marquee className="flex gap-7" pauseOnHover={true}>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
