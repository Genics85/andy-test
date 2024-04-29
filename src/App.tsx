import { useState } from "react";

function App() {
  const [swap, setSwap] = useState<boolean>(false);
  const [wallet, setWallet] = useState<boolean>(false);

  const handleOnClick = () => {
    if (wallet) {
      setSwap(true);
      return;
    }
    setWallet(true);
  };

  return (
    <div className=" text-gray-600 font-semibold w-screen h-screen gap-10  flex items-center justify-center">
      <div className=" p-10 w-[500px] h-[400px] border-[3px] rounded-md border-gray-500">
        <div className={`${swap ? "hidden" : "flex"} justify-between w-full `}>
          <div className="flex flex-col gap-5 items-center">
            <p>Token Name</p>
            <div className="items flex flex-col gap-4">
              <p>Dogwhif</p>
              <p>Dogwhif</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <p>Amount</p>
            <div className="items flex flex-col gap-4">
              <p>1.4M</p>
              <p>1.4M</p>
            </div>
          </div>
        </div>
        <div
          className={`${
            swap == true ? "flex" : "hidden"
          } items-center justify-center h-full w-full`}
        >
          <p>All Shitcoins Swapped Successfuly</p>
        </div>
      </div>
      <button
        onClick={handleOnClick}
        className={` px-8 font-semibold py-6 border-[3px] rounded-md border-gray-500`}
      >
        {wallet ? "Swap All Coins" : "Connect Wallet"}
      </button>
    </div>
  );
}

export default App;
