import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/menu/components/ColorMode";
import theme from "../src/components/themes";

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initalMode={"light"}>{props.children}</ColorModeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  const context = useContext(ColorModeContext);
  return (
    <ThemeProvider theme={theme[context.mode]}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
