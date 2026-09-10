import { Header } from "@/components/layout/Header";
import { getCustomerSession } from "@/lib/auth";
import { Footer } from "@/components/layout/Footer";

export default async function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCustomerSession();
  
  return (
    <>
      <Header user={session.isLoggedIn ? { name: session.name as string } : null} />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}

