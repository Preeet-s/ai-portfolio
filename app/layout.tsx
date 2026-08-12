import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preet Sumara | AI Engineer Portfolio",
  description:
    "AI Engineer and Machine Learning Developer specializing in RAG systems, NLP, AutoML, and intelligent document analysis applications.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "RAG",
    "LangChain",
    "FAISS",
    "Streamlit",
    "Flask",
    "NLP",
    "Portfolio",
  ],
  authors: [{ name: "Preet Sumara" }],
  creator: "Preet Sumara",
  openGraph: {
    title: "Preet Sumara | AI Engineer Portfolio",
    description:
      "Portfolio featuring RAG Chatbot, Mini AutoML Explorer, Sentiment Analysis System, and Resume Analyzer.",
    url: "https://your-domain.vercel.app",
    siteName: "Preet Sumara Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preet Sumara AI Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preet Sumara | AI Engineer Portfolio",
    description:
      "RAG, NLP, AutoML, and AI engineering projects built with Python, Streamlit, Flask, and modern web technologies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}