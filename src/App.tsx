import { ChangeEvent, useState } from "react";

type Token = {
  id: number;
  name: string;
  amount: string;
};

const tokens: Token[] = [
  { id: 1, name: "Dogwhif", amount: "1.4" },
  { id: 2, name: "Dogwhif", amount: "1.4" },
];

function App() {
  const [swap, setSwap] = useState<boolean>(false);
  const [wallet, setWallet] = useState<boolean>(false);
  const [selected, setSelected] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>();

  const handleOnClick = () => {
    if (wallet) {
      setSwap(true);
      return;
    }
    setWallet(true);
  };

  const handleSelect = (id: number) => {
    setSelectAll(false);
    if (selected.includes(id)) {
      let newSelected = selected.filter((item) => item != id);
      setSelected(newSelected);
      return;
    }
    setSelected([...selected, id]);
  };

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    let isChecked = e.target.checked;

    if (isChecked) {
      let ids = tokens.map((item, _) => item.id);
      setSelectAll(true);
      setSelected(ids);
      return;
    }
    setSelectAll(false);
    setSelected([]);
  };

  return (
    <div className=" text-gray-600 px-4 font-semibold w-screen h-screen gap-10  flex flex-col md:flex-row items-center justify-center">
      <div className=" p-10 w-full  md:w-[500px] h-[400px] border-[3px] rounded-md border-gray-500">
        <div className={`${swap ? "hidden" : "flex"}  justify-between w-full `}>
          <div className="flex flex-col gap-5 items-center">
            <p>Token Name</p>
            <div className="items flex flex-col gap-4">
              <div className="flex gap-3">
                <input
                  onChange={(e) => handleSelectAll(e)}
                  checked={selectAll}
                  className="acc accent-slate-500"
                  type="checkbox"
                />
                <p>All</p>
              </div>
              {tokens.map((token, i) => {
                return (
                  <div key={i} className="flex gap-2">
                    <input
                      onChange={() => handleSelect(token.id)}
                      checked={selected.includes(token.id)}
                      className="acc accent-slate-500"
                      type="checkbox"
                    />
                    <p>{token.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <p>Amount</p>
            <p>_</p>
            <div className="items flex flex-col gap-4">
              {tokens.map((token, i) => {
                return <p key={i}>{token.amount}</p>;
              })}
            </div>
          </div>
        </div>
        <div
          className={`${
            swap == true ? "flex" : "hidden"
          } items-center justify-center h-full w-full`}
        >
          <p>All Shitcoins Swapped Successfuly!</p>
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
