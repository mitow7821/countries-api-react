interface Data {
  name: string;
  value: any;
}

interface Props {
  data: Data[];
  className?: string;
}

export default function DataColumn({ data, className }: Props) {
  return (
    <div className={`flex flex-col gap-1 text-sm ${className ?? ""}`}>
      {data.map((row, index) => (
        <div key={index} className="flex gap-1">
          <p className="font-semibold">{row.name}:</p>

          <span>{row.value ?? "-"}</span>
        </div>
      ))}
    </div>
  );
}
