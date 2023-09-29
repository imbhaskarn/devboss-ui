import Image from "next/image";
import Layout from "@/components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Your Name"
      />
    </Layout>
  );
}
