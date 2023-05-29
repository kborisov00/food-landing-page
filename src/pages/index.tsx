import Image from "next/image";
import { Header } from "@/components";

export default function Home() {
  return (
    <main className="max-w-6xl px-3 py-6 mx-auto overflow-hidden">
      <Header />

      <section className="flex mt-24 justify-between">
        <div className="w-1/2">
          <h1 className="text-5xl font-semibold mb-8 leading-tight text-[#1f1f1f]">
            The Tastiest & <br />
            <span className="font-extrabold">Best Pizza</span> In The <br />
            World
          </h1>

          <p className="mb-8 max-w-lg font-medium text-[#616161]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            laudantium expedita nesciunt deserunt numquam dolore harum
            aspernatur laboriosam ea quae!
          </p>

          <button className="bg-black text-sm text-white px-6 py-4 rounded-full hover:bg-white hover:text-black border border-transparent hover:border-black transition-colors">
            View Menu
          </button>
        </div>

        <div className="-mt-8 relative">
          <Image
            src="/pizza.png"
            alt=""
            width={1095 / 2.5}
            height={1321 / 2.5}
            className="mr-3"
          />

          <svg viewBox="10.6 18 75.5 69.8" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-36 -right-36 -z-10 h-[450px] w-[450px]">
            <path
              d="M80.5,66.5Q69,83,47.5,87Q26,91,15.5,70.5Q5,50,17.5,32.5Q30,15,48,19Q66,23,79,36.5Q92,50,80.5,66.5Z"
              stroke="none"
              stroke-width="0"
              className="fill-primary"
            ></path>
          </svg>
          <path
            d="M80.5,66.5Q69,83,47.5,87Q26,91,15.5,70.5Q5,50,17.5,32.5Q30,15,48,19Q66,23,79,36.5Q92,50,80.5,66.5Z"
            stroke="none"
            stroke-width="0"
            fill="#4F46E5"
          ></path>
        </div>
      </section>

      <section className="flex mt-14 gap-6">
        <div className="bg-[#e1fcc3] flex flex-col items-center p-4 rounded-2xl min-w-[160px] cursor-pointer [&>img]:hover:scale-110">
          <Image
            src="/images/pizza-1.png"
            alt=""
            height={100}
            width={100}
            className="mb-4 h-[100px] w-[100px] transition-transform"
          />
          <p className="font-semibold mb-3">Naga Pizza</p>
          <p className="font-semibold text-black text-opacity-60">$ 43.99</p>
        </div>
        <div className="bg-[#fde1ef] flex flex-col items-center p-4 rounded-2xl min-w-[160px] cursor-pointer [&>img]:hover:scale-110">
          <Image
            src="/images/pizza-2.png"
            alt=""
            height={100}
            width={100}
            className="mb-4 h-[100px] w-[100px] transition-transform"
          />
          <p className="font-semibold mb-3">Bell Choose Pizza</p>
          <p className="font-semibold text-black text-opacity-60">$ 49.99</p>
        </div>
        <div className="bg-[#fde6ce] flex flex-col items-center p-4 rounded-2xl min-w-[160px] cursor-pointer [&>img]:hover:scale-110">
          <Image
            src="/images/pizza-3.png"
            alt=""
            height={100}
            width={100}
            className="mb-4 h-[100px] w-[100px] transition-transform"
          />
          <p className="font-semibold mb-3">Chicken Pizza</p>
          <p className="font-semibold text-black text-opacity-60">$ 45.99</p>
        </div>
        <div className="bg-[#f9fccd] flex flex-col items-center p-4 rounded-2xl min-w-[160px] cursor-pointer [&>img]:hover:scale-110">
          <Image
            src="/images/pizza-4.png"
            alt=""
            height={100}
            width={100}
            className="mb-4 h-[100px] w-[100px] transition-transform"
          />
          <p className="font-semibold mb-3">Special Pizza</p>
          <p className="font-semibold text-black text-opacity-60">$ 59.99</p>
        </div>
      </section>
    </main>
  );
}
