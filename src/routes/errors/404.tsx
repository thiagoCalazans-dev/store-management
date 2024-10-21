import { Link } from "react-router-dom";

export function Error404() {
  return (
    <div className="h-svh flex gap-2 flex-col items-center justify-center">
      This page not exist
      <Link className="underline" to="/dashboard">
        home
      </Link>
    </div>
  );
}
