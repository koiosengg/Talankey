// JotFormEmbed.jsx
import React, { useEffect } from "react";

const JotFormEmbed = () => {
  useEffect(() => {
    // Load the JotForm script when the component mounts
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-253220779169060']",
          "https://form.jotform.com/"
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id="JotFormIFrame-253220779169060"
      title="Form"
      onLoad={() => window.parent.scrollTo(0, 0)}
      allow="geolocation; microphone; camera; fullscreen; payment"
      allowtransparency="true"
      src="https://form.jotform.com/253220779169060"
      frameBorder="0"
      style={{
        minWidth: "100%",
        maxWidth: "100%",
        height: "539px",
        border: "none",
      }}
      scrolling="no"
    ></iframe>
  );
};

export default JotFormEmbed;
