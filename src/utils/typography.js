import Typography from 'typography';
import altonTheme from 'typography-theme-alton';

const typography = new Typography({
  ...altonTheme,
  overrideThemeStyles: () => ({
    li: {
      marginBottom: 0, // Remove bottom margin for <li> tags
    },
  }),
});

export const { scale, rhythm, options } = typography;
export default typography;