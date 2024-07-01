import { InlineWidget } from "react-calendly";
import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";

export function Scheduling() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize(width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      <InlineWidget
        url="https://calendly.com/davidalmeidadev/consultoria-web"
        iframeTitle="Agende uma reunião"
        styles={{
          height:
            screenSize <= 425
              ? "900px"
              : screenSize <= 768
                ? "1050px"
                : screenSize <= 1024
                  ? "1075px"
                  : "700px",
        }}
      />
    </Layout>
  );
}
