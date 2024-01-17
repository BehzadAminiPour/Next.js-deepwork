import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello, Bezi</h1>
      <Link href="/users" className="text-blue-600 underline">
        Users
      </Link>
      <ProductCard />
    </main>
  );
}
