import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bruno Rafael | AI Engineer · Interactive 3D Portfolio",
  description: "AI engineering, multi-agent systems, MCP, LLMOps and governed automation — BrasilGuard Sistemas."
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
