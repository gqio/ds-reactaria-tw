import merge from "deepmerge";

import { themeColors } from "../../colors";
import { themeBorderRadius } from "../../radii";
import { themeSpacing } from "../../spacing";

let theme = {};
theme = merge(theme, themeColors);
theme = merge(theme, themeBorderRadius);
theme = merge(theme, themeSpacing);

export default theme;
