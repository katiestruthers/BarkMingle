import { View } from "react-native";
import Svg, { Rect } from "react-native-svg";

const ProgressBar = ({ progress }) => {
  const barWidth = 150;
  const progressWidth = (progress / 100) * barWidth;

  return (
    <View>
      <Svg width={barWidth} height={"7"}>
        <Rect
          width={barWidth}
          height={"100%"}
          fill={"#eee"}
          rx={3.5}
          ry={3.5}
        />
        <Rect
          width={progressWidth}
          height={"100%"}
          fill={"#6263AF"}
          rx={3.5}
          ry={3.5}
        />
      </Svg>
    </View>
  );
};

export default ProgressBar;
