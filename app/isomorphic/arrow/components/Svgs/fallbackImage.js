import React from "react";
import PropTypes from "prop-types";

export const ImageFallbackIcon = ({ width = 40, height = 30, iconColor = "#99B0CB" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 102 76" version="1.1">
      <g
        id="demo-home-copy"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-377.000000, -314.000000)"
      >
        <g id="Group-13" transform="translate(377.000000, 314.000000)">
          <path
            d="M43.2,49.7 L62.2,19.2 L87.2,59.4 L17,59.4 L32.8,39.4 L43.2,49.7 Z M29.9,28.6 C25.8683213,28.6 22.6,25.3316787 22.6,21.3 C22.6,17.2683213 25.8683213,14 29.9,14 C33.9316787,14 37.2,17.2683213 37.2,21.3 C37.2,25.3316787 33.9316787,28.6 29.9,28.6 Z"
            id="Combined-Shape"
            fill={iconColor}
            fillRule="nonzero"
          ></path>
          <rect
            id="Rectangle-19"
            stroke={iconColor}
            strokeWidth="3"
            x="1.5"
            y="1.5"
            width="99"
            height="73"
            rx="3"
          ></rect>
        </g>
      </g>
    </svg>
  );
};

ImageFallbackIcon.propTypes = {
  width: PropTypes.object,
  height: PropTypes.object,
  iconColor: PropTypes.object,
};
