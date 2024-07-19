import { ReactElement } from "react";

interface BASE_CARD {
  type: string;
  className: string;
  text: string;
  params?: string;
}
interface CARD_LI extends BASE_CARD {
  component: ReactElement;
}

export type { BASE_CARD, CARD_LI };
