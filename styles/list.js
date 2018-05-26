import css from 'styled-jsx/css';
import { transparentize } from 'polished';
import { colors, spacing, fontSizes, bps } from './base';

// prettier-ignore
export default css`
  .root {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "header controls"
      "table table";

    .header {
      padding-left: ${spacing.medium}px;
      padding-right: ${spacing.medium}px;
      grid-area: header;
    }

    .controls {
      grid-area: controls;
      display: grid;
      grid-template-columns: auto auto;
      grid-auto-columns: auto;
      grid-auto-flow: column;
      grid-gap: ${spacing.medium}px;
      align-items: center;
      padding-left: ${spacing.medium}px;
      padding-right: ${spacing.medium}px;
      padding-bottom: ${spacing.medium}px;
      justify-content: start;
    }

    .table {
      grid-area: table;
    }

    :global(.ReactVirtualized__Grid) {
      outline: none;
    }

    :global(.ReactVirtualized__Table__headerRow) {
      display: grid;
    }

    :global(.ReactVirtualized__Table__headerColumn),
    :global(.ReactVirtualized__Table__rowColumn) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: ${spacing.medium}px;
      padding-right: ${spacing.medium}px;
      align-items: center;
    }

    :global(.ReactVirtualized__Table__headerColumn) {
      outline: none;
      font-weight: bold;
      ${fontSizes.smallTitle}
      display: flex;
      align-items: center;
    }

    :global(.ReactVirtualized__Table__headerColumn:not([aria-sort])) {
      color: rgba(0, 0, 0, 0.45);
    }

    :global(.ReactVirtualized__Table__headerColumn svg) {
      padding-left: ${spacing.small}px;
      width: 24px;
      height: 24px;
    }

    :global(.ReactVirtualized__Table__headerRow),
    :global(.ReactVirtualized__Table__row) {
      display: grid;
      align-items: center;
    }

    :global(.ReactVirtualized__Table__headerRow) {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.03) 100%
      );
    }

    :global(.ReactVirtualized__Table__row) {
      outline: none;
    }

    :global(.ReactVirtualized__Table__row:nth-child(even)) {
      background: rgba(0, 0, 0, 0.03);
    }

    :global(.ReactVirtualized__Table__row.active) {
      background: ${transparentize(0.8, colors.blue)};
    }

    :global(.no-files) {
      padding-left: ${spacing.medium}px;
      padding-right: ${spacing.medium}px;
      padding-bottom: ${spacing.small}px;
      padding-top: ${spacing.small}px;
    }

    @media (max-width: ${bps.medium - 1}px) {
      grid-template-rows: auto auto 1fr;
      grid-template-columns: 1fr;
      grid-template-areas:
        "header"
        "controls"
        "table";

      .controls {
        grid-template-columns: 1fr auto;
      }
    }

    @media (min-width: ${bps.medium}px) {
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "header controls"
        "table table";

      .controls {
        align-self: end;

        .search {
          :global(.ant-input-group-wrapper) {
            max-width: 200px;
          }
        }
      }
    }
  }
`;