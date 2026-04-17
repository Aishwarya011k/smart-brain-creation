import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Smart Brain Creations</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Smart Brain Creations - Creative & Digital Education for Future-Ready Students." />
          <meta property="og:title" content="Smart Brain Creations" />
          <meta property="og:description" content="Creative & Digital Education for Future-Ready Students." />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="Smart Brain Creations" />
          <meta name="twitter:description" content="Creative & Digital Education for Future-Ready Students." />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
          <link rel="apple-touch-icon" href="/logo512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#5f117c" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4955812720478714" crossorigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument