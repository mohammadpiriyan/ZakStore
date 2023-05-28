import React, { ReactNode } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-9/12 px-4">
        <AdminNavbar />
        {children}
      </div>

      <AdminSidebar />
    </div>
  );
};

export default AdminLayout;
