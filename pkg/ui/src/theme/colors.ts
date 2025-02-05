import { colorModeFormatter } from "../utils";

export type DefaultColorsType = Record<
  string,
  { default: string; _dark: string }
>;

const defaultColors: DefaultColorsType = {
  accent: colorModeFormatter("primary.300", "primary.200"),
  accentContent: colorModeFormatter("neutral.50", "shades.100"),
  accentHighlight: colorModeFormatter("primary.200", "primary.300"),
  accentDisabled: colorModeFormatter("neutral.500", "neutral.300"),
  background: colorModeFormatter("neutral.50", "shades.50"),
  badge: colorModeFormatter("blue.50", "blue.600"),
  badgeContent: colorModeFormatter("blue.800", "white"),
  badgePressed: colorModeFormatter("gray.50", "blue.500"),
  border: colorModeFormatter("blackAlpha.300", "blue.900"),
  content: colorModeFormatter("neutral.900", "shades.100"),
  contentSecondary: colorModeFormatter("neutral.500", "neutral.500"),
  contentDisabled: colorModeFormatter("neutral.400"),
  control: colorModeFormatter("shades.00"),
  controlActive: colorModeFormatter("primary.500"),
  controlBorderActive: colorModeFormatter("primary.200", "primary.300"),
  controlBorderHighlight: colorModeFormatter("neutral.300", "neutral.200"),
  hint: colorModeFormatter("neutral.300", "neutral.300"),
  icon: colorModeFormatter("primary.300", "primary.300"),
  iconHighlight: colorModeFormatter("primary.300", "primary.700"),
  link: colorModeFormatter("blue.400", "blue.300"),
  surface: colorModeFormatter("shades.00", "neutral.50"),
  surfaceContent: colorModeFormatter("gray.700", "white"),
  surfaceContentSecondary: colorModeFormatter("gray.500", "cyan.500"),
  surfaceHeader: colorModeFormatter("primary.50", "primary.50"),
  surfaceIcon: colorModeFormatter("gray.400", "blue.600"),
  tagIndicatorContent: colorModeFormatter("cyan.500", "cyan.400"),
};

export default defaultColors;
