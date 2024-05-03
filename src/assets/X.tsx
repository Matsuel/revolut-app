import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from "../types/type"

function X({props, color}: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke={color}
      className="w-6 h-6"
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </Svg>
  )
}

export default X
