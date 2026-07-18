"use client";

import { useEffect } from "react";

/**
 * Desencoraja cópia do conteúdo: bloqueia menu de contexto (botão direito),
 * cópia/recorte e arrasto. É um dissuasor de UX, não uma medida de segurança —
 * qualquer pessoa com DevTools ou "ver código-fonte" ainda acessa o HTML.
 */
export function ContentGuard() {
  useEffect(() => {
    const block = (event: Event) => event.preventDefault();

    document.addEventListener("contextmenu", block);
    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    document.addEventListener("dragstart", block);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("copy", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);

  return null;
}
