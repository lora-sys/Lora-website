"use client";

import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {
    window.location.replace("/en/");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <a href="/en/" className="underline underline-offset-4">
        Go to /en/
      </a>
    </main>
  );
}

