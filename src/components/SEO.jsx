import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, author, copyright, robots, structuredData }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {author && <meta name="author" content={author} />}
      {copyright && <meta name="copyright" content={copyright} />}
      {robots && <meta name="robots" content={robots} />}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
