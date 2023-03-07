import { FirstScreen, Portfolio } from "../../components";
import Layout from "../../Layout/Layout";
import pages from "./Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className={pages.home}>
        <FirstScreen />
        <Portfolio />
      </div>
    </Layout>
  );
};