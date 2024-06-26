const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

// 获取对应的主题
const getThemeMap = (): string | null => {
  return document.documentElement.getAttribute("data-theme");
};

// 设置主题
const setTheme = (isLight: boolean = true) => {
  document.documentElement.setAttribute(
    "data-theme",
    isLight ? THEME.LIGHT : THEME.DARK
  );
};

export { getThemeMap, setTheme, THEME };
