import Image from "next/image";
import NavBar from "./NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <Link href={"/issues"}>issues</Link>
      <h1>Hello Nextjs</h1>
    </>
  );
}
