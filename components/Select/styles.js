import { StyleSheet } from 'react-native';
import {
  colors,
  fontSizes,
  lineHeights,
  spacing,
  borderRadii,
} from 'lib/styling';

export default StyleSheet.create({
  root: {
    position: 'relative',
    borderRadius: borderRadii.a,
    border: `1px solid ${colors.border}`,
  },
  rootWithIcon: {
    paddingLeft: 46,
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: spacing.e,
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    color: colors.text,
  },
  select: {
    backgroundColor: colors.white,
    padding: `0 ${spacing.e}px`,
    height: fontSizes.c * lineHeights.normal * 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: fontSizes.c,
    lineHeight: lineHeights.close,
    color: colors.text,
    border: 'none',
  },
});
