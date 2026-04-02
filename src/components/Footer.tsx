const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="container mx-auto px-6 text-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Kennedy. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
