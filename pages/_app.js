import React from 'react';
import '../styles/globals.css';
import PageHead from '../components/layout/PageHead';
import Container from '../components/layout/Container';
import MaintenancePage from '../components/pages/MaintenancePage';

function MyApp({ Component, pageProps, router }) {
  const maintenanceMode = false;

  const siteTitle = 'Mohamed Zedan – Software Engineer';
  // eslint-disable-next-line operator-linebreak
  const description =
    'Mohamed Zedan – a highly skilled Software Engineer. Portfolio/Resume Website';

  return (
    <>
      <PageHead
        siteTitle={siteTitle}
        title={pageProps.title}
        description={pageProps.description || description}
      />
      {maintenanceMode ? (
        <MaintenancePage />
      ) : (
        <Container route={router.route}>
          <Component {...pageProps} />
        </Container>
      )}
    </>
  );
}

export default MyApp;
