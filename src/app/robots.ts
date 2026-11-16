import type { MetadataRoute } from "next";

const PRIVATE = [
  "/api/",
  "/admin",
  "/pos",
  "/cart",
  "/checkout",
  "/account",
  "/login",
  "/signup",
  "/forgot-password",
  "/order-success",
  "/order-failed",
];

// Every filter and sort combination renders on the server, so crawlers that walk them
// (GPTBot made ~38K requests in a day) use up the hosting plan. Crawlers that gather
// AI training data are turned away; others may read pages but not filtered listings.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ["GPTBot", "CCBot", "Bytespider", "ClaudeBot", "Google-Extended"], disallow: "/" },
      { userAgent: "*", allow: "/", disallow: ["/*?*", ...PRIVATE] },
    ],
  };
}
