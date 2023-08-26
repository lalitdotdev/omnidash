import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

// layout for the setup page (the page where the user creates their store) and show modal if the user don't have a store and if they do, redirect them to their store page (dashboard) instead of the setup page

// flow will be from the sign in page to the setup page to the dashboard page
// layout --> Root layout -----> check if the user exists( user is authenticated ) --> if not, redirect to sign in page ------> if user is authenticated then check if there is any store in the prisma db associated with the user if exists then redirect to the dashboard(of first store) ---> if no store is associated then navigate to create store modal

import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
