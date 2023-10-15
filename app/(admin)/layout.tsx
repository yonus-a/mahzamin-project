"use client";

import ErrorProvider from "@components/errorProvider";
import AdminHeader from "@components/admin-header";

interface Props {
  children: React.ReactNode;
}

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
