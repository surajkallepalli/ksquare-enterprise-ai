"use client";

import dynamic from "next/dynamic";

const KsquareChat = dynamic(() => import("./KsquareChat"), { ssr: false });

export default function ChatWrapper() {
  return <KsquareChat />;
}