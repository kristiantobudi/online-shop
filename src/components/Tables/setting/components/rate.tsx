import { ChevronDown } from "../../../../../public/assets/svg/chevronDown";
import { ChevronUp } from "../../../../../public/assets/svg/chevronUp";

interface RateProps {
  isIncrement: boolean;
  rate: string;
}

const styles = {
  rate: `rate flex item-center`,
  red: `ml-2 text-[#EA3943]`,
  green: `ml-2 text-[#17C784]`,
}

export const Rate: React.FC<RateProps> = ({ isIncrement, rate }) => {
  return (
    <div className={styles.rate}>
      {isIncrement ? <ChevronUp fill="#17C784" /> : <ChevronDown fill="#EA3943" />}
      <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
    </div>
  );
};