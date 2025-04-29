import { Minus, Plus } from "lucide-react";

type QuantitySelectorProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};
export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center max-[400px]:justify-center max-md:mt-3">
      <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all">
        <button
          onClick={onDecrease}
          className="group px-2 py-2 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 focus:outline-none"
        >
          <Minus className="w-4 h-3 text-gray-700 group-hover:text-black transition-all" />
        </button>
        <input
          readOnly
          type="text"
          value={quantity}
          className="w-[70px] text-center py-1 text-lg font-semibold bg-transparent text-gray-900 border-x border-gray-200 outline-none"
        />
        <button
          onClick={onIncrease}
          className="group px-2 py-2 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 focus:outline-none"
        >
          <Plus className="w-4 h-3 text-gray-700 group-hover:text-black transition-all" />
        </button>
      </div>
    </div>
  );
}
