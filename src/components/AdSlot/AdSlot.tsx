"use client";

import React, { useEffect } from "react";
import { siteConfig } from "@/config/site";

interface AdSlotProps {
  id?: string;
  type?: "horizontal" | "sidebar" | "inline";
  slotId?: string; // Optional specific AdSense slot ID
}

export default function AdSlot({ id = "default-ad-slot", type = "horizontal", slotId }: AdSlotProps) {
  // Hide completely if disabled
  if (!siteConfig.showAds) return null;

  // Initialize adsbygoogle when the component mounts on the client
  useEffect(() => {
    if (siteConfig.adSensePublisherId) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense push error: ", err);
      }
    }
  }, []);

  // Styles for different ad dimensions
  const adStyles: Record<string, React.CSSProperties> = {
    horizontal: {
      height: "90px",
      maxWidth: "728px",
      margin: "0 auto",
    },
    sidebar: {
      height: "250px",
      width: "300px",
      margin: "0 auto",
    },
    inline: {
      height: "120px",
      width: "100%",
    },
  };

  // Render REAL AdSense tag if publisher ID is configured
  if (siteConfig.adSensePublisherId) {
    return (
      <div style={{ margin: "2.5rem 0", textAlign: "center" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", ...adStyles[type] }}
          data-ad-client={siteConfig.adSensePublisherId}
          data-ad-slot={slotId || "default-slot"}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Otherwise, render the design mockup placeholder
  return (
    <div className="ad-slot-container" id={id}>
      <span className="ad-slot-label">Sponsored Advertisement</span>
      <div className="ad-slot-mockup" style={adStyles[type]}>
        {type === "horizontal" && "AdSense Banner Slot (728 × 90)"}
        {type === "sidebar" && "AdSense Display Slot (300 × 250)"}
        {type === "inline" && "AdSense In-Article Slot (Native Responsive)"}
      </div>
    </div>
  );
}
