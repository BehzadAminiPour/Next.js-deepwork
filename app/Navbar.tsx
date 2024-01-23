"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="bg-primary p-2">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        {status === "loading" && <div>Loading...</div>}
        {status === "authenticated" && (
          <div>
            {session.user!.name}
            <Link href="/api/auth/signout" className="ml-3">
              Sign Out
            </Link>
          </div>
        )}
        {status === "unauthenticated" && (
          <li>
            <Link href="/api/auth/signin">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
