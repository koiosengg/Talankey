import React, { useEffect } from "react";

const JotFormEmbed = () => {
  useEffect(() => {
    // Load the JotForm script when the component mounts
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize JotForm embed handler after the script is loaded
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-240382619705054']",
          "https://form.jotform.com/"
        );
      }
    };

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id="JotFormIFrame-240382619705054"
      title="Form"
      allowTransparency="true"
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/240382619705054"
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
