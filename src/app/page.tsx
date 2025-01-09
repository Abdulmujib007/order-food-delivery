import OrderDelivery from "@/components/atom/OrderDelivery";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mt-8">
      <section className="bg-[#03081F] relative flex justify-between items-center pl-14 pt-11 ">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-white  text-sm">
              Order Restaurant food, takeaway and groceries.
            </p>
            <p className="text-white font-semibold text-5xl mt-2">
              Feast Your Senses, <br />
              <span className="text-appOrange">Fast and Fresh</span>{" "}
            </p>
          </div>
          <div>
            <p className="text-white">
              Enter a postcode to see what we deliver
            </p>
            <div className="w-[30rem] pl-6  bg-white rounded-full flex justify-between items-center mt-2 h-14">
              <input
                placeholder="eg EC4R"
                className="outline-none text-sm"
                type="text"
              />
              <button className="bg-appOrange rounded-full px-16 text-base font-bold  text-white flex h-full items-center">
                search
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image height={400} width={600} alt="background" src="/image 1.png" />
        </div>
        <Image
          alt="person1"
          src="/Untitled-1 1.png"
          height={100}
          width={700}
          className="absolute left-[20rem] bottom-0"
        />
        <Image
          src="/Untitled-2 1.png"
          alt="person2"
          height={341}
          width={420}
          className="absolute bottom-0 right-[32rem]"
        />
        <div className="absolute right-[9.3rem] top-[5.5rem]">
          <OrderDelivery
            image1="/1.png"
            image2="/Location.png"
            text1="We’ve Received your order!"
            text2="Awaiting Restaurant acceptance "
          />
        </div>
        <div className="absolute right-[1.3rem] top-[22rem]">
          <OrderDelivery
            image1="/2.png"
            image2="/Tick Box.svg"
            text1="Order Accepted! "
            text2="Your order will be delivered shortly"
          />
        </div>
        <div className="absolute right-[4.5rem] bottom-[2rem]">
          <OrderDelivery
            image1="/3.png"
            image2="/gift-2-line.svg"
            text1="Your rider's nearby"
            text2="They're almost there-get ready!"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
