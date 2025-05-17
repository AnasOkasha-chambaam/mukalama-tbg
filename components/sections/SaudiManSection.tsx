"use client";

import Image from "next/image";

export const SaudiManSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-sidebar-accent-foreground">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
        <Image
          aria-hidden="true"
          src="/assets/images/saudi-man.svg"
          alt="Saudi Man"
          id="saudi-man"
          width={640}
          height={567}
          className="scale-75 px-5"
        />
      </div>
    </section>
  );
};
