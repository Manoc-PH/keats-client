import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import Txt from "../../Basic/Txt";

export default function Subtitle(props) {
  const { children, style } = props;
  const styles = {
    ...style,
    fontSize: FONT_SIZES.Small,
    fontWeight: FONT_WEIGHTS.Medium,
    color: themeColors.secondaryLight,
  };
  return (
    <Txt {...props} style={styles}>
      {children}
    </Txt>
  );
}
