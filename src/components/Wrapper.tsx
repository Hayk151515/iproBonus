import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface WrapperProps {
    children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
    return (
        <>
          <Header />
            <section className="section__block">
              { children }
            </section>
          <Footer />
        </>
    );
}

export default Wrapper;

