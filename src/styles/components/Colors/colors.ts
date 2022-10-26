export const setColors = (color: string | undefined) => {
  switch (color) {
    case "primary":
      return "var(--color-primary)";

    case "secundary":
      return "var(--color-primary-Focus)";

    case "negative":
      return "var(--color-primary-Negative)";

    case "error":
      return "var(--color-error)";

    case "success":
      return "var(--color-success)";

    case "white":
      return "var(--color-grey-5)";

    case "grey":
      return "var(--color-grey-4)";

    case "grey1":
      return "var(--color-grey-3)";

    case "grey2":
      return "var(--color-grey-2)";

    case "grey3":
      return "var(--color-grey-1)";

    case undefined:
      return "var(--color-grey-1)";
  }
};
