/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  const [imageController, setImageController] = React.useState(true);
  return (
    <>
      <div className="mainDivHome">
        <Header />
        {imageController ? (
          <div className=" bg-[#f2f2f2] w-full md:flex  ">
            <div className="image lg:order-2">
              <img
                src="p1.avif"
                alt="image-one"
                className="h-[62vh] w-[100vw]"
              />
            </div>
            <div className="innerContent pt-10 p-10 lg:order-1 bg-white lg:bg-[#f2f2f2] ">
              <h2 className="font-extrabold tracking-[2px] text-3xl">
                Microsoft 365
              </h2>
              <p className="font-thin">
                Premium Office apps, extra cloud storage, advanced security, and
                more – all in one convenient subscription
              </p>
              <div className="buttonContent flex mt-6">
                <button className="bg-blue-600 px-4 text-white h-9 rounded-md cursor-pointer">
                  For 1 person
                </button>
                <span className="pl-10 text-blue-500 cursor-pointer">
                  For up to 6 people
                </span>
                <span class="material-symbols-outlined text-blue-500 cursor-pointer">
                  navigate_next
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className=" bg-[#f2f2f2] w-full lg:flex  ">
            <div className="image lg:order-2">
              <img
                src="p2.jpeg"
                alt="image-one"
                className="h-[62vh] w-[100vw]"
              />
            </div>
            <div className="innerContent pt-10 p-10 lg:order-1 bg-white lg:bg-[#f2f2f2] ">
              <h2 className="font-extrabold tracking-[2px] text-3xl">
                Surface Laptop Studio
              </h2>
              <p className="font-thin">
                Flex your creative muscle on the most powerful Surface Laptop.
                Now available with Windows 11.
              </p>
              <div className="buttonContent flex mt-6">
                <button className="bg-blue-600 px-4 text-white h-9 rounded-md cursor-pointer">
                  Shop Now{" "}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="controllerImage flex text-blue-500 justify-center items-center mt-4">
          <span
            class="material-symbols-outlined cursor-pointer text-3xl"
            onClick={() => setImageController(!imageController)}
          >
            chevron_left
          </span>
          {imageController ? (
            <span className="material-symbols-outlined text-3xl">hdr_weak</span>
          ) : (
            <span className="material-symbols-outlined text-3xl">
              hdr_strong
            </span>
          )}

          <span
            class="material-symbols-outlined  cursor-pointer text-3xl"
            onClick={() => setImageController(!imageController)}
          >
            navigate_next
          </span>
        </div>

        <div className="fourIcons text-black justify-center items-center sm:flex space-x-9 space-y-8 mt-9">
          <div></div>
          <div className="w-[80%] items-center flex flex-col">
            <span className="material-symbols-outlined text-6xl">
              grid_view
            </span>
            <p>Choose your Microsoft 365</p>
          </div>

          <div className="w-[80%] items-center flex flex-col">
            <span class="material-symbols-outlined text-6xl">laptop_mac</span>
            <p>Explore Surface devices</p>
          </div>

          <div className="w-[80%] items-center flex flex-col">
            <span class="material-symbols-outlined text-6xl">
              sports_esports
            </span>
            <p>Buy Xbox games</p>
          </div>
          <div className="w-[80%] items-center flex flex-col">
            <span className="material-symbols-outlined text-6xl">
              grid_view
            </span>
            <p>Get Windows 11</p>
          </div>
        </div>

        <div className="fourImagesInRow md:flex md:space-x-7 md:w-[80%] mx-auto mt-11 xs:space-y-12 sm:w-[95%] xs:w-[95%] ">
          <div></div>
          <div className="firstImageAndContent w-[100%] md:items-center flex flex-col">
            <img src="p3.jpeg" alt="image-three" />
            <h2 className="font-semibold tracking-[1px] text-2xl mt-6 mb-1">
              Surface Laptop Go 2
            </h2>
            <p>
              A sleek laptop with a 12.4-inch touchscreen, great typing
              experience and improved HD camera.
            </p>
            <div className="flex justify-start">
              <span className="text-blue-500 cursor-pointer justify-self-stretch mt-5">
                Learn more
              </span>
              <span class="material-symbols-outlined text-blue-500 cursor-pointer mt-5">
                navigate_next
              </span>
            </div>
          </div>
          <div className="secondImageAndContent w-[100%] md:items-center flex flex-col">
            <img src="p4.webp" alt="image-three" />
            <h2 className="font-semibold tracking-[1px] text-2xl mt-6 mb-1">
              Surface Laptop 4
            </h2>
            <p>
              Do it all with a perfect balance of sleek, ultra-thin design,
              multitasking speed and improved performance.
            </p>
            <div className="flex-none flex items-stretch">
              <span className="text-blue-500 cursor-pointer items-stretch mt-5">
                Shop Now
              </span>
              <span class="material-symbols-outlined text-blue-500 cursor-pointer mt-5">
                navigate_next
              </span>
            </div>
          </div>
          <div className="thirdImageAndContent w-[100%] md:items-center flex flex-col ">
            <img src="p5.webp" alt="image-three" />
            <h2 className="font-semibold tracking-[1px]  text-2xl mt-6 mb-1">
              PC Games Pass
            </h2>
            <p>
              Unlock 100+ great games and EA Play, plus get your first month for
              ₹50. Offer available to new subscribers only.
            </p>
            <div className="flex-none justify-start flex">
              <span className="text-blue-500 cursor-pointer mt-5">
                Join Now
              </span>
              <span class="material-symbols-outlined text-blue-500 cursor-pointer mt-5">
                navigate_next
              </span>
            </div>
          </div>

          <div className="fourthImageAndContent w-[100%] md:items-center flex flex-col">
            <img src="p6.jpeg" alt="image-three" />
            <h2 className="font-semibold tracking-[1px]  text-2xl mt-6 mb-1">
              Designed for life today – and tomorrow
            </h2>
            <p>
              The next-generation of games. Your goals. Friends and family.
              Windows 11 was made to bring you closer to everything you love.
            </p>
            <div className="flex-none justify-start flex mt-5">
              <span className="text-blue-500 cursor-pointer">
                See if your PC is ready
              </span>
              <span class="material-symbols-outlined text-blue-500 cursor-pointer ">
                navigate_next
              </span>
            </div>
          </div>
        </div>

        <div className="microsoftEdgePicture mt-10 sm:w-[95%] xs:w-[95%] justify-center items-center mx-auto">
          <img
            src="p7.avif"
            alt=""
            className="sm:h-64 xs:h-64 w-[100vw] object-cover md:h-[56vh] md:w-[80vw] md:mx-auto "
          />
          <div className="contentMsEdge md:bg-[#f0f0f0f0] md:shadow-white md:w-[30%] md:absolute md:-mt-[20%] md:ml-[10%] md:pl-10 ">
            <h2 className="mt-11 text-xl font-semibold tracking-[1px] mb-2 md:text-3xl md:tracking-[2px]">
              Microsoft Edge
            </h2>
            <p className="tracking-[0.2px] ">
              World-class performance with more privacy, more productivity and
              more value while you browse
            </p>
            <button className="bg-blue-900 text-white px-3 py-2 mt-10 mb-10">
              Download now
            </button>
          </div>
        </div>

        <div className="  md:w-[100vw] md:pl-52 -mb-9">
          <h2 className="text-2xl font-semibold tracking-[1px] mt-10 ml-5 md:ml-29 ">
            For Business
          </h2>
        </div>
        <div className="lastImagesRow md:flex md:space-x-7 md:w-[80%] mx-auto xs:space-y-12 sm:w-[95%] xs:w-[95%] ">
          <div></div>
          <div className="firstImageAndContent w-[100%] md:items-center flex flex-col">
            <img src="p8.webp" alt="image-three" />
            <h2 className="font-semibold tracking-[1px] text-2xl mt-6 mb-1">
              Surface Laptop Go 2 for Business
            </h2>
            <p>
              A sleek, portable laptop featuring a great typing experience,
              Windows 11 Pro and professional-grade performance.
            </p>
            <div className="flex justify-start">
              <span className="text-blue-500 cursor-pointer justify-self-stretch mt-5">
                Learn more
              </span>
              <span class="material-symbols-outlined text-blue-500 cursor-pointer mt-5">
                navigate_next
              </span>
            </div>
          </div>
          <div className="secondImageAndContent w-[100%] md:items-center flex flex-col">
            <img src="p9.webp" alt="image-three" />
            <h2 className="font-semibold tracking-[1px] text-2xl mt-6 mb-1">
              Get Microsoft Teams for free
            </h2>
            <p>
              Online meetings, chat and shared cloud storage – all in one place.
            </p>
            <div className="flex-none flex items-stretch">
              <span className="text-blue-500 cursor-pointer items-stretch mt-5">
                Sign up for free
              </span>
              <span class="material-symbols-outlined text-blue-500 cursor-pointer mt-5">
                navigate_next
              </span>
            </div>
          </div>
          <div className="thirdImageAndContent w-[100%] md:items-center flex flex-col ">
            <img src="p10.webp" alt="image-three" />
            <h2 className="font-semibold tracking-[1px]  text-2xl mt-6 mb-1">
              Microsoft 365 for business
            </h2>
            <p>
              Stay a step ahead with powerful apps for productivity, connection
              and security.
            </p>
            <div className="flex-none justify-start flex">
              <span className="text-blue-500 cursor-pointer mt-5">
                Shop Now
              </span>
              <span class="material-symbols-outlined text-blue-500 cursor-pointer mt-5">
                navigate_next
              </span>
            </div>
          </div>

          <div className="fourthImageAndContent w-[100%] md:items-center flex flex-col">
            <img src="p11.jpeg" alt="image-three" />
            <h2 className="font-semibold tracking-[1px]  text-2xl mt-6 mb-1 ">
              Windows 11 for business is here
            </h2>
            <p>
              Designed for hybrid work. Powerful for employees. Consistent for
              IT. Secure for all.
            </p>
            <div className="flex-none justify-start flex mt-5">
              <span className="text-blue-500 cursor-pointer">Learn more</span>
              <span class="material-symbols-outlined text-blue-500 cursor-pointer ">
                navigate_next
              </span>
            </div>
          </div>
        </div>

        {/* follloww */}
        <div className="follow flex space-x-6 ml-2 mt-14 md:ml-56">
          <p>Follow Microsoft</p>
          <div className="fb">
            <img src="fb.png" alt="" className="h-6" />
          </div>
          <div className="twitter">
            <img src="twitter.png" alt="" className="h-6" />
          </div>
          <div className="yt">
            <img src="yt.png" alt="" className="h-7" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
