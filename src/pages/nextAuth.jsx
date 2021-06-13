import { Header } from "../components/Header";
import { signIn, signOut, useSession } from "next-auth/client";

export default function NextAuth() {
  const [session, loading] = useSession();
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log({ signOut });

  return (
    <div>
      <Header />
      {session && (
        <>
          Signed in as {session.user.name}
          <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
    </div>
  );
}

