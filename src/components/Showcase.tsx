import React from "react";

type Img = { src: string; width: number; height: number; alt: string };

/** Tela web numa moldura de navegador, com a tela do app sobreposta no canto. */
const Showcase: React.FC<{ desktop: Img; mobile?: Img; host?: string; eager?: boolean }> = ({
  desktop,
  mobile,
  host,
  eager = false,
}) => (
  <div className="relative pb-[8%] sm:pr-[6%]">
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-ink/[0.06]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        {host && (
          <span className="mx-auto rounded-full bg-paper px-4 py-1 text-xs text-graphite">{host}</span>
        )}
      </div>
      <img
        src={desktop.src}
        alt={desktop.alt}
        width={desktop.width}
        height={desktop.height}
        loading={eager ? "eager" : "lazy"}
        className="w-full"
      />
    </div>

    {mobile && (
      <div className="absolute right-0 bottom-0 w-[26%] max-w-[230px] overflow-hidden rounded-[1.6rem] border-[5px] border-ink bg-ink shadow-2xl shadow-ink/25 sm:w-[22%]">
        <img
          src={mobile.src}
          alt={mobile.alt}
          width={mobile.width}
          height={mobile.height}
          loading={eager ? "eager" : "lazy"}
          className="w-full rounded-[1.2rem]"
        />
      </div>
    )}
  </div>
);

export default Showcase;
