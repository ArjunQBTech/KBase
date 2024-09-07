// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Installation",
        href: "/installation",
        items: [
          { title: "Windows", href: "/windows" },
          { title: "Linux", href: "/linux" },
          { title: "MacOS", href: "/macos" },
        ],
      }
    ],
  },
  {
    title: "Internet Computer",
    href: "/icp",
    noLink: true,
    items: [
      { 
        title: "Wallet", 
        href: "/wallet-integration" ,
        items: [
          {title : "Plug Wallet", href: "/plug"},
          {title : "NFID Wallet", href: "/nfid"},
          {title : "Stoic Wallet", href: "/stoic"},
          {title : "Resources", href: "/resources"},
        ]
      },
      { 
        title: "Authentication", 
        href: "/authentication",
        items : [
          {title : "Internet Identity", href: "/internet-identity"},
          {title : "Resources", href: "/resources"},
        ]
      },
      {
        title : "Internal Tools",
        href: "/internal-tools",
        noLink:true,
        items : [
          {title : "NFID Login", href : '/nfid-login'},
          {title : "React Native ICP Auth", href : '/react-native-icp-auth'},
          {title : "Flutter ICP Auth Middleware", href : '/flutter-icp-auth-middleware'},
        ]
      }
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
