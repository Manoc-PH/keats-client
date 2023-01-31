import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import Txt from "../../Basic/Txt";

export default function Title(props) {
  const { children, style } = props;
  const styles = {
    ...style,
    fontSize: FONT_SIZES.ExtraLarge,
    fontWeight: FONT_WEIGHTS.SemiBold,
    color: themeColors.secondary,
  };
  return (
    <Txt {...props} style={styles}>
      {children}
    </Txt>
  );
}
