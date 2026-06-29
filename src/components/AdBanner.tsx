"use client";

type AdBannerProps = {
  type?: "banner" | "rectangle" | "sidebar" | "leaderboard";
};

export default function AdBanner({ type = "banner" }: AdBannerProps) {
  const dimensions = {
    banner: "w-full h-24",
    rectangle: "w-full h-64",
    sidebar: "w-full h-96",
    leaderboard: "w-full h-24",
  };

  return (
    <div className={`my-8 ${dimensions[type]} bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9869607415253021"
        data-ad-slot="auto"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script dangerouslySetInnerHTML={{
        __html: "(adsbygoogle = window.adsbygoogle || []).push({});"
      }} />
    </div>
  );
}
