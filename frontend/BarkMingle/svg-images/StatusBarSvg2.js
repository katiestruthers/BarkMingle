import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const StatusBarSvg2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={151}
    height={4}
    fill="none"
    {...props}
  >
    <Rect width={23} height={4} fill="#FFFCF6" rx={2} />
    <Path
      fill="#FFFCF6"
      d="M32 2a2 2 0 0 1 2-2h19a2 2 0 1 1 0 4H34a2 2 0 0 1-2-2Z"
    />
    <Rect
      width={23}
      height={4}
      x={64}
      fill="#A5A7FB"
      fillOpacity={0.5}
      rx={2}
    />
    <Rect
      width={23}
      height={4}
      x={96}
      fill="#A5A7FB"
      fillOpacity={0.5}
      rx={2}
    />
    <Rect
      width={23}
      height={4}
      x={128}
      fill="#A5A7FB"
      fillOpacity={0.5}
      rx={2}
    />
  </Svg>
)
export default StatusBarSvg2
