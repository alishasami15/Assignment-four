

import Image from "next/image"
export default function Footer(){
    return(
        <>
        <div className="footer-main">
            <div className="icons">
           
                
              <Image src="/fb.png" width={20} height={20} alt="icons"></Image> 
              <Image src="/insta.png" width={20} height={20} alt="icons"></Image>
              <Image src="/twitter.png" width={20} height={20} alt="icons"></Image> 
              <Image src="/Linkedin.png" width={20} height={20} alt="icons"></Image> 

            </div>
            
                <p className="f-para">Copyright ©2020 All rights reserved </p>
            

        </div>
        </>
    );
}