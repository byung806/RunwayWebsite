import React from 'react';
import Header from '../components/header';

export default function NoPage() {
    return (
        <div>
            <Header />
            <h1>Error</h1>
            <p>Page not found.</p>
        </div>
    );
}
