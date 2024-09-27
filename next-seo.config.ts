import preview from "@public/favicons/card.png";

const getConfig = (): any => {
  const domain: any = process.env.DOMAIN;

  return {
    title: {
      default: "Home | Summative",
      template: `%s | Summative`,
    },
    description: `Summative - `,
    openGraph: {
      type: "website",
      images: [{ url: preview.src, alt: "Preview Image" }],
      title: `Summative`,
      description: `Summative - `,
      locale: "en",
      url: domain,
      siteName: "Summative",
    },
    manifest: "/favicons/manifest.json",
    twitter: {
      card: "summary_large_image",
    },
    metadataBase: new URL(domain),
  };
};

export default getConfig;
