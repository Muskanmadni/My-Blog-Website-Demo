import Image from "next/image"
import image1 from "@/components/images/image1.png"
import image2 from "@/components/images/image2.png"
import image3 from "@/components/images/image3.png"
import image4 from "@/components/images/image4.png"
import Link from "next/link"
export function Container(){
    return(
        <div className="parentContainer">

        <div className="childContainer bounce-in-right">   {/*first conatiner*/}
            <div className="imageContainer">
                <Image src={image1}alt="image"></Image>   {/*Image*/}
            </div>

            <h1 className="title">Top 10 rare places</h1>  {/*Tittle*/ }
            <p className="description">
             Some features are not just unique but can also seem weird to our human minds.
             <br/>
              Here are the 10 weirdest places across the world that are a must-visit:  {" "}
            </p>
            <button className="readMore"><Link href={"/ReadMore-First"}>Read More</Link></button>
        </div>

        <div className="childContainer bounce-in-right">  {/*second conatiner*/}
        <div className="imageContainer">
            <Image src={image2} alt="image2"></Image>
        </div>

        <h1 className="title">success Story : BTS</h1>
        <p className="description">
        BTS, also known as the Bangtan Boys, is a South Korean boy band that has taken the world by storm. The group formed in 2013 
        <br/>
        and has since become one of the most successful and popular music acts in the world.{" "}
        </p>
        <button className="readMore"><Link href={"/ReadMore-Second"}>Read More</Link></button>
        </div>

        <div className="childContainer bounce-in-right">  {/*third conatiner*/}
        <div className="imageContainer">
            <Image src={image4} alt="image2"></Image>
        </div>

        <h1 className="title">Animals That Are No Longer Extinct</h1>
        <p className="description">
        However, they were rediscovered live and became thought as endangered species in the 1980. 
        <br/>
        How did the last 44 years go for the listed species? {" "}
        </p>
        <button className="readMore"><Link href={"/ReadMore-Third"}>Read More</Link></button>
        </div>

        <div className="childContainer bounce-in-right"> {/*fourth conatiner*/}
        <div className="imageContainer">
            <Image src={image3} alt="image3"></Image>
        </div>

        <h1 className="title">how many calrious you should eat </h1>
        <p className="description">
        The amount of food we consume daily has a significant impact on bodily function.
        <br/>
         Most adults need a minimum of 2000 calories to sustain metabolism, muscle{" "}
        </p>
        <button className="readMore"><Link href={"/ReadMore-Fourth"}></Link>Read More</button>
        </div>

        </div>
    )
}