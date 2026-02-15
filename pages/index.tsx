import Head from "next/head";
import Image from "next/image";
import Board from "@/components/board";
import Score from "@/components/score";
import styles from "@/styles/index.module.css";

const BASE_URL =
  typeof process.env.NEXT_PUBLIC_BASE_URL === "string"
    ? process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "")
    : "https://2048.auraxpro.com";

const SEO = {
  title: "2048 — Play 2048 Game Online | Next.js + TypeScript",
  description:
    "Play 2048 online. Combine tiles to reach 2048 in this free game built with Next.js and TypeScript. Smooth animations, responsive design, no install.",
  keywords:
    "2048, 2048 game, play 2048, 2048 online, puzzle game, browser game, Next.js, TypeScript",
  siteName: "2048",
  ogImage: `${BASE_URL}/og-image.png`,
};

export default function Home() {
  return (
    <div className={styles.twenty48}>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="canonical" href={BASE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:site_name" content={SEO.siteName} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={BASE_URL} />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={SEO.ogImage} />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon16.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: SEO.siteName,
              description: SEO.description,
              url: BASE_URL,
              applicationCategory: "Game",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </Head>
      <header>
        <h1>2048</h1>
        <Score />
      </header>
      <main>
        <Board />
      </main>
      <footer>
        <div className={styles.socials}>
          <a
            href="https://github.com/hiroshi-jp/2048"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="social-github.svg"
              alt="2048 on GitHub"
              width={32}
              height={32}
            />
          </a>
          <a href="https://www.linkedin.com/in/hiroshi-m" target="_blank" rel="noopener">
            <Image
              src="social-linkedin.svg"
              alt="Hiroshi on LinkedIn"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div>Made with by Hiroshi</div>
      </footer>
    </div>
  );
}
