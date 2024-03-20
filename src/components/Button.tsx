interface ButtonProps {
  children: string;
}
export default function Button({ children }: ButtonProps) {
  return <button className="bg-primary border-none color-white py-5 px-4 rounded-full text-xl">{children}</button>;
}
