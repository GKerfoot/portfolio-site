import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
const socialLinks = [{
  icon: MailIcon,
  href: 'mailto:gretchen.a.kerfoot.27@dartmouth.edu',
  label: 'Email'
}, {
  icon: GithubIcon,
  href: 'https://github.com/GKerfoot',
  label: 'GitHub'
}, {
  icon: LinkedinIcon,
  href: 'https://www.linkedin.com/in/gretchen-kerfoot-a52653272/',
  label: 'LinkedIn'
}];
export function Footer() {
  return <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-navy/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map(({
            icon: Icon,
            href,
            label
          }) => <a key={label} href={href} aria-label={label} className="text-navy/30 hover:text-accent transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </a>)}
          </div>

          <p className="font-sans text-sm text-navy/30">
            © 2026 Gretchen Kerfoot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}