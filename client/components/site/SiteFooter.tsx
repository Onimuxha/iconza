import { IconBrandGithub, IconBrandX, IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Icons", href: "/icons" },
    { name: "Documentation", href: "/docs" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/tabler/tabler-icons",
      icon: IconBrandGithub,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/tabler_icons",
      icon: IconBrandX,
    },
    {
      name: "Email",
      href: "mailto:hello@iconflow.com",
      icon: IconMail,
    },
  ],
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <img
                  src="/iconza.avif"
                  alt="iconza"
                />
              </div>
              <span className="text-xl font-bold">IconZa</span>
            </Link>

            <p className="text-sm text-muted-foreground max-w-sm">
              A modern icon library built for developers. Beautiful, consistent, and easy to use icons for your next project.
            </p>

            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-muted transition-colors"
                >
                  <item.icon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Columns */}
          <div className="xl:col-span-2 grid gap-8 md:grid-cols-3">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Product</h3>
              <ul className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tabler/tabler-icons/blob/master/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Stats</h3>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li>5,000+ Icons</li>
                <li>50K+ Downloads</li>
                <li>MIT Licensed</li>
                <li>Open Source</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {year} IconFlow. Built with Tabler Icons. All rights reserved.
            </p>
            <p className="mt-4 text-xs text-muted-foreground sm:mt-0">
              Made with ❤️ for the developer community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
