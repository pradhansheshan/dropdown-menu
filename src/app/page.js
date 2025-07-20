import Image from "next/image";
import Menu from "./_component/Menu";
import { Button } from "@/components/ui/button";

export default function Home() {

  // This project has a name AI-Marketplace
  // but this is actually a Menu Dropdown project

  return (
    <div className="relative group inline-block z-50">
      <Button>Menu</Button>
      <div className="absolute top-full hidden group-hover:block">
        <Menu />
      </div>
    </div>
  );
}