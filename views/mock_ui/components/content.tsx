import HelpFab from "./helpFab";

type IContentProps = {
  onSidebarHide: Function;
};

export default function Content({ onSidebarHide }: IContentProps) {
  return (
    <div className="flex w-full bg-slate-50 dark:bg-neutral-800">
      <HelpFab />
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
    </div>
  );
}
