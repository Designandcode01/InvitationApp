"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { strings } from "@/app/utils/strings";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: strings.navHome ?? "Home" },
    { href: "/#rsvp", label: strings.navRsvp ?? "RSVP" },
    { href: "/#details", label: strings.navDetails ?? "Details" },
    
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Heart className="h-5 w-5 text-rose-500" />
          <span>{strings.title}</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/#rsvp">{strings.submitButton}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-1">
              <Link href="/#rsvp" onClick={() => setIsOpen(false)}>
                {strings.submitButton}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}