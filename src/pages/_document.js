import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

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
  // Function to generate meta and link tags dynamically from an array of tag strings
  createMetaTagElements(metaTags) {
    if (metaTags.length > 0) {
      return metaTags.map((tagString, index) => {

        // Match meta tags in the provided strings
        const matches = tagString.match(/<meta [^>]+>/g);
        if (matches) {
          return matches.map((metaTag, idx) => {
            const props = {};
            metaTag.replace(/(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, (m, key, value) => {
              props[key] = value;
              return m;
            });
            return <meta {...props} key={`meta-${index}-${idx}`} />;
          });
        }
        // Match meta tags in the provided strings   For link tags  
        const linkMatches = tagString.match(/<link [^>]+>/g);
        if (linkMatches) {
          return linkMatches.map((linkTag, idx) => {
            const props = {};
            linkTag.replace(/(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, (m, key, value) => {
              props[key] = value;
              return m;
            });
            return <link {...props} key={`link-${index}-${idx}`} />;
          });
        }
        return null;
      });
    }
  }

  // Function to render JSON-LD schema scripts dynamically
  renderSchemaScripts(schemas) {
    return schemas?.length > 0 && schemas.map((schema, index) => (
      <Script key={index} type="application/ld+json" strategy='beforeInteractive'>
        {JSON.stringify(schema, null, 2)}
      </Script>
    ));
  }
  render() {
    let { generalSchemas, metaTags = [], tourDetails, hasLanguage } = this?.props?.__NEXT_DATA__?.props?.pageProps
    let schemasOfPages = generalSchemas || [] //home page Terms and the rest page has different schemas 


    //checking if datas comes from single tour (tours/link.js)
    if (tourDetails?.length === 1) {
      schemasOfPages = tourDetails[0].schema
      // metaTags = [...tourDetails[0].metaTags]
    }



    return (
      <Html lang={hasLanguage ? hasLanguage : "en"}>
        <Head >
          {this.renderSchemaScripts(schemasOfPages)}
          {this.createMetaTagElements(metaTags)}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
