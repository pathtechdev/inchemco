"use client";

import * as React from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  React.useEffect(() => {
    // This runs only on the client after hydration
    document.body.classList.add("antialiased", "bg-background", "text-foreground");
  }, []);

  return (
    <div className="antialiased bg-background text-foreground min-h-screen">
      {children}
    </div>
  );
}
