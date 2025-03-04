import Layout from '@/component/Layout';
import '@/styles/globals.css';
import 'font-awesome/css/font-awesome.min.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
