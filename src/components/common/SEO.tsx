import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/siteConfig";

type Schema = Record<string, unknown>;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  schema?: Schema | Schema[];
}

export default function SEO({ title, description, path = "/", image = "/images/brand/turbocart-og.jpg", noIndex = false, schema }: SEOProps) {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
      },
      ...(path === "/" ? [] : [{
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "TurboCart", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: title.split("|")[0].trim(), item: url },
        ],
      }]),
      ...schemas.map(item => Object.fromEntries(Object.entries(item).filter(([key]) => key !== "@context"))),
    ],
  };

  return <Helmet>
    <html lang="en-IN" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
    <link rel="canonical" href={url} />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteConfig.name} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content="TurboCart retail ERP and POS software" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  </Helmet>;
}
