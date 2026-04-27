import { Outlet } from "react-router-dom";
import githubLightIcon from "@/assets/GitHub-light.svg";

function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-medium">sandeepkumar.dev</h1>
          <img
            src={githubLightIcon}
            alt="GitHub"
            className="h-5 w-5"
          />
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
