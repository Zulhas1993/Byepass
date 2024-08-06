"use client"
import Image from "next/image";
import styles from "./page.module.css";
import BannerSection from "@/components/BannerSection/BannerSection"
import ButtonSection from "@/components/ButtonSection/buttonSection";
import FotterComponent from "@/components/FooterSection/footerSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection"

export default function Home() {
 return(
    <div>
     <BannerSection/>
     <FeatureSection/>
     <ButtonSection/>
     <FotterComponent/>
    </div>

 )
}
