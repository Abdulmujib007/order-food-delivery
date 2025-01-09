import Image from "next/image";

interface DeliveryProps {
  text1: string;
  text2: string;
  image1: string;
  image2: string;
}

const OrderDelivery = ({ text1, image1, text2, image2 }: DeliveryProps) => {
  return (
    <>
      <div className="w-full flex justify-end ">
        <Image
          className="mr-8"
          src={image1}
          alt="logo"
          width={25}
          height={102}
        />
      </div>
      <div className="bg-white  p-4 w-[31rem] rounded-xl ">
        <section className="flex justify-between mb-3">
          <Image width={70} height={30} src="/LOGO 1.svg" alt="logo" />
          <span className="text-gray-400">now</span>
        </section>
        <div className="font-semibold text-[1rem] flex gap-2 items-center">
          <span>{text1}</span>
          <Image alt="location" src={image2} width={15} height={10} />
        </div>
        <p className="text-[1.1rem] text-gray-400">{text2} </p>
      </div>
    </>
  );
};

export default OrderDelivery;
