import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import mobile from "@/public/images/xia poco x5.jpg";
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="p-2">
      <h1>
        Hello,
        {session ? (
          session && <span>{session.user!.name}</span>
        ) : (
          <span> There</span>
        )}{" "}
      </h1>
      <div className="my-2">
        <Link href="/users" className="text-blue-600 underline">
          Users
        </Link>
      </div>
      <div>
        <Link href="/upload" className="text-primary underline">
          Upload
        </Link>
      </div>
      <div className="my-2">
        <Link href="/api/products" className="text-primary underline">
          API products
        </Link>
      </div>
      <div className="my-2">
        <Link href="/api/users" className="text-primary underline">
          API users
        </Link>
      </div>
      <ProductCard />
      <Image src={mobile}  alt="image" />
    </main>
  );
}
