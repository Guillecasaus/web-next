import Image from "next/image";
import Colores from "./Componentes/Colores";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Colores />
    </div>
  );
}
