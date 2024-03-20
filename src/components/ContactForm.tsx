import Button from "./Button";
import InputGroup from "./form/InputGroup";

export default function ContactForm() {
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <InputGroup htmlFor="lastname" label="Nom*" name="lastname" type="text" />
        <InputGroup htmlFor="firstname" label="Prénom*" name="firstname" type="text" />
        <InputGroup htmlFor="phone" label="N° de téléphone*" name="phone" type="text" />
        <InputGroup htmlFor="email" label="Adresse email*" name="email" type="text" />
      </div>
      <div className="text-right mt-10">
        <Button>Réserver</Button>
      </div>
    </div>
  );
}
