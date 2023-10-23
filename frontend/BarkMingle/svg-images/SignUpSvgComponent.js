import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const SignUpSvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={223}
    height={222}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h223v222H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.00024 0 0 .00025 0 0)" />
      </Pattern>
      <Image
        id="b"
        width={4096}
        height={4080}
      />
    </Defs>
  </Svg>
)
export default SignUpSvgComponent