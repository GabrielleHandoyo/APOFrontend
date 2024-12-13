import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar'; // Generic Navbar
import Footer from '../common/Footer'; // Common Footer

function DefaultLayout() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                <Outlet /> {/* Content for other pages */}
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;