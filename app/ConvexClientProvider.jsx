"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

let convex = null;

if (convexUrl) {
  convex = new ConvexReactClient(convexUrl);
}

export default function ConvexClientProvider({ children }) {
  if (!convex) {
    console.warn("Convex URL is missing. Convex not initialized.");
    return <>{children}</>;
  }

  return (
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  );
}
