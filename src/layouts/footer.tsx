const Footer = () => {
  return (
    <footer className="w-full py-10 border-t border-border bg-background">
      <div className="container mx-auto px-5 flex flex-col gap-8">
        <div>
          <h4 className="text-lg font-bold tracking-tight">Abiasa</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Thank you for visiting my website.
          </p>
        </div>
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Abiasa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
