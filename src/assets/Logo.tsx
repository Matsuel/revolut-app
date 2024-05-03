import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from "../types/type"

function Logo({ props, color }: SvgProps) {
  return (
    <Svg
      width="25px"
      height="25px"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill={color || "#000"}
      {...props}
    >
      <Path
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={12}
        d="M99 22c-13.415 0-29.564 1.953-38.077 3.13-3.521.486-6.226 3.294-6.667 6.82L39.138 152.897c-1.154 9.233 5.793 17.672 15.093 17.36 7.908-.265 14.743-1.197 20.936-3.119 5.049-1.567 8.26-6.27 8.974-11.508L89 120l14.191 39.42c2.285 6.348 8.318 10.693 15.053 10.29 10.248-.611 18.11-2.294 27.788-5.98 4.703-1.791 6.264-7.558 3.671-11.871C139.848 135.468 136.165 121.216 131 104c0 0 22-14 22-38 0-36-30-44-54-44z"
      />
      <Path
        fill="#fff"
        d="M85.929 87.19l4.363-32c.406-2.974 2.95-5.235 5.94-4.984C112.14 51.539 117.362 59.302 116 72c-1.142 10.655-7.352 19.734-24.13 21.635-3.613.409-6.433-2.843-5.941-6.446z"
      />
    </Svg>
  )
}

export default Logo
