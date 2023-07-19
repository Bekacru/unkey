import { NavigationBar } from "@/components/Navbar";
import Background from "@/components/landing/background";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative">
      <Background />
      <NavigationBar />
      {children}
    </div>
  );
}
