import type { NextPage } from "next";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return (
    <>
      <Link href="/about">
        <a>About</a>
      </Link>
      <a href="/api/auth/login">Login</a>
    </>
  );
};

export default Home;
