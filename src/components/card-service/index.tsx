import Image from "next/image";
import {
  ComestologiaIcon,
  HairStylingIcon,
  MakeUpIcon,
  ManicureIcon,
} from "../icons";

type Props = {
  titile: string;
  image: string;
  serviceType: "make up" | "hair styling" | "manicure" | "cosmetologia";
};

export function CardService({ titile, image, serviceType }: Props) {
  return (
    <div className="relative">
      <Image src={image} alt="Card Service" width={300} height={300} />
      <div className="flex items-end gap-3 absolute bottom-6 left-6">
        {serviceType === "make up" && <MakeUpIcon />}
        {serviceType === "hair styling" && <HairStylingIcon />}
        {serviceType === "manicure" && <ManicureIcon />}
        {serviceType === "cosmetologia" && <ComestologiaIcon />}
        <p className="text-2xl text-white font-bold font-abhaya">{titile}</p>
      </div>
    </div>
  );
}
