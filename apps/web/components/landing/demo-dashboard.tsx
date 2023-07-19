export const DemoDashboard = () => {
  return (
    <div
      className="ml-auto hidden lg:block rounded-xl shadow-grail shadow-md hover:shadow-lg transition-all ease-in-out duration-200"
      id="container"
    >
      <div className="sm:rounded-t-xl bg-gradient-to-b from-white to-[#FBFBFB] dark:bg-none dark:bg-black/40 dark:highlight-white/10">
        <div className="py-2.5 grid items-center px-4 gap-6">
          <div>
            <div className="bg-slate-100 rounded-md font-medium text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset ring-slate-900/5 mx-auto w-full dark:bg-zinc-800 dark:text-slate-500">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-slate-300 w-3.5 h-3.5 mr-1.5 dark:text-slate-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              unkey.dev
            </div>
          </div>
        </div>
      </div>

      <img src="/images/landing/app.png" alt="" className="rounded-b-xl" />
    </div>
  );
};
