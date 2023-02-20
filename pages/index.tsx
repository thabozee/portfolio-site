import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Profile from "@/components/profile";
import ProjectPreview from "@/components/project_preview";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout >
      <div className="text-slate-700 flex flex-col gap-4">
        <Header />
        <Profile />
        <div>
          <ProjectPreview />
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
