import { Scene3D } from "@/components/Scene3D";
import { AuthCard } from "@/components/AuthCard";

const Index = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <Scene3D />
      <AuthCard />
    </div>
  );
};

export default Index;