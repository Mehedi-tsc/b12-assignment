import Banner from "@/components/homepage/Banner";
import CardSection from "@/components/homepage/CardSection";
import State from "@/components/homepage/State";
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";

export default function Home() {
  return (
     <div>
      <Banner></Banner>
      <State></State>
      <CardSection></CardSection>
     </div>
  );
}
