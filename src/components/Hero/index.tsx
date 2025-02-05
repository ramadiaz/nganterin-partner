import { Button } from "@nextui-org/react";
import { FaPhoenixFramework } from "react-icons/fa";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="px-2">
        <div className="py-32">
          <div className="max-w-4xl mx-auto space-y-5">
            <h1 className="text-center text-3xl sm:text-5xl font-semibold text-sky-700">
              Grow Your Business <br /> with Seamless Hotel & Flight
              Reservations.
            </h1>
            <p className="text-center opacity-80 text-sm sm:text-medium">
              Partner with Nganterin to effortlessly connect your business to a
              vast network of travelers, leveraging our powerful reservation
              system and seamless integration tools.
            </p>
            <div className="flex flex-row w-max mx-auto gap-4 items-center justify-center">
              <Button
                radius="full"
                size="lg"
                variant="flat"
                as={Link}
                href="/auth/register"
                className="text-white bg-gradient-to-r from-sky-500 to-sky-700 shadow-lg shadow-sky-700/30"
              >
                Partner Now <FaPhoenixFramework size={22} color="#fff" />
              </Button>
              <Button
                radius="full"
                size="lg"
                variant="bordered"
                className="border-sky-600 text-sky-600"
                as={Link}
                href="https://nganterin.web.id"
                target="_blank"
              >
                Visit Nganterin
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
};
