'use client';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  console.log(process.env.NODE_ENV);
    return (
      <Html lang='en' itemScope itemType="https://schema.org/Blog">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }