import Link from "next/link";
import Nav from "../components/Nav";
import Head from "next/head";
import Layout from "../components/Layout";
Layout;

const About = () => (
  <Layout>
    <Link href="/" legacyBehavior>
      <span
        style={{ color: "red", borderLeft: "5px solid black", padding: "5px" }}
      >
        Home Page
      </span>
    </Link>

    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti rerum,
      iusto dolor, doloremque, fugiat iure numquam accusamus maiores eos non
      optio! Sed ipsam ab commodi modi ducimus? Alias, deleniti porro.
    </div>

    <style jsx>
      {`
        p {
          color: indigo;
          font-size: 20px;
        }
      `}
    </style>
  </Layout>
);

export default About;
