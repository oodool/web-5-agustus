
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noLayoutRoutes = ['/login', '/register']; // Add routes you want to exclude from layout

  const shouldUseLayout = !noLayoutRoutes.includes(router.pathname);

  return (
    shouldUseLayout ? (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    ) : (
      <Component {...pageProps} />
    )
  );
}

export default MyApp;
