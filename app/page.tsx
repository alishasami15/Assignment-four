
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-main">
            <div className="text">
              <h1 className="heading">Hi, I am John,Creative Technologist</h1>
              <p className="paragrah">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet.</p>
              <button className="button">Download Resume</button>
            </div>
            <div>
              <div>
                <Image src="/image.png" width={200} height={200} alt="person"></Image>

              </div>
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
