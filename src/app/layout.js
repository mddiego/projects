import "@/app/globals.css";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const metadata = {
  title: "Projects | Diego Lopes",
  description:
    "Experience in software engineering combined with a proven track record of leading cross-functional teams, structuring QA and product management processes, and delivering multidisciplinary projects with measurable impact. As a Technology and Product professional, I connect business objectives with technology solutions, with a strong focus on digital payments and e-commerce. I am an expert in aligning business objectives with scalable technological solutions, driving innovation and operational efficiency. My technical stack includes frontend and backend development, API design, microservices architecture, platform integrations, automated testing, and agile methodologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="flex flex-col h-screen antialiased">
        <Header />
        <main className="xl:w-7xl w-auto flex-1 my-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
