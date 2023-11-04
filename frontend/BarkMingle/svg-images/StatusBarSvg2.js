import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const StatusBarSvg2 = (props) => (
  <Svg
  xmlns="http://www.w3.org/2000/svg"
  width={160}
  height={4}
  fill="none"
  {...props}
>
  <Rect width={30.924} height={4} fill="#FFFCF6" rx={2} />
  <Path
    fill="#FFFCF6"
    d="M43.025 2a2 2 0 0 1 2-2H71.95a2 2 0 1 1 0 4H45.025a2 2 0 0 1-2-2Z"
  />
  <Rect
    width={30.924}
    height={4}
    x={86.05}
    fill="#A5A7FB"
    fillOpacity={0.5}
    rx={2}
  />
  <Rect
    width={30.924}
    height={4}
    x={129.076}
    fill="#A5A7FB"
    fillOpacity={0.5}
    rx={2}
  />
</Svg>
)
export default StatusBarSvg2
