import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import { Posts } from "../components/posts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Posts />
    </div>
  );
}
