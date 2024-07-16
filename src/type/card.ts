interface BASE_CARD {
  name: string;
  className: string;
  text: string;
}
interface CARD_LI extends BASE_CARD {}

export type { CARD_LI };
