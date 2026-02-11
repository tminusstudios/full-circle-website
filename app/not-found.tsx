import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center">
      <Container>
        <div className="text-center">
          <h1 className="text-hero-mobile md:text-hero text-white mb-6">404</h1>
          <p className="text-h3 text-gray-300 mb-8">PAGE NOT FOUND</p>
          <p className="text-body-lg text-gray-400 mb-12 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="primary" size="lg" href="/">
            RETURN HOME
          </Button>
        </div>
      </Container>
    </div>
  );
}
