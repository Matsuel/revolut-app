import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeftArrow({props, color}: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={color}
      className="w-6 h-6"
      width={30}
      height={30}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </Svg>
  )
}

export default LeftArrow
