import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1 className="text-4xl text-center ">Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Link href="/users/new" className="btn btn-secondary">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
      <Link className="underline text-purple-600" href="/">
        Back Home
      </Link>
    </div>
  );
};

export default UserPage;
