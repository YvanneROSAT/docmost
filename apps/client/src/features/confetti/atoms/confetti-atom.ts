import { atomWithStorage } from "jotai/utils";

// Fonction de démo : désactivée par défaut, mémorisée dans le navigateur.
export const confettiEnabledAtom = atomWithStorage<boolean>(
  "confetti-enabled",
  false,
);
