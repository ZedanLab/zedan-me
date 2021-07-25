import React from 'react';
import Head from 'next/head';

function PageHead({ siteTitle = '', title = '', description = '' }) {
  return (
    <Head>
      <title>{title ? `${title} – ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description} key="description" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta charset="UTF-8" />
      <meta
        name="keywords"
        content="Software, Engineer, Development, Programming, Egypt, Backend, Frontend, FullStack, Freelancer, Remotely, Laravel, React.js, Next.js, Application"
      />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#2563EB" />

      <meta property="og:title" content={title ? `${title} – ${siteTitle}` : siteTitle} />

      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:url" content="https://zedan.me" />
      <meta property="og:site_name" content={siteTitle} />

      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/logo.png" />
    </Head>
  );
}

export default PageHead;
