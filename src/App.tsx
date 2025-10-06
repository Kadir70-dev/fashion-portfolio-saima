import { Suspense, lazy, ErrorBoundary } from "react";

// Critical components loaded immediately
import Header from "./components/Header";
import Hero from "./components/Hero";

// Lazy load non-critical components
const AboutFounder = lazy(() => import("./components/AboutFounder"));
const AboutBrand = lazy(() => import("./components/AboutBrand"));
const AjrakFabrics = lazy(() => import("./components/AjrakFabrics"));
const Services = lazy(() => import("./components/Services"));
const Experience = lazy(() => import("./components/Experience"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const BrandValues = lazy(() => import("./components/BrandValues"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-600"></div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center py-12">
    <div className="text-center">
      <p className="text-stone-600 mb-4">Something went wrong loading this section.</p>
      <button 
        onClick={() => window.location.reload()} 
        className="text-stone-800 underline hover:no-underline"
      >
        Refresh page
      </button>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <AboutFounder />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <AboutBrand />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <AjrakFabrics />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <BrandValues />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}