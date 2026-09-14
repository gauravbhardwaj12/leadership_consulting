import { useEffect } from "react";

export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | Nexora Leadership Advisory`
      : "Nexora Leadership Advisory | Global Executive & Management Consulting";
    
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      }
    }
  }, [title, description]);

  return null;
}
