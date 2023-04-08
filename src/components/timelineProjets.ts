import { t } from "i18next";

const itemNumber = 6;

export const data = Array.from({ length: itemNumber }).map((_, i) => ({
    title: t(`timeline.${i + 1}_title`),
    content: t(`timeline.${i + 1}_text`),
}));
