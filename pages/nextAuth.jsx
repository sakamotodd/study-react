import { signIn, signOut, useSession } from "next-auth/client";
import { Header } from "../components/Header";

export default function NextAuth() {
  const [session, loading] = useSession();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />

      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
