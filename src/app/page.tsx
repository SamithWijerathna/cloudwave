import { Metadata } from "next";
import HomeOnePage from "./home/page";

export const metadata: Metadata = {
  title: "Cloudwave ®",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
