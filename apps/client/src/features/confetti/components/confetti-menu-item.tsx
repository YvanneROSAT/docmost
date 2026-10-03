import { Menu, Switch } from "@mantine/core";
import { IconConfetti } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { confettiEnabledAtom } from "@/features/confetti/atoms/confetti-atom.ts";

// Interrupteur du menu utilisateur : affiche ou masque le bouton Confettis.
export function ConfettiMenuItem() {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useAtom(confettiEnabledAtom);

  return (
    <Menu.Item
      closeMenuOnClick={false}
      onClick={() => setEnabled(!enabled)}
      leftSection={<IconConfetti size={16} />}
      rightSection={
        <Switch
          size="xs"
          checked={enabled}
          readOnly
          tabIndex={-1}
          style={{ pointerEvents: "none" }}
          aria-hidden
        />
      }
    >
      {t("Confetti mode")}
    </Menu.Item>
  );
}
