import FoodList from "@/components/atom/FoodList";
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
      <section className="mt-12 px-28">
        <div className="flex justify-between items-center mb-12 ">
          <p className="font-bold text-3xl">
            Up to -40% 🎊 Order.uk exclusive deals
          </p>
          <div className="flex gap-28 items-center">
            <span>Vegan</span>
            <span>Sushi</span>
            <p className="py-4 px-7 border-[1px] border-appOrange text-appOrange rounded-full ">
              Pizza & Fast food
            </p>
            <span>others</span>
          </div>
        </div>
        <div className="flex gap-5">
          <Image alt="image10" width={385} height={325} src="/Group 10.png" />
          <Image alt="image11" width={385} height={325} src="/Group 11.png" />
          <Image alt="image12" width={385} height={325} src="/Group 12.png" />
        </div>
        <div className="mt-14 mb-14">
          <p className="font-bold text-3xl  mb-12">
            Order.uk Popular Categories 🤩
          </p>
          <section className="flex gap-5">
            <FoodList
              imageSrc="/Rectangle 13.png"
              text1="Burgers & Fast food"
              text2="21 Restaurants"
            />
            <FoodList
              imageSrc="/Rectangle 15.png"
              text1="Salads"
              text2="32 Restaurants"
            />
            <FoodList
              imageSrc="/Rectangle 17.png"
              text1="Pasta & Casuals"
              text2="4 Restaurants"
            />
            <FoodList
              imageSrc="/Rectangle 19.png"
              text1="Pizza"
              text2="32 Restaurants"
            />
            <FoodList
              imageSrc="/Rectangle 21.png"
              text1="Breakfast"
              text2="4 Restaurants"
            />
            <FoodList
              imageSrc="/Rectangle 23.png"
              text1="Soups"
              text2="32 Restaurants"
            />
          </section>
        </div>
        <div className="mb-11">
          <p className="font-bold text-3xl mb-12">Popular Restaurants</p>
          <section className="flex gap-5">
            <Image
              alt="food-company"
              src="/Group 16.png"
              width={185}
              height={266}
            />
            <Image
              alt="food-company"
              src="/Group 17.png"
              width={185}
              height={266}
            />
            <Image
              alt="food-company"
              src="/Group 18.png"
              width={185}
              height={266}
            />
            <Image
              alt="food-company"
              src="/Group 19.png"
              width={185}
              height={266}
            />
            <Image
              alt="food-company"
              src="/Group 20.png"
              width={185}
              height={266}
            />
            <Image
              alt="food-company"
              src="/Group 21.png"
              width={185}
              height={266}
            />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
