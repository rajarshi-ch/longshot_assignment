import { IntentBadge } from "./intentBadge";

export default function DetailCards() {
  return (
    <div className="flex flex-col xl:flex-row sm:flex-col xl:space-x-2 xl:space-y-0  sm:space-y-2 sm:space-x-0 space-y-2">
      <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg">
        Volume
        <div className="flex flex-row">
          <div className="text-xl font-bold">480</div>
          <img
            src={`/usa.svg`}
            alt=""
            className="h-3 align-middle self-center ml-2"
          />
        </div>
        <div className="border-b-[1px] w-full my-3 mx-3 border-neutral-200 dark:border-neutral-700" />
        Keyword Difficulty
        <div className="flex flex-row my-2">
          <div className="flex-column">
            <div className="text-xl font-bold">46 %</div>
            <div className="text-sm">Possible</div>
          </div>
          <img
            src={`/usa.svg`}
            alt=""
            className="h-3 align-middle self-center ml-2"
          />
        </div>
        Slightly more competition. You'll need well-structured and unique
        content appropriately optimized for your keywords.",
      </div>
      <div className="flex flex-col w-full h-100% max-h-[500px] items-stretch space-y-2">
        <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg grow">
          Intent
          <IntentBadge intent={0} />
        </div>
        <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg grow">
          Results
          <div className="text-xl font-bold">313M</div>
        </div>
        <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg grow">
          <div className="flex flex-row">
            <div className="flex-column grow">
              CPC
              <div className="text-xl font-bold">$0.12</div>
            </div>
            <div className="flex-column grow">
              Com
              <div className="text-xl font-bold">$0.24</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
