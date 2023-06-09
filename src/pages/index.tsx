import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();
  console.log(data);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {!user.isSignedIn && (
          <div>
            <h1> Sign in </h1>
            <SignInButton>
              <button>Sign in with Clerk</button>
            </SignInButton>
          </div>
        )}
        {!!user.isSignedIn && (
          <div>
            <h1> Sign out </h1>
            <SignOutButton>
              <button>Sign out with Clerk</button>
            </SignOutButton>
          </div>
        )}

        <div>
          {data?.map((post) => (
            <div key={post.id}>{post.content}</div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
