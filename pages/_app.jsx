import '../styles/globals.css'
import App from 'next/app';
import MainLayout from '../components/layouts/MainLayout'
import DefaultLayout from '../components/layouts/DefaultLayout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    )
  }
}

export default MyApp