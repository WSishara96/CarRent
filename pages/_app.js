import '../styles/globals.scss';
import { ThemeProvider } from 'next-theme';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
