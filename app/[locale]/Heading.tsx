"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center, dark }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className={`text-2xl font-bold ${dark ? "text-white" : "text-black"}`}>{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;