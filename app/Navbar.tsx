import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-slate-300 p-2">
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
      </ul>
    </nav>
  );
};
