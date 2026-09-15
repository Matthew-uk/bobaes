"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { NAV, type NavItem } from "@/content/nav";
import { SCHOOL } from "@/content/school";

/**
 * Sticky header with animated dropdowns.
 *
 * Desktop: opens on hover AND on keyboard focus, so it is usable without a
 * mouse. Escape closes and returns focus to the trigger.
 * Mobile: a full-screen panel with tap-to-expand accordions.
 *
 * Active state needs `usePathname`, which layouts cannot read (layouts do not
 * re-render on navigation in the App Router) — hence this client component.
 */
export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close everything on navigation. Adjusting state during render when a prop
  // changes is the documented alternative to doing this in an effect — it
  // avoids the extra render pass an effect would cause.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  // Subtle elevation once the page moves.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    // Small grace period so the pointer can cross the gap to the panel.
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, [cancelClose]);

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-sm transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_rgba(15,43,91,0.14),0_8px_24px_-16px_rgba(8,26,58,0.5)]" : "border-b border-navy/10"
      }`}
    >
      {/* Thin contact bar. Click-to-call stays visible at every width; the
          address is dropped on small screens where there is no room for it. */}
      <div className="bg-navy text-white">
        <div className="wrap flex items-center justify-between gap-4 py-2 text-xs">
          <p className="hidden text-white/75 lg:block">{SCHOOL.address.full}</p>
          <a
            href={SCHOOL.phone.href}
            className="mx-auto font-semibold text-white transition-colors hover:text-red-tint lg:mx-0"
          >
            Call {SCHOOL.phone.display}
          </a>
        </div>
      </div>

      <div className="wrap flex items-center justify-between gap-4 py-3">
        <Link href="/" aria-label={`${SCHOOL.name} — home`} className="shrink-0">
          <Logo />
        </Link>

        {/* ---------------- Desktop nav ---------------- */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => {
              const active = isActive(item);
              const open = openMenu === item.label;
              const menuId = `menu-${item.label.toLowerCase()}`;

              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href as Route}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-md px-3 py-2 text-sm font-bold transition-colors duration-200 ${
                        active
                          ? "text-red"
                          : "text-navy hover:bg-navy-tint hover:text-navy-soft"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(item.label);
                  }}
                  onMouseLeave={scheduleClose}
                  onFocus={() => {
                    cancelClose();
                    setOpenMenu(item.label);
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenMenu(null);
                    }
                  }}
                >
                  <Link
                    href={item.href as Route}
                    aria-expanded={open}
                    aria-controls={menuId}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-bold transition-colors duration-200 ${
                      active || open
                        ? "text-red"
                        : "text-navy hover:bg-navy-tint hover:text-navy-soft"
                    }`}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="h-2.5 w-2.5 transition-transform duration-200"
                      style={{ transform: open ? "rotate(180deg)" : undefined }}
                    >
                      <path
                        d="M2 4.5L6 8.5L10 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {/* The one place motion is meant to be noticeable: ~250ms slide + fade. */}
                  <div
                    id={menuId}
                    className="absolute left-1/2 top-full z-50 pt-3"
                    style={{
                      transform: `translateX(-50%) translateY(${open ? "0" : "-8px"})`,
                      opacity: open ? 1 : 0,
                      visibility: open ? "visible" : "hidden",
                      transition:
                        "opacity 250ms cubic-bezier(0.22,1,0.36,1), transform 250ms cubic-bezier(0.22,1,0.36,1), visibility 250ms",
                    }}
                  >
                    <ul className="w-80 overflow-hidden rounded-md border border-navy/10 bg-white p-2 shadow-[0_24px_48px_-24px_rgba(8,26,58,0.45)]">
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href as Route}
                              tabIndex={open ? 0 : -1}
                              aria-current={childActive ? "page" : undefined}
                              className={`block rounded-sm px-4 py-3 transition-colors duration-200 ${
                                childActive
                                  ? "bg-red-tint"
                                  : "hover:bg-navy-tint"
                              }`}
                            >
                              <span
                                className={`block text-sm font-bold ${childActive ? "text-red-deep" : "text-navy"}`}
                              >
                                {child.label}
                              </span>
                              {child.description ? (
                                <span className="mt-0.5 block text-xs leading-snug text-ink-soft">
                                  {child.description}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* The primary CTA is present at every width — the label shortens
              on small screens rather than the button disappearing. */}
          <Link
            href="/admissions"
            className="inline-flex shrink-0 rounded-md bg-red px-4 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-red-deep sm:px-5"
          >
            Apply<span className="hidden sm:inline">&nbsp;Now</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ---------------- Mobile panel ---------------- */}
      <div
        id="mobile-nav"
        hidden={!mobileOpen}
        className="lg:hidden"
      >
        <nav
          aria-label="Main"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-navy/10 bg-paper pb-8"
        >
          <ul className="wrap divide-y divide-navy/10 pt-2">
            {NAV.map((item) => {
              const expanded = mobileSection === item.label;
              const active = isActive(item);

              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href as Route}
                      aria-current={active ? "page" : undefined}
                      className={`block py-4 text-base font-bold ${active ? "text-red" : "text-navy"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSection(expanded ? null : item.label)
                    }
                    aria-expanded={expanded}
                    aria-controls={`m-${item.label}`}
                    className={`flex w-full items-center justify-between py-4 text-left text-base font-bold ${active ? "text-red" : "text-navy"}`}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="h-3 w-3 transition-transform duration-200"
                      style={{
                        transform: expanded ? "rotate(180deg)" : undefined,
                      }}
                    >
                      <path
                        d="M2 4.5L6 8.5L10 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    id={`m-${item.label}`}
                    className="grid transition-[grid-template-rows,opacity] duration-250 ease-out"
                    style={{
                      gridTemplateRows: expanded ? "1fr" : "0fr",
                      opacity: expanded ? 1 : 0,
                    }}
                  >
                    <ul className="overflow-hidden">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href as Route}
                            tabIndex={expanded ? 0 : -1}
                            className={`block border-l-2 py-3 pl-4 text-sm font-semibold ${
                              pathname === child.href
                                ? "border-red text-red"
                                : "border-navy/15 text-ink-soft"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                      <li className="h-3" aria-hidden="true" />
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="wrap mt-6">
            <Link
              href="/admissions"
              className="flex w-full items-center justify-center rounded-md bg-red px-6 py-3.5 text-sm font-bold text-white"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
