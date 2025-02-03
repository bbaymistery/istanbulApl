import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // This is a static method in the CustomDocument class that fetches initial properties before rendering the document.
  static async getInitialProps(ctx) {
    // Initialize an empty object to hold page-specific props.

    let pageProps = {};

    // Store the original renderPage function from the context.
    const originalRenderPage = ctx.renderPage;

    // Override the renderPage function to customize the rendering of the app and components.
    ctx.renderPage = () =>
      originalRenderPage({
        // Enhance the App component, allowing you to wrap the entire app with additional props or functionality.
        enhanceApp: (App) => (props) => {
          return <App {...props} />
        },
        // Enhance individual components if needed, but in this case, we just return them as is.
        enhanceComponent: (Component) => Component,
      });

    // Call the original getInitialProps method from the Document class to get the initial props.
    const initialProps = await Document.getInitialProps(ctx);

    // Return the initial props provided by Document along with any custom pageProps we might have set.
    return { ...initialProps, pageProps };
  }
  render() {
    let { hasLanguage } = this?.props?.__NEXT_DATA__?.props?.pageProps

    return (
      <Html lang={hasLanguage ? hasLanguage : "en"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;


