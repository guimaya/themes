import Image from "next/image";
import { Button } from "./ui/button";

export const HeroOne = () => {
  return (
    <section className="flex justify-center gap-40 items-center pt-20">
      <div>
        <h1 className="font-extrabold tracking-tight text-5xl lg:text-7xl">
          Maya
        </h1>
        <p>Placeholder</p>
        <Button className="mt-6">Acessar aqui</Button>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1697736715755-b9bab56f4a32?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        height={400}
        width={400}
      />
    </section>
  );
};
