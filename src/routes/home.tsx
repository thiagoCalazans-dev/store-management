import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="h-svh flex gap-2 flex-col items-center justify-center">
      <h1 className="text-4xl font-bolds">Welcome to your Store Management</h1>
      <span>It has never been easier to run your own business</span>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/register">Register</Link>
        </Button>
      </div>
    </div>
  );
}
