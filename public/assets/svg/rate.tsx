import { ChevronDown } from "./chevronDown";
import { ChevronUp } from "./chevronUp";

interface RateProps {
  isIncrement: boolean;
  rate: string;
}

export const Rate: React.FC<RateProps> = ({ isIncrement, rate }) => {
  return (
    <div className="rate flex items-center">
      {isIncrement ? <ChevronUp fill="#17C784" /> : <ChevronDown fill="#EA3943" />}
      <p className={isIncrement ? "ml-2 text-[#17C784]" : "ml-2 text-[#EA3943]"}>{rate}</p>
    </div>
  );
};