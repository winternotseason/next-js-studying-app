import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  console.log("어디에서 출력될까?");
  return (
    <main>
      <Header />
      <p>
        <Link href="/new">NEW</Link>
      </p>
    </main>
  );
}
