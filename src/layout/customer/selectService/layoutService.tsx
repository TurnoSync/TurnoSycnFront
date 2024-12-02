import React, { ReactNode } from "react";
import "@css/customer/selectService/layoutService.css";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  document.title = title;
  return <main className="main">{children}</main>;
};

export default Layout;
