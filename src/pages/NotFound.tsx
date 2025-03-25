
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-24">
        <Container className="text-center">
          <h1 className="text-8xl font-display font-bold mb-6">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for cannot be found.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="/">Return Home</a>
          </Button>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
