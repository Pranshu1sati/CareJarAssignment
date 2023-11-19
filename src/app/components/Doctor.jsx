import Image from "next/image";

const articles = [
    {
      id: 1,
      title: 'Dentist',
      desc: "Teething troubles? Schedule a dental checkup",
      imageUrl: 'https://www.westcoastsurat.in/blog/big_img/blog4422.jpeg',
    },
    {
      id: 2,
      title: 'Gynecologist/Obstetrician',
      desc: "Explore for women's health, pregnancy and infertility treatments",
      imageUrl: '/demo5x3a.jpg',
    },
    {
        id: 3,
        title: 'Dietitian/Nutrition',
        desc: "Get guidance on eating right, weight management ands sports nutrition",
        imageUrl: '/diet.jpg',
      },
    // Add more article data as needed
  ];
  function Article({ title, desc, imageUrl }) {
    return (
<div className="m-2 max-w-sm bg-no-repeat border border-gray-100 rounded-lg shadow-sm">
     <a href="#">
         <img className="rounded-t-lg max-h-[201.671px] min-w-[382.4px]" src={imageUrl} alt="" />
     </a>
     <div className="p-5">
         <a href="#">
             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
         </a>
         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
     </div>
 </div>
    );
  }

  export default function Doctor() {
    return (
        <>
        {/* <section className="mx-16 my-12 text-left ">
            
            
        </section> */}
        <div className="container my-12 mx-auto px-4 md:px-12">
        <h1 className="text-slate-700 text-4xl -mx-1">Book an appointment for an in-clinic consultation</h1>
        <p className="text-lg font-normal text-gray-500 -mx-1">Find Experienced Doctors across all Specialties</p>
          <div className="container mx-auto py-36 px-8">
            <div className="gird lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Article key={article.id} {...article} />
            ))}
            </div>
          </div>
        </div>
        </>
      );
  }