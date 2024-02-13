import Link from "next/link";
import Nav from "../components/Nav";
import Head from "next/head";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <Head>
      <title>Home Page</title>
      <meta name="description" content="My SEO React app with Next JS" />
      <meta name="keywords" content="next react seo" />
      <meta author="Mrunal Khodaskar" content="Mrunal Khodaskar"></meta>
    </Head>
    <h2>Hello from Next JS</h2>
    <Link href="/about" legacyBehavior>
      About Pages details
    </Link>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti rerum,
      iusto dolor, doloremque, fugiat iure numquam accusamus maiores eos non
      optio! Sed ipsam ab commodi modi ducimus? Alias, deleniti porro.
    </div>
  </Layout>
);

export default Index;
