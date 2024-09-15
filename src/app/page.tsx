import { CardService } from "@/components/card-service";
import { QuoteLeftIcon } from "@/components/icons/quote-left";
import { QuoteRightIcon } from "@/components/icons/quote-right";

export default function Home() {
  return (
    <section className="min-h-screen font-[family-name:var(--font-imperial-script)]">
      <div className="w-full flex items-center justify-center my-10">
        <h1 className="text-[6.25rem] text-red-800 text-center font-imperial">
          Dunails Perfeitas
        </h1>
      </div>
      <main className="bg-hero-background bg-no-repeat bg-cover w-full min-h-[32.5rem] mb-14"></main>
      <div className="container mb-14">
        <div className="space-y-5 max-w-[51.688rem] mx-auto text-center">
          <h2 className="font-abhaya text-red-800 font-bold text-5xl">
            A elegância vem de ser tão bonito por dentro quanto por fora
          </h2>
          <p className="text-zinc-500 text-base">
            Eleifend arcu non lorem justo in tempus purus gravida. Est tortor
            egestas sed feugiat elementum. Viverra nulla amet a ultrices massa
            dui. Tortor est purus morbi vitae arcu suspendisse amet.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-x-6 mt-10">
          <CardService
            image="/images/card-1.jpg"
            titile="Make up"
            serviceType="make up"
          />
          <CardService
            image="/images/card-2.jpg"
            titile="Hair Styling"
            serviceType="hair styling"
          />
          <CardService
            image="/images/card-3.jpg"
            titile="Manicure"
            serviceType="manicure"
          />
          <CardService
            image="/images/card-4.jpg"
            titile="Cosmetologia"
            serviceType="cosmetologia"
          />
        </div>
      </div>

      <section className="w-full mb-32">
        <div className="min-h-[23.25rem] w-full py-10 bg-red-100">
          <div className="flex flex-col gap-y-5 items-center justify-center">
            <h2 className="font-abhaya text-red-800 font-bold text-5xl">
              Depoimentos
            </h2>
            <p className="text-zinc-500 text-base">
              Eleifend arcu non lorem justo in tempus purus gravida tortor
              egestas sed feugiat elementum
            </p>
          </div>
        </div>
        <main className="w-[53.5rem] relative mx-auto -mt-44">
          <div className="absolute -top-10 -left-12">
            <QuoteLeftIcon />
          </div>
          <div className="w-full min-h-[23.25rem] bg-white rounded py-8"></div>
          <div className="absolute -bottom-10 -right-6">
            <QuoteRightIcon />
          </div>
        </main>
      </section>
    </section>
  );
}
