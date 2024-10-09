import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/WePLi-Document/__docusaurus/debug',
    component: ComponentCreator('/WePLi-Document/__docusaurus/debug', '25f'),
    exact: true
  },
  {
    path: '/WePLi-Document/__docusaurus/debug/config',
    component: ComponentCreator('/WePLi-Document/__docusaurus/debug/config', '472'),
    exact: true
  },
  {
    path: '/WePLi-Document/__docusaurus/debug/content',
    component: ComponentCreator('/WePLi-Document/__docusaurus/debug/content', '6dd'),
    exact: true
  },
  {
    path: '/WePLi-Document/__docusaurus/debug/globalData',
    component: ComponentCreator('/WePLi-Document/__docusaurus/debug/globalData', '44f'),
    exact: true
  },
  {
    path: '/WePLi-Document/__docusaurus/debug/metadata',
    component: ComponentCreator('/WePLi-Document/__docusaurus/debug/metadata', '4d8'),
    exact: true
  },
  {
    path: '/WePLi-Document/__docusaurus/debug/registry',
    component: ComponentCreator('/WePLi-Document/__docusaurus/debug/registry', '99f'),
    exact: true
  },
  {
    path: '/WePLi-Document/__docusaurus/debug/routes',
    component: ComponentCreator('/WePLi-Document/__docusaurus/debug/routes', '226'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog',
    component: ComponentCreator('/WePLi-Document/blog', '740'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/archive',
    component: ComponentCreator('/WePLi-Document/blog/archive', 'cb5'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/authors',
    component: ComponentCreator('/WePLi-Document/blog/authors', '8aa'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/WePLi-Document/blog/authors/all-sebastien-lorber-articles', '2ff'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/authors/yangshun',
    component: ComponentCreator('/WePLi-Document/blog/authors/yangshun', 'f6e'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/first-blog-post',
    component: ComponentCreator('/WePLi-Document/blog/first-blog-post', 'f6f'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/long-blog-post',
    component: ComponentCreator('/WePLi-Document/blog/long-blog-post', '596'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/mdx-blog-post',
    component: ComponentCreator('/WePLi-Document/blog/mdx-blog-post', 'eec'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/tags',
    component: ComponentCreator('/WePLi-Document/blog/tags', 'dc7'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/tags/docusaurus',
    component: ComponentCreator('/WePLi-Document/blog/tags/docusaurus', 'a57'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/tags/facebook',
    component: ComponentCreator('/WePLi-Document/blog/tags/facebook', 'e16'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/tags/hello',
    component: ComponentCreator('/WePLi-Document/blog/tags/hello', '949'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/tags/hola',
    component: ComponentCreator('/WePLi-Document/blog/tags/hola', '984'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/welcome',
    component: ComponentCreator('/WePLi-Document/blog/welcome', '19e'),
    exact: true
  },
  {
    path: '/WePLi-Document/markdown-page',
    component: ComponentCreator('/WePLi-Document/markdown-page', 'd40'),
    exact: true
  },
  {
    path: '/WePLi-Document/docs',
    component: ComponentCreator('/WePLi-Document/docs', '0c2'),
    routes: [
      {
        path: '/WePLi-Document/docs',
        component: ComponentCreator('/WePLi-Document/docs', 'a13'),
        routes: [
          {
            path: '/WePLi-Document/docs',
            component: ComponentCreator('/WePLi-Document/docs', '1d1'),
            routes: [
              {
                path: '/WePLi-Document/docs/category/소프트웨어-요구사항-명세서-srs',
                component: ComponentCreator('/WePLi-Document/docs/category/소프트웨어-요구사항-명세서-srs', 'db7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/service-introduce',
                component: ComponentCreator('/WePLi-Document/docs/service-introduce', '672'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/Softwrare Requirements Specification/appendices',
                component: ComponentCreator('/WePLi-Document/docs/Softwrare Requirements Specification/appendices', '39e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/Softwrare Requirements Specification/interface-requirements',
                component: ComponentCreator('/WePLi-Document/docs/Softwrare Requirements Specification/interface-requirements', 'c41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/Softwrare Requirements Specification/introduction',
                component: ComponentCreator('/WePLi-Document/docs/Softwrare Requirements Specification/introduction', '275'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/Softwrare Requirements Specification/overall-description',
                component: ComponentCreator('/WePLi-Document/docs/Softwrare Requirements Specification/overall-description', 'fed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/Softwrare Requirements Specification/specific-requirements',
                component: ComponentCreator('/WePLi-Document/docs/Softwrare Requirements Specification/specific-requirements', 'c9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/summary',
                component: ComponentCreator('/WePLi-Document/docs/summary', '0d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/tech-stack',
                component: ComponentCreator('/WePLi-Document/docs/tech-stack', 'db0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/WePLi-Document/',
    component: ComponentCreator('/WePLi-Document/', 'bcb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
