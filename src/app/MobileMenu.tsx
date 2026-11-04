"use client";

import { useState } from "react";

type NavLink = { href: string; label: string };

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="p-2 text-gray-600"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute left-0 right-0 top-full bg-white shadow-md border-t border-gray-100"
        >
          <ul className="flex flex-col py-2 text-sm font-medium tracking-wide uppercase text-gray-700">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-6 py-4 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
