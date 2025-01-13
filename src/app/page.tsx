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
      <section className="px-28">
        <div
          className="mt-20 mb-12
         h-[40rem]  bg-[#EEEEEE] relative rounded-xl "
        >
          <main className="absolute right-28 top-36 flex flex-col gap-7 items-end ">
            <div className="flex  items-center pr-12">
              <Image alt="logo" src="/LOGO 1.svg" width={200} height={66} />
              <span className="font-bold text-7xl text-[#03081F] font-sans">
                ing
              </span>
              <p className="font-bold text-7xl text-[#03081F] ml-4 font-sans ">
                is more
              </p>
            </div>
            <div className="bg-[#03081F] rounded-full h-24 w-[55rem] text-right flex items-center justify-end pr-14 ">
              <div className="flex font-medium text-6xl gap-2">
                <p className="text-appOrange border-b-[1px] border-b-appOrange ">
                  Personalized
                </p>
                <span className="text-white">& Instant</span>
              </div>
            </div>
            <p className="text-2xl pr-12">
              Download the Order.uk app for faster ordering
            </p>
            <Image
              className="pr-12"
              alt="play-store"
              src="/app-store-badges-en 1.svg"
              width={400}
              height={60}
            />
          </main>
          <Image
            alt="laughing-logo"
            src="/friends-laughing-using-mobiles 2.png"
            height={500}
            width={610}
            quality={100}
            className="absolute"
          />
        </div>
        <div className="w-full h-[25rem] mb-12 flex gap-10 ">
          <main className="backgroundImage1 pb-10 flex flex-col justify-between pl-[5.5rem]">
            <p className=" font-bold text-lg py-3 px-6 rounded-b-xl bg-white w-fit">
              Earn more with lower fees
            </p>
            <div>
              <p className="font-medium text-lg text-appOrange">
                Signup as a business
              </p>
              <p className="text-white font-bold text-[2.7rem] mb-4">
                Partner with us
              </p>
              <button className="text-white bg-appOrange rounded-full font-medium text-lg py-3 px-12">
                Get started
              </button>
            </div>
          </main>

          <main className="backgroundImage2 pb-10 flex flex-col justify-between pl-[5.5rem]">
            <p className=" font-bold text-lg py-3 px-6 rounded-b-xl bg-white w-fit">
              Avail exclusive perks
            </p>
            <div>
              <p className="font-medium text-lg text-appOrange">
                Signup as a rider
              </p>
              <p className="text-white font-bold text-[2.7rem] mb-4">
                Ride with us
              </p>
              <button className="text-white bg-appOrange rounded-full font-medium text-lg py-3 px-12">
                Get started
              </button>
            </div>
          </main>
        </div>
        <div className="mb-11 p-[6rem] bg-[#D9D9D9] rounded-xl ">
          <main className="flex justify-between items-center ">
            <p className="font-bold text-3xl">Know more about us</p>
            <div className="flex gap-6 items-center ">
              <p className="py-4 px-7 rounded-full border-[1px] border-appOrange text-lg font-bold">
                Frequent Questions
              </p>
              <span>Who we are?</span>
              <span>Partner Program</span>
              <span>Help & Support</span>
            </div>
          </main>
          <main className="mt-16 pl-[5rem] pr-[5rem] pt-[5rem] pb-12 bg-white rounded-lg flex justify-between ">
            <div className="flex flex-col  gap-8 text-lg font-bold  items-center">
              <button className="py-4 px-14 bg-appOrange rounded-full w-fit ">
                How does Order.UK work?
              </button>
              <p>What payment methods are accepted?</p>
              <p>Can I track my order in real-time?</p>
              <p className="text-center">
                Are there any special discounts or <br /> promotions available?
              </p>
              <p>Is Order.UK available in my area?</p>
            </div>
            <div className="mt-3 flex flex-col gap-8  items-center">
              <div className="flex gap-5 ">
                <section className="px-5 py-7 bg-[#D9D9D9] flex flex-col justify-center items-center rounded-lg ">
                  <span className="font-bold text-lg">Place an order</span>
                  <Image
                    src="/order-food 1.png"
                    alt="order-food-logo"
                    height={120}
                    width={120}
                  />
                  <span className="font-medium">
                    Place order through our
                    <br /> website or Mobile app
                  </span>
                </section>
                <section className="px-5 py-7 bg-[#D9D9D9] flex flex-col justify-center items-center rounded-lg">
                  <p className="font-bold text-lg">Track Progress</p>
                  <Image
                    src="/food 1.png"
                    alt="order-food-logo"
                    height={120}
                    width={120}
                  />
                  <p className="font-medium">
                    Your can track your order <br /> status with delivery time
                  </p>
                </section>
                <section className="px-5 py-7 bg-[#D9D9D9] flex flex-col justify-center items-center rounded-lg">
                  <p className="font-bold text-lg">Get your order!</p>
                  <Image
                    src="/order 1.png"
                    alt="order-food-logo"
                    height={120}
                    width={120}
                  />
                  <p className="font-medium">
                    Receive your order at a <br /> lighting fast speed!
                  </p>
                </section>
              </div>
              <p className="text-center">
                Order.UK simplifies the food ordering process. Browse through
                our diverse menu, <br /> select your favorite dishes, and
                proceed to checkout. Your delicious meal will be <br /> on its
                way to your doorstep in no time!
              </p>
            </div>
          </main>
        </div>
        <div className="bg-appOrange rounded-xl flex mb-16">
          <section className="px-24 my-8 border-r-[1px] border-white text-white">
            <p className="font-light text-6xl">546+</p>
            <p className="font-bold text-2xl ">Registered Riders</p>
          </section>
          <section className="px-16 my-8 border-r-[1px] border-white text-white">
            <p className="font-light text-6xl">789,000+</p>
            <p className="font-bold text-2xl ">Orders Delivered</p>
          </section>
          <section className="px-16 my-8 border-r-[1px] border-white text-white">
            <p className="font-light text-6xl">690+</p>
            <p className="font-bold text-2xl ">Restaurants Partnered</p>
          </section>
          <section className="px-20 my-8  text-white">
            <p className="font-light text-6xl">17,457+</p>
            <p className="font-bold text-2xl ">Food items</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
