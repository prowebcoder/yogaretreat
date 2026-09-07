import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { journal, getPost, formatDate } from "@/lib/data/journal";
import { site } from "@/lib/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journal.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, images: [post.image], publishedTime: post.date },
  };
}

export default async function JournalPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = journal.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Organization", name: site.fullName },
          publisher: { "@type": "Organization", name: site.fullName, url: site.url },
          mainEntityOfPage: `${site.url}/journal/${post.slug}`,
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Journal", path: "/journal" }, { name: post.title, path: `/journal/${post.slug}` }])} />

      <article className="light-hero page-width">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/ <Link href="/journal">Journal</Link></span>
        </nav>
        <p className="kicker">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="article-meta">
          <span>{formatDate(post.date)}</span>
          <span>{post.readingTime} read</span>
        </p>

        <div className="article-hero">
          <Image src={post.image} alt="" fill priority sizes="(max-width: 1220px) 100vw, 1180px" />
        </div>

        <div className="article-body">
          {post.sections.map((section, index) => (
            <section key={section.heading ?? index}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
            </section>
          ))}
        </div>

        <div className="article-foot">
          <div>
            <p className="kicker">Next step</p>
            <p className="muted" style={{ margin: 0 }}>Questions about any of this? We answer them personally.</p>
          </div>
          <Link className="button button-solid" href="/booking">Ask us <span aria-hidden="true">↗</span></Link>
        </div>
      </article>

      <section className="page-width section-pad">
        <div className="section-head">
          <div>
            <p className="kicker">Keep reading</p>
            <h2>More from the journal.</h2>
          </div>
          <Link className="text-link" href="/journal">All articles <span aria-hidden="true">→</span></Link>
        </div>
        <div className="post-grid">
          {more.map((item) => (
            <Link className="post-card" href={`/journal/${item.slug}`} key={item.slug}>
              <div className="post-card-media"><Image src={item.image} alt="" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
              <div className="post-card-body">
                <p className="post-card-meta"><span>{item.category}</span><span>{item.readingTime}</span></p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
