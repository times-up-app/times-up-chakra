import chakraTheme from '@chakra-ui/theme';

// probably not the best way to do this
var theme = {};
Object.assign(theme, chakraTheme);

theme.config = {
    initialColorMode: "light",
};

theme.colors = {
    brown: "#6D4800",
    pink: "#FF8686",
    dullPink: "#BA9A9A",
    white: "#FFFFFF",
    lightYellow: "#FFF7D7",
};

theme.fontSizes = {
    sm: "16px",
    md: "24px",
    lg: "36px",
    xl: "72px",
};

export default theme;
