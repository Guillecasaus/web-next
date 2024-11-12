import Image from "next/image";
import Colores from "./Componentes/Colores";
import Medidas from "./Componentes/Medidas";
import Estados from "./Componentes/Estados";
import PseudoClases from "./Componentes/PseudoClases";
import Responsive from "./Componentes/Responsive";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Colores />
      <Medidas />
      <Estados />
      <PseudoClases />
      <Responsive />
    </div>
  );
}
