import { FunctionComponent } from "react";

interface IProps {
  percentage: number;
}

const ProgressBar: FunctionComponent<IProps> = ({ percentage }: IProps) => {
  return (
    <div className="myProgress">
      <div className="title text-red">
        <span aria-hidden="true">{percentage}%</span>
        {percentage}%<span aria-hidden="true">{percentage}%</span>
      </div>

      <div className="myBar bg-green" style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
