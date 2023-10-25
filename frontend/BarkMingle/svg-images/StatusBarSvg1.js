import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const StatusBarSvg1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={151}
    height={4}
    fill="none"
    {...props}
  >
    <Rect width={23} height={4} fill="#6263AF" rx={2} />
    <Rect
      width={23}
      height={4}
      x={32}
      fill="#A5A7FB"
      fillOpacity={0.5}
      rx={2}
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
export default StatusBarSvg1
