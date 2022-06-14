import React from "react";
import { createRoot } from "react-dom/client";
import { LogoComponent,TextComponent, CheckComponent } from "./mainComponent";



const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <LogoComponent />
    <TextComponent />
    <CheckComponent />
  </div>
);

