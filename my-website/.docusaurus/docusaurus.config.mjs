/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "WePLi",
  "tagline": "Share Your Sound, Unite in Harmony",
  "favicon": "img/favicon.ico",
  "url": "https://wepli.site",
  "baseUrl": "/",
  "organizationName": "WePLi-Test",
  "projectName": "WePLi-Document",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "./sidebars.ts",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "blog": {
          "showReadingTime": true,
          "feedOptions": {
            "type": [
              "rss",
              "atom"
            ],
            "xslt": true
          },
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          "onInlineTags": "warn",
          "onInlineAuthors": "warn",
          "onUntruncatedBlogPosts": "warn"
        },
        "theme": {
          "customCss": "./src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "image": "img/docusaurus-social-card.jpg",
    "navbar": {
      "title": "WePLi",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Document"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/dongx0915/WePLi-Android",
          "label": "Download",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "WebSite",
          "items": [
            {
              "label": "Document",
              "to": "/docs/intro"
            },
            {
              "label": "Blog",
              "to": "/blog"
            }
          ]
        },
        {
          "title": "Channel",
          "items": [
            {
              "label": "Instagram",
              "href": "https://www.instagram.com/dongx._.2/"
            }
          ]
        },
        {
          "title": "Development",
          "items": [
            {
              "label": "Github-Android",
              "href": "https://github.com/dongx0915/WePLi-Android"
            },
            {
              "label": "GitHub-Server",
              "href": "https://github.com/dongx0915/WePLi-Android"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2024 My Project"
    },
    "prism": {
      "theme": {
        "plain": {
          "backgroundColor": "hsl(230, 1%, 98%)",
          "color": "hsl(230, 8%, 24%)"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "cdata"
            ],
            "style": {
              "color": "hsl(230, 4%, 64%)"
            }
          },
          {
            "types": [
              "doctype",
              "punctuation",
              "entity"
            ],
            "style": {
              "color": "hsl(230, 8%, 24%)"
            }
          },
          {
            "types": [
              "attr-name",
              "class-name",
              "boolean",
              "constant",
              "number",
              "atrule"
            ],
            "style": {
              "color": "hsl(35, 99%, 36%)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "color": "hsl(301, 63%, 40%)"
            }
          },
          {
            "types": [
              "property",
              "tag",
              "symbol",
              "deleted",
              "important"
            ],
            "style": {
              "color": "hsl(5, 74%, 59%)"
            }
          },
          {
            "types": [
              "selector",
              "string",
              "char",
              "builtin",
              "inserted",
              "regex",
              "attr-value",
              "punctuation"
            ],
            "style": {
              "color": "hsl(119, 34%, 47%)"
            }
          },
          {
            "types": [
              "variable",
              "operator",
              "function"
            ],
            "style": {
              "color": "hsl(221, 87%, 60%)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "hsl(198, 99%, 37%)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "textDecorationLine": "line-through"
            }
          },
          {
            "types": [
              "inserted"
            ],
            "style": {
              "textDecorationLine": "underline"
            }
          },
          {
            "types": [
              "italic"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "important",
              "bold"
            ],
            "style": {
              "fontWeight": "bold"
            }
          },
          {
            "types": [
              "important"
            ],
            "style": {
              "color": "hsl(230, 8%, 24%)"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "backgroundColor": "hsl(220, 13%, 18%)",
          "color": "hsl(220, 14%, 71%)",
          "textShadow": "0 1px rgba(0, 0, 0, 0.3)"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "cdata"
            ],
            "style": {
              "color": "hsl(220, 10%, 40%)"
            }
          },
          {
            "types": [
              "doctype",
              "punctuation",
              "entity"
            ],
            "style": {
              "color": "hsl(220, 14%, 71%)"
            }
          },
          {
            "types": [
              "attr-name",
              "class-name",
              "maybe-class-name",
              "boolean",
              "constant",
              "number",
              "atrule"
            ],
            "style": {
              "color": "hsl(29, 54%, 61%)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "color": "hsl(286, 60%, 67%)"
            }
          },
          {
            "types": [
              "property",
              "tag",
              "symbol",
              "deleted",
              "important"
            ],
            "style": {
              "color": "hsl(355, 65%, 65%)"
            }
          },
          {
            "types": [
              "selector",
              "string",
              "char",
              "builtin",
              "inserted",
              "regex",
              "attr-value"
            ],
            "style": {
              "color": "hsl(95, 38%, 62%)"
            }
          },
          {
            "types": [
              "variable",
              "operator",
              "function"
            ],
            "style": {
              "color": "hsl(207, 82%, 66%)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "hsl(187, 47%, 55%)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "textDecorationLine": "line-through"
            }
          },
          {
            "types": [
              "inserted"
            ],
            "style": {
              "textDecorationLine": "underline"
            }
          },
          {
            "types": [
              "italic"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "important",
              "bold"
            ],
            "style": {
              "fontWeight": "bold"
            }
          },
          {
            "types": [
              "important"
            ],
            "style": {
              "color": "hsl(220, 14%, 71%)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "blog": {
      "sidebar": {
        "groupByYear": true
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "future": {
    "experimental_storage": {
      "type": "localStorage",
      "namespace": false
    },
    "experimental_router": "browser"
  },
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    },
    "anchors": {
      "maintainCase": false
    }
  }
};
