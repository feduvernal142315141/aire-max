import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * Hook que observa el viewport y devuelve true si está por debajo del breakpoint mobile.
 *
 * Implementado con `useSyncExternalStore` — el patrón recomendado por React 19 para
 * suscribirse a fuentes externas (en este caso `matchMedia`). Evita el anti-patrón de
 * `setState` dentro de `useEffect` que React Compiler flaggea.
 */
export function useIsMobile(): boolean {
  const isMobile = React.useSyncExternalStore(
    subscribeToMediaQuery,
    getMobileSnapshot,
    getServerSnapshot,
  )

  return isMobile
}

function subscribeToMediaQuery(callback: () => void): () => void {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
  mql.addEventListener("change", callback)
  return () => mql.removeEventListener("change", callback)
}

function getMobileSnapshot(): boolean {
  return window.innerWidth < MOBILE_BREAKPOINT
}

function getServerSnapshot(): boolean {
  // En SSR no hay viewport — default a desktop (evita CLS en hidratación para la mayoría).
  return false
}
