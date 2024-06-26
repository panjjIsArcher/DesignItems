const darkTheme = "rgb(51, 50, 50)";
const lightTheme = "#fff";

// 获取对应的主题
const getThemeMap = (): string | null => {
  return document.documentElement.getAttribute("data-theme");
};

// 设置主题颜色
const setTheme = (isLight: boolean = true) => {
  document.documentElement.setAttribute(
    "data-theme",
    isLight ? "light" : "dark"
  );
};

export { getThemeMap, setTheme };
