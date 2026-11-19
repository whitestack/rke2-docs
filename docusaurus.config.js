
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'WhiteCruiser RKE2',
  tagline: '',
  url: 'https://customers.whitestack.com',
  baseUrl: '/rke2-doc-whitestack/',
  favicon: 'img/favicon.ico',
  organizationName: 'whitestack', // Usually your GitHub org/user name.
  projectName: 'rke2-docs', // Usually your repo name.
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        label: "English",
      },
    },
  },
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    announcementBar: {
      id: 'support_us',
      content:
        'Ingress NGINX went End-of-Life in <a href="https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/">March 2026</a>. Starting with v1.36, Traefik is the default for new clusters. For existing clusters, see our <a href="/rke2-doc-whitestack/reference/ingress_migration">Migration Guide</a>.',
      backgroundColor: '#ec7a3c',
      textColor: '#141419',
      isCloseable: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: 'RKE2',
        src: 'img/logo-rke2-whitestack.svg',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          to: 'https://github.com/rancher/rke2',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__icon navbar__github',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Whitestack. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/whitestack/rke2-docs/edit/main/',
          exclude: ['migration.md'],
        },
        blog: false, // Optional: disable the blog plugin
        // ...
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  themes: [
    '@docusaurus/theme-mermaid',
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        docsRouteBasePath: "/",
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        indexBlog: false,
      }),
    ],
  ],
};
