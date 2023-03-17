// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme } from '@nextui-org/react';
import "../styles/Global.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useSSR } from '@nextui-org/react'
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
  const { isBrowser } = useSSR()
  return (
    // 2. Use at the root of your app
    isBrowser && (
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  );
}

export default MyApp;
