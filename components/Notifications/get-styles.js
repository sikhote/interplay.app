import { transparentize } from 'polished';
import { colors, spacing, zIndexes } from '../../lib/styling';

export default ({ width }) => ({
  // example: {
  //   ...(width < bps.b
  //     ? {

  //       }
  //     : {}),
  // },
  item: {
    position: 'fixed',
    left: 0,
    // top: 0,
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: spacing.d,
  },
  itemInner: {
    padding: spacing.d,
    border: `1px solid ${colors.border}`,
    zIndex: zIndexes.notification,
    background: colors.white,
    maxWidth: 300,
  },
  icon: {
    marginRight: spacing.c,
  },
  iconSuccess: {
    color: colors.a,
  },
  iconError: {
    color: colors.c,
  },
});
