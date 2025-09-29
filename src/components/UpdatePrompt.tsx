import { useRegisterSW } from "virtual:pwa-register/react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X, DownloadCloud } from "lucide-react";
import { useTranslation } from "react-i18next";

function UpdatePrompt() {
  const { t } = useTranslation();
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered:", r);
    },
    onRegisterError(error) {
      console.log("SW registration error:", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <>
      <Transition
        as={Fragment}
        show={offlineReady}
        enter="transform transition duration-300 ease-out"
        enterFrom="translate-y-2 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transform transition duration-200 ease-in"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-2 opacity-0"
      >
        <div className="fixed bottom-4 right-4 w-full max-w-sm p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <DownloadCloud
                className="h-6 w-6 text-green-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {t("updatePrompt.offlineReady")}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className="bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={close}
              >
                <span className="sr-only">{t("updatePrompt.close")}</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Transition>
      <Transition
        as={Fragment}
        show={needRefresh}
        enter="transform transition duration-300 ease-out"
        enterFrom="translate-y-2 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transform transition duration-200 ease-in"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-2 opacity-0"
      >
        <div className="fixed bottom-4 right-4 w-full max-w-sm p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <DownloadCloud
                className="h-6 w-6 text-blue-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {t("updatePrompt.newVersion")}
              </p>
              <div className="mt-4 flex">
                <button
                  onClick={() => updateServiceWorker(true)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
                >
                  {t("updatePrompt.reload")}
                </button>
                <button
                  onClick={close}
                  className="ml-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
                >
                  {t("updatePrompt.close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default UpdatePrompt;
