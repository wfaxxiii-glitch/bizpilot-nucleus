import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ThemeProvider } from './context/ThemeContext';

// Simple fallback for lazy loading
const LoadingSpinner = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-white dark:bg-zinc-950">
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Lazy load components with proper named export mapping
const LandingPage = lazy(() => import('@/pages/LandingPage').then(m => ({ default: m.LandingPage })));
const LoginPage = lazy(() => import('@/pages/AuthPages').then(m => ({ default: m.LoginPage })));
const SignupPage = lazy(() => import('@/pages/AuthPages').then(m => ({ default: m.SignupPage })));
const Dashboard = lazy(() => import('@/pages/DashboardPages').then(m => ({ default: m.Dashboard })));
const ContentGenerator = lazy(() => import('@/pages/DashboardPages').then(m => ({ default: m.ContentGenerator })));
const CustomerReply = lazy(() => import('@/pages/DashboardPages').then(m => ({ default: m.CustomerReply })));
const InvoiceGenerator = lazy(() => import('@/pages/FeaturePages').then(m => ({ default: m.InvoiceGenerator })));
const MarketingIdeas = lazy(() => import('@/pages/FeaturePages').then(m => ({ default: m.MarketingIdeas })));
const SettingsPage = lazy(() => import('@/pages/SettingsPage').then(m => ({ default: m.SettingsPage })));
const DashboardLayout = lazy(() => import('@/components/layout/DashboardLayout').then(m => ({ default: m.DashboardLayout })));

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />

            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/features/content" element={<DashboardLayout><ContentGenerator /></DashboardLayout>} />
            <Route path="/features/reply" element={<DashboardLayout><CustomerReply /></DashboardLayout>} />
            <Route path="/features/invoice" element={<DashboardLayout><InvoiceGenerator /></DashboardLayout>} />
            <Route path="/features/marketing" element={<DashboardLayout><MarketingIdeas /></DashboardLayout>} />
            <Route path="/settings" element={<DashboardLayout><SettingsPage /></DashboardLayout>} />

            {/* Redirects */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;