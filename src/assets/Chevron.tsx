import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from "../types/type"

function Chevron({ props, color }: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={color}
      className="w-6 h-6"
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </Svg>
  )
}

export default Chevron
