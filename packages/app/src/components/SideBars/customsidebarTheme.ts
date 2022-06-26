import { BackstageOverrides } from '@backstage/core-components';
import { BackstageOverrides as CatalogReactOverrides } from '@backstage/plugin-catalog-react';
import {
  BackstageTheme,
  createTheme,
  lightTheme,
  pageTheme,
} from '@backstage/theme';
import { shapes, genPageTheme } from '@backstage/theme';


const createCustomThemeOverrides = (
  theme: BackstageTheme,
): BackstageOverrides & CatalogReactOverrides => {
  return {
    
    BackstageHeader: {
      header: {
        backgroundImage: genPageTheme(['#FF7396', '#FF7396'], shapes.wave)
          .backgroundImage,
        boxShadow: 'unset',
        paddingBottom: theme.spacing(1),
      },
      title: {
        color: theme.palette.primary.dark,
        fontWeight: 900,
      },
      subtitle: {
        color: theme.palette.primary.dark,
      },
      type: {
        color: theme.palette.primary.dark,
      },
    },
  };
};
export const customSideBarTheme: BackstageTheme = {
  ...lightTheme,
  overrides: {
    ...lightTheme.overrides,
    ...createCustomThemeOverrides(lightTheme),
  },
};
