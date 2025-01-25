"use client";

import ErrorProvider from "@components/general/errorProvider";
import AdminHeader from "@components/admin/header";

interface Props {
  children: React.ReactNode;
}

export const dynamic = "force-dynamic";

export default function AdminLayout({ children }: Props) {
  return (
    <>
      <ErrorProvider>
        <AdminHeader />
        {children}
      </ErrorProvider>
    </>
  );
}
