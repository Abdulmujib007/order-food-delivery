import Image from "next/image";

const Footer = () => {
    return (
      <footer>
        <div className=" py-[4.5rem] bg-[#D9D9D9] px-24 flex gap-32">
          <section className="flex flex-col gap-4">
            <Image
              alt="footer-appLogo"
              src="/LOGO 2.svg"
              height={60}
              width={260}
            />
            <Image
              alt="playStore-logo"
              src="/app-store-badges-en 1.svg"
              height={53}
              width={360}
            />
            <p className="text-sm">
              Company # 490039-445, Registered with <br /> House of companies.
            </p>
          </section>
          <section className="flex gap-11">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">
                Get Exclusive Deals in your Inbox
              </p>
              <div>
                <div className="h-14 pl-5  rounded-full bg-gray-400 mb-2 w-[28rem] flex justify-between">
                  <input
                    placeholder="youremail@gmail.com"
                    className=" placeholder-black outline-none bg-gray-400"
                    type="text"
                  />
                  <button className="text-white bg-appOrange rounded-full h-14 w-44">
                    Subscribe
                  </button>
                </div>
                <p>we wont spam, read our email policy</p>
              </div>
              <div className="flex gap-[14px]">
                <Image
                  alt="facebook-logo"
                  src="/Facebook.svg"
                  height={40}
                  width={40}
                />
                <Image
                  alt="instagram-logo"
                  src="/Instagram.svg"
                  height={40}
                  width={40}
                />
                <Image
                  alt="tikTok-logo"
                  src="/TikTok.svg"
                  height={40}
                  width={40}
                />
                <Image
                  alt="snapchat-logo"
                  src="/Snapchat.svg"
                  height={40}
                  width={40}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 text-lg">
              <p className="font-bold text-lg">Legal Pages</p>
              <p className="border-b-black border-b-[1px] w-fit">
                Terms and conditions
              </p>
              <p className="border-b-black border-b-[1px] w-fit">Privacy</p>
              <p className="border-b-black border-b-[1px] w-fit">Cookies</p>
              <p className="border-b-black border-b-[1px] w-fit">
                Modern Slavery Statement
              </p>
            </div>
            <div className="flex flex-col gap-3 text-lg">
              <p className="font-bold text-lg">Important Links</p>
              <p className="border-b-black border-b-[1px] w-fit">Get help</p>
              <p className="border-b-black border-b-[1px] w-fit">
                Add your restaurant
              </p>
              <p className="border-b-black border-b-[1px] w-fit">
                Sign up to deliver
              </p>
              <p className="border-b-black border-b-[1px] max-w-full">
                Create a business account
              </p>
            </div>
          </section>
        </div>
        <div className="px-28 py-6 bg-[#03081F] text-white flex justify-between items-center text-base">
          <p className="">Order.uk Copyright 2024, All Rights Reserved.</p>
          <div className="flex gap-10">
            <span>Privacy policy</span>
            <span>Terms</span>
            <span>Pricing</span>
            <span>Do not sell or share your personal information.</span>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;