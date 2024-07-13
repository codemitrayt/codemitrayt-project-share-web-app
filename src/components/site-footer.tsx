"use client";
import siteConfig from "@/configs/site-config";

const SiteFooter = () => {
  return (
    <footer className="md:px-8 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 h-16 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            @rushi_mungse
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
