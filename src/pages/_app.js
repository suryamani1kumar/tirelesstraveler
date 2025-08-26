import Layout from '@/component/Layout';
import '@/styles/globals.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from '@/component/context';
import { useState } from 'react';

export default function App({ Component, pageProps }) {

  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  return (
    <Context.Provider value={{ openSignInModal, openSignUpModal, setOpenSignInModal, setOpenSignUpModal }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
}
