import { Button } from "@mantine/core";
import { IconConfetti } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";
import { confettiEnabledAtom } from "@/features/confetti/atoms/confetti-atom.ts";
import { launchConfetti } from "@/features/confetti/lib/launch-confetti.ts";

export function ConfettiButton() {
  const { t } = useTranslation();
  const enabled = useAtomValue(confettiEnabledAtom);

  if (!enabled) {
    return null;
  }

  return (
    <Button
      variant="light"
      color="pink"
      size="xs"
      radius="xl"
      leftSection={<IconConfetti size={16} />}
      onClick={launchConfetti}
      aria-label={t("Confetti")}
    >
      {t("Confetti")}
    </Button>
  );
}
