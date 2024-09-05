import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <main>
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </main>
  );
};

export default Layout;
