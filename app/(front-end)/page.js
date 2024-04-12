import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h2 className=" text-4xl ">
        Welcome
      </h2>
      <Link className="my-4 hover:underline" href="/register-supplier">Sell smth!</Link>
    </div>
  );
}