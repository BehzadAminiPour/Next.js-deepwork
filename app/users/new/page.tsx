"use client";
import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push("/users")}
        className="btn btn-primary m-1"
      >
        Create New User
      </button>
    </div>
  );
};

export default NewUserPage;
