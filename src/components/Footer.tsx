const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-accent text-lg">&lt;</span>
            <span className="font-semibold">Samarth Shekhar</span>
            <span className="text-accent text-lg">/&gt;</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            Built with ❤️ using React, TypeScript & Tailwind CSS
          </p>
          
          <p className="text-muted-foreground text-xs">
            © 2024 Samarth Shekhar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;