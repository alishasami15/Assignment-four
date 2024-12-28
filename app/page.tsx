

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  name: string;
  description: string;
  tags: string[];
  image: any; // Include the image field
  content:string[];
}

export default async function Home() {
  let products: Product[] = [];
  try {
    // Fetch data from Sanity
    products = await client.fetch(`
      *[_type == "product"]{
        name,
        description,
        tags,
        image,
        content
      }
    `);
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <>
      {/* Product Section */}
      <div>
        {products.map((product, index) => (
          <div key={index} className="mb-8">
            <h1 className="font-bold text-2xl">{product.name}</h1>
            <p className="text-lg">{product.description}</p>
            <p className="text-sm text-gray-600">{product.tags.join(", ")}</p>
            <p className="text-lg">Content: {product.content}</p>
            {product.image && (
              <img
                src={urlFor(product.image).width(400).url()}
                alt={product.name}
                className="mt-4"
              />
            )}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="hero-section bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text">
              <h1 className="heading text-4xl font-bold mb-4">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="paragraph mb-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet.
              </p>
              <button className="button bg-blue-500 text-white py-2 px-4 rounded">
                Download Resume
              </button>
            </div>
            <div className="mt-6 md:mt-0">
              <Image
                src="/image.png"
                width={200}
                height={200}
                alt="person"
                className="rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
       {/* recent post */}

       <div className="recent-post">
         <div className="container">
           <div className="2box-main">
             <div className="heading-1">
               <h2 className="recent">Recent post</h2>
               <button className="view-all">View All</button>

             </div>
             <div>
               <div>
                 <div className="main-box">
                   <div className="box1">
                     <h2 className="post-heading">Making a design system from scratch</h2>
                     <p className="post-pattern">12 Feb 2020  |  Design , Pattern</p>
                     <p className="post-para">
                       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                     </p>
                   </div>
                   <div className="box1">
                     <h2 className="post-heading">Making a design system from scratch</h2>
                     <p className="post-pattern">12 Feb 2020  |  Design , Pattern</p>
                     <p className="post-para">
                       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                     </p>

                   </div>
                 </div>
               </div>

             </div>


           </div>
         </div>
       </div>
 {/* featured works */}
      {/* 1 */}
      <div className="Dashboards">
    <div className="main1">
      <div className="container">
      
      <h3 className="work">Featured works</h3>
          
        
        <div className="image-main">
       
          <Image src="/Rectangle 30.png " width={400} height={120} alt="fd-image1"></Image>
            <div>
              <div className="main-featured">
          <h2 className="fd-heading">Designing Dashboards</h2>
             <div className="para1">
            <p className="year">2020</p>
            <p className="d-heading">Dashboard</p>
            </div>
            <p className="fd-para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
           
            </div>
            </div>
        
      </div>
      </div>
      </div>
      {/* 2 */}
      <div className="main1">
      <div className="container">
          
        
        <div className="image-main">
       
          <Image src="/Rectangle 32.png " width={400} height={120} alt="fd-image2"></Image>
            <div>
              <div className="main-featured">
          <h2 className="fd-heading">Designing Dashboards</h2>
             <div className="para1">
            <p className="year">2020</p>
            <p className="d-heading">Dashboard</p>
            </div>
            <p className="fd-para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
           
            </div>
            </div>
        
      </div>
      </div>
      </div>
      {/* 3 */}
      <div className="main1">
      <div className="container">
          
        
        <div className="image-main">
       
          <Image src="/Rectangle 34.png " width={400} height={120} alt="fd-image3"></Image>
            <div>
              <div className="main-featured">
          <h2 className="fd-heading">Designing Dashboards</h2>
             <div className="para1">
            <p className="year">2020</p>
            <p className="d-heading">Dashboard</p>
            </div>
            <p className="fd-para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
           
            </div>
            </div>
        
      </div>
      </div>
      </div>
      </div>
    </>
  );
}







   
  

