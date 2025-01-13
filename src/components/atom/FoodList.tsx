import Image from "next/image";

interface CompProps {
    imageSrc:string;
    text1:string;
    text2:string;
}

const FoodList = ({imageSrc,text1,text2}:CompProps) => {
    return (
      <div className="flex flex-col">
        <Image src={imageSrc}  alt="foodImg" width={232} height={203} />
        <div className="bg-[#03081F] py-2 px-5">
          <p className="font-bold text-appOrange text-lg">{text1}</p>
          <p className="text-white">{text2}</p>
        </div>
      </div>
    );
}
 
export default FoodList;