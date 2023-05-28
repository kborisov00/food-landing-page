import Image from "next/image";
import { Header } from "@/components";

export default function Home() {
  return (
    <main className="container px-3 py-6 mx-auto">
      <Header />

      <section className="flex mt-24 justify-between items-center">
        <div className="max-w-[50%]">
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

        {/* TODO: add blob */}
        <div className="right-0">
          <Image
            src="/pizza.png"
            alt="pizza"
            height={1096 / 2.6}
            width={1011 / 2.6}
            className="mr-8"
          />
        </div>
      </section>

      <section className="flex mt-16 gap-6">
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
