import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <script src="/tw-elements/dist/js/index.min.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}