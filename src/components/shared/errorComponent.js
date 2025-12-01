import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useRouteError } from 'react-router-dom';
import objectImg from '../../assets/images/OBJECT.svg'

const ErrorComponent = ({ message = 'Something went wrong!' }) => {
  const error = useRouteError();

  const handleRefresh = useCallback(() => {
    window.location.reload();
  }, []);

  const newUpdatesMessage =
    "We’ve just rolled out some exciting new updates! Please refresh the page to experience the latest improvements.";

  // Default error message
  let errorMessage = error?.message || message;
  const lowerMsg = (errorMessage || "").toLowerCase();

  // Match both possible chunk loading error patterns
  if (
    lowerMsg.startsWith("loading chunk") || // your screenshot case
    lowerMsg.includes("chunkloaderror") ||
    lowerMsg.includes("failed to fetch")
  ) {
    errorMessage = newUpdatesMessage;
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <div className="p-4">
        <div className="mb-7"><img src={objectImg} alt="" className="mx-auto" /></div>
        <p className="text-textWhite font-medium text-xl text-center">{errorMessage}</p>
        <div className="mt-4 w-1/2 !mx-auto">
          <Button
            type="primary"
            className="rounded-5 border-0 bg-primaryColor hover:!bg-buttonActiveBg h-[38px] dark:hover:!bg-buttonActiveBg text-sm font-medium !text-lightDark md:min-w-[100px] disabled:!bg-primaryColor disabled:opacity-50 disabled:cursor-not-allowed disabled:!text-lightDark focus-visible:bg-buttonActiveBg focus-visible:outline-none min-w-full md:mt-0 mt-2.5 hoveranim w-full"
            onClick={handleRefresh}
          >
            Refresh Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
