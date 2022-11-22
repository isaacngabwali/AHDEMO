import CausesOne from "@/components/CausesOne/CausesOne";
import Charity from "@/components/Charity/Charity";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import HelpingOne from "@/components/HelpingOne/HelpingOne";
import HelpThem from "@/components/HelpThem/HelpThem";
import JoinOne from "@/components/JoinOne/JoinOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";

const Home = () => {
  return (
    <Layout pageTitle="African Hearts">
      <MainSlider />
      <Charity />
      <CausesOne />
      <NewsOne />
      <JoinOne />
      <HelpingOne />
      <GalleryOne />
      <TestimonialOne />
      <HelpThem />
    </Layout>
  );
};

export default Home;
