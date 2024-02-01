import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

export default function SharedLayout() {
    return (
        <div>
            <AppBar />
            <main>
                <Suspense fallback={<div>LOADING</div>}>
                    <Outlet />
                </Suspense>
                <Toaster reverseOrder={false} position="top-right" />
            </main>
        </div>
    );
}