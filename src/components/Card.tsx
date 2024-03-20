interface CardProps {
  imgPath: string;
  title: string;
  children: string;
}
export default function Card({ imgPath, title, children }: CardProps) {
  return (
    <div className="text-center bg-white shadow-lg space-y-5 px-9 py-15 rounded-lg">
      <img src={imgPath} alt="icon" />
      <h1 className="font-bold">{title}</h1>
      <p className="text-lg">{children}</p>
    </div>
  );
}
