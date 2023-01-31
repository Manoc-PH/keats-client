import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import Txt from "../../Basic/Txt";

export default function BodyText(props) {
  const { children, style } = props;
  const styles = {
    fontSize: FONT_SIZES.Regular,
    fontWeight: FONT_WEIGHTS.Regular,
    color: themeColors.secondary,
    ...style,
  };
  return (
    <Txt {...props} style={styles}>
      {children}
    </Txt>
  );
}
