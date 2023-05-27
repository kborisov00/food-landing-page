import Image from "next/image";
import { Header } from "@/components";

export default function Home() {
  return (
    <main className="container px-3 py-6 mx-auto">
      <Header />

      <section className="flex mt-16 justify-between items-center">
        <div className="max-w-[50%]">
          <h1 className="text-5xl font-semibold mb-8 leading-tight">
            The Tastiest & <br />
            <span className="font-extrabold">Best Pizza</span> In The <br />
            World
          </h1>

          <p className="mb-8 max-w-lg font-medium text-[#616161]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            laudantium expedita nesciunt deserunt numquam dolore harum
            aspernatur laboriosam ea quae!
          </p>

          <button className="bg-black text-sm text-white px-6 py-4 rounded-full">
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
    </main>
  );
}
