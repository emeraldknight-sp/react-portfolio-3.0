import { InlineWidget } from "react-calendly";
import { Layout } from "../components/Layout";

export function Scheduling() {
  return (
    <Layout>
      <InlineWidget
        url="https://calendly.com/davidalmeidadev/consultoria-web"
        iframeTitle="Agende uma reunião"
        styles={{ height: "700px", minHeight: "1100px" }}
      />
    </Layout>
  );
}
