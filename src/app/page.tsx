import Link from "next/link";

import { GlobalFooter } from "@/components/common/global-footer";

export default function Home() {
  return (
    <>
      <main className="container flex min-h-screen items-center justify-center py-8">
        <Link href="/dedication">Dedikasi</Link>
      </main>

      <GlobalFooter />
    </>
  );
}
