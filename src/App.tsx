import Button from "./components/Button";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="">
      <Header />
      <main className="w-full overflow-hidden">
        <section className="mt-6 text-center relative mb-20 p-4 lg:flex lg:items-center lg:px-15 lg:py-0 lg:mb-40">
          <div className="lg:text-left px-10">
            <h1 className="font-medium text-5xl mb-8 ">
              Bienvenue <br /> chez Café Neko
            </h1>
            <h3 className="font-medium text-2xl px-5 lg:px-0 mb-8">L'endroit où le café rencontre les ronronnements </h3>
            <p className="text-lg px-6 mb-8 lg:px-0">
              Bienvenue dans notre univers où chaque tasse de café est accompagné d'une dose d'amour félin.{" "}
            </p>
            <Button>Nous contacter</Button>
          </div>
          <div className="w-full relative mt-12 md:mt-24">
            <img className="w-full z-10" src="../images/cat-hero-section.png" alt="cat" />
            <img className="absolute inset-0 w-full h-full -z-1 scale-115 " src="../images/Frame.svg" alt="background-cat" />
          </div>
        </section>
        <section id="about" className="mt-10 bg-secondary px-8 py-20 lg:flex lg:flex-row-reverse lg:items-center lg:gap-10 lg:px-20">
          <div className="text-center lg:text-left">
            <h1 className=" text-3xl font-medium spx-11 mb-5 md:text-4xl lg:px-0 xl:text-6xl">Qui sommes-nous ?</h1>
            <div className="text-xl space-y-8 mb-10">
              <p>Bienvenue chez Café Neko, l'endroit où le café et les chats se rencontrent pour créer une expérience unique en son genre.</p>
              <p>
                Chez Café Neko, nous sommes passionnés par deux choses : le café de qualité et le bien-être des chats. Fondé par des amoureux des
                félins et des aficionados du café, Café Neko est bien plus qu'un simple café. C'est un refuge pour les amoureux des chats, un havre de
                paix où l'on peut savourer une bonne tasse de café tout en câlinant nos adorables résidents à quatre pattes.{" "}
              </p>
            </div>
          </div>
          <img className="w-full h-full" src="../images/image-about-us.png" alt="cat-coffe-mug" />
        </section>
        <section id="values" className="px-8 py-20">
          <h1 className="text-center text-4xl color-primary font-medium mb-8">Nos Valeurs</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card imgPath="../../icons/coffee-icon.svg" title="Passionné de Café">
              Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience
              gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse.
            </Card>
            <Card imgPath="../../icons/cat-icon.svg" title="Bien-être des Chats">
              Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos
              chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent.
            </Card>
            <Card imgPath="../../icons/plant-icon.svg" title="Engagement Environnemental">
              Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits
              respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des
              fournisseurs à la gestion des déchets.
            </Card>
          </div>
        </section>
        <section id="contact" className="mt-10 bg-secondary px-8 py-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-20 xl:gap-30 xl:px-15 items-center">
          <div className="flex flex-col gap-6 mb-13 text-center xl:text-left">
            <h1 className="text-3xl px-11 xl:text-6xl xl:px-0">Reservez Votre Table !</h1>
            <p className="text-xl font-medium">
              Réservez dès maintenant votre table pour une expérience caféinée inoubliable en compagnie de nos adorables chats. Plongez dans
              l'ambiance apaisante de Café Chatouille et laissez-vous séduire par nos délices caféinés et nos compagnons félins. Réservez dès
              aujourd'hui et préparez-vous à vivre un moment magique de détente et de plaisir.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
