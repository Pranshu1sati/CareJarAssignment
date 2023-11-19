import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Dentist",
    desc: "Teething troubles? Schedule a dental checkup",
    imageUrl: "/cropped-blog4422.jpeg",
  },
  {
    id: 2,
    title: "Gynecologist/Obstetrician",
    desc: "Explore for women's health, pregnancy and infertility treatments",
    imageUrl: "/cropped-demo5x3a.jpg",
  },
  {
    id: 3,
    title: "Dietitian/Nutrition",
    desc: "Get guidance on eating right, weight management ands sports nutrition",
    imageUrl: "/cropped-diet.jpg",
  },
  // Add more article data as needed
];
export default function Grid() {
  return (
    <main className="bg-white container mx-auto py-36 px-8">
        <section className="mb-8">
        <h1 className="text-slate-700 text-4xl -mx-1">Book an appointment for an in-clinic consultation</h1>
        <p class="text-lg font-normal text-gray-500 -mx-1">Find Experienced Doctors across all Specialties</p>
        </section>
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 gap-6 justify-center sm:grid-cols-1">
        {articles.map((card) => (
        <div key={card.id}>
        <Link href={`doctor/${card.id}`} suppressHydrationWarning={true}>
            
          <div className="shadow-sm border-gray-200">
            <img src={card.imageUrl} alt="image" className="rounded-t-lg "/>
            <div className="py-5">
              
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-700 ">
                  {card.title}
                </h5>
              
              <p className="mb-3 font-normal text-gray-700">
                {card.desc}
              </p>
            </div>
          </div>
          </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
