interface InputGroupProps {
  htmlFor: string;
  label: string;
  name: string;
  type: string;
}
export default function InputGroup({ htmlFor, label, name, type = "text" }: InputGroupProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor}>{label}</label>
      <input className="rounded-none bg-transparent p-2 input-form" type={type} name={name} id={name} />
    </div>
  );
}
