// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme } from '@nextui-org/react';
import "../styles/Global.css"
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})
function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
