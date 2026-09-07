"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ComponentType, type ElementType, type ReactNode, type Ref } from "react";

type RevealProps = {
  children: ReactNode;
  /** Intrinsic tag name to render as — e.g. "section" or "figure". Ignored when `href` is set. */
  as?: ElementType;
  /** When set, the wrapper is rendered as a next/link. Components cannot be passed in from a server component. */
  href?: string;
  className?: string;
  delay?: number;
} & Record<string, unknown>;

/** Fades content up the first time it enters the viewport. Respects reduced motion via CSS. */
export function Reveal({ children, as: Tag = "div", href, className = "", delay = 0, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const shared = {
    className: `reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
    style: delay ? { transitionDelay: `${delay}ms` } : undefined,
  };

  if (href) {
    return <Link href={href} {...rest} {...shared} ref={ref as Ref<HTMLAnchorElement>}>{children}</Link>;
  }

  // `Tag` is intentionally polymorphic; the cast keeps the spread type-checkable.
  const Component = Tag as unknown as ComponentType<Record<string, unknown>>;
  return <Component {...rest} {...shared} ref={ref}>{children}</Component>;
}
