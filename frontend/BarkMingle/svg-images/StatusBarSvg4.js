import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const StatusBarSvg4 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={160}
    height={4}
    fill="none"
    {...props}
  >
    <Rect width={30.924} height={4} fill="#6263AF" rx={2} />
    <Rect width={30.924} height={4} x={43.025} fill="#6263AF" rx={2} />
    <Rect width={30.924} height={4} x={86.05} fill="#6263AF" rx={2} />
    <Rect width={30.924} height={4} x={129.076} fill="#6263AF" rx={2} />
  </Svg>
)
export default StatusBarSvg4
