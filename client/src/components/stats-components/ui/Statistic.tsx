type StatisticProps = {
  name: string;
  stat: string;
};

const Statistic: React.FC<StatisticProps> = ({ name, stat }) => {
  return (
    <li className="bg-[#2b2b2b] py-3 px-7 rounded-sm stat-shadow">
      <div className="min-w-32">
        <p className="text-dull">{name}</p>
        <p className="mt-1 text-2xl font-semibold">{stat}</p>
      </div>
    </li>
  );
};

export default Statistic;
