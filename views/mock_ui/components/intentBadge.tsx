import clsx from "clsx";

const intentMap = {
  0: {
    type: "Commercial",
    hover_text: "The user wants to investigate brands or services.",
    color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
  },
  1: {
    type: "Informational",
    hover_text: "The user wants to find an answer to a specific question.",
    color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
  },
  2: {
    type: "Navigational",
    hover_text: "The user wants to find a specific page or site.",
    color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
  },
  3: {
    type: "Transactional",
    hover_text: "The user wants to complete an action (conversion).",
    color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
  },
};

export function IntentBadge({ intent }: { intent: number }) {
  const { color: c, type } = intentMap[intent as keyof typeof intentMap];

  return (
    <div
      className={clsx(
        "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded w-content",
        `bg-[${c.bg}] text-[${c.text}] hover:bg-[${c.hover}]`
      )}
      style={{
        backgroundColor: c.bg,
        color: c.text,
        width: "fit-content",
      }}
    >
      {type}
    </div>
  );
}

export function IntentLetterBadge({ intent }: { intent: number }) {
  const {
    color: c,
    hover_text,
    type,
  } = intentMap[intent as keyof typeof intentMap];
  const className = `bg-[${c.bg}] text-[${c.text}] hover:bg-[${c.hover}]`;

  return (
    <>
      <div
        className={clsx(
          "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded w-content "
        )}
        data-tooltip-target="tooltip-default"
        style={{
          backgroundColor: c.bg,
          color: c.text,
        }}
      >
        {type[0]}
      </div>
    </>
  );
}
