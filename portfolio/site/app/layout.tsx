import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://brunorafael-portfolio-next3d.vercel.app"),
  title: {
    default: "Bruno Rafael | AI Engineer · Engenharia de Segurança Eletrônica · Portfolio 3D",
    template: "%s | Bruno Rafael"
  },
  description: "Bruno Rafael — Engenheiro de IA, sistemas multi-agentes, MCP, LLMOps e especialista em automação e segurança eletrônica (CFTV, controle de acesso, alarmes, intertravamento). BrasilGuard Sistemas · Rio de Janeiro.",
  keywords: [
    "Bruno Rafael", "AI Engineer", "Engenheiro de IA", "MCP", "LLMOps",
    "multi-agent systems", "BrasilGuard", "segurança eletrônica",
    "CFTV", "controle de acesso", "automação industrial", "automação residencial",
    "Hikvision", "HCSA", "Intelbras", "Rio de Janeiro", "portfólio",
    "Python", "Next.js", "Flutter", "Supabase"
  ],
  authors: [{ name: "Bruno Rafael", url: "https://github.com/brunorafaeliecb-web" }],
  creator: "Bruno Rafael",
  publisher: "BrasilGuard Sistemas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US", "es_ES"],
    url: "https://brunorafael-portfolio-next3d.vercel.app",
    siteName: "Bruno Rafael · AI Engineer",
    title: "Bruno Rafael | AI Engineer · Segurança Eletrônica · Portfolio 3D",
    description: "Engenharia de IA, sistemas multi-agentes e especialista em automação e segurança eletrônica. Certificações Hikvision HCSA + Intelbras. Rio de Janeiro.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bruno Rafael — AI Engineer & Segurança Eletrônica"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Rafael | AI Engineer · Segurança Eletrônica",
    description: "IA, multi-agentes, MCP e automação em segurança eletrônica. BrasilGuard Sistemas.",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://brunorafael-portfolio-next3d.vercel.app",
    languages: {
      "pt-BR": "https://brunorafael-portfolio-next3d.vercel.app",
      "en": "https://brunorafael-portfolio-next3d.vercel.app"
    }
  },
  verification: {
    google: "seu-codigo-google-search-console" // substituir depois
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bruno Rafael",
    jobTitle: "AI Engineer & Especialista em Segurança Eletrônica",
    url: "https://brunorafael-portfolio-next3d.vercel.app",
    sameAs: [
      "https://github.com/brunorafaeliecb-web"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "BR"
    },
    knowsAbout: [
      "Artificial Intelligence", "Multi-agent Systems", "MCP", "LLMOps",
      "CFTV", "Controle de Acesso", "Automação Industrial", "Automação Residencial",
      "Hikvision", "Intelbras", "Python", "Next.js", "Flutter"
    ],
    worksFor: {
      "@type": "Organization",
      name: "BrasilGuard Sistemas"
    }
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
