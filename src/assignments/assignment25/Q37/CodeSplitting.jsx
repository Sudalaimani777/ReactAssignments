import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

export const AdminDashboard = lazy(() => import('./AdminDashboard'));

const CodeSplitting = () => (
    <Routes>
        <Route path="/admin" element={
            <Suspense fallback={<div>Loading Admin Panel...</div>}>
                <AdminDashboard />
            </Suspense>
        } />
    </Routes>
);

export default CodeSplitting;