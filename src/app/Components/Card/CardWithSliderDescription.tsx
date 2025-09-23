"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CardData {
  thumbnail: string;
  url: string;
  title: string;
  author?: string;
  createdAt?: string;
  description: string;
  role?: string[];
  contribution?: string;
}

interface PrimaryCardProps {
  id: string | number;
  data: CardData;
  isMetaData?: boolean;
}

const CardWithSliderDescription: React.FC<PrimaryCardProps> = ({
  id,
  data,
  isMetaData,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array untuk menampung konten yang bisa di-slide
  const slideContent = [
    { label: "Description", content: data.description },
    ...(data.role ? [{ label: "Role", content: data.role.join(", ") }] : []),
    ...(data.contribution
      ? [{ label: "Contribution", content: data.contribution }]
      : []),
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideContent.length) % slideContent.length
    );
  };
  return (
    <div
      key={id}
      className="w-5/6 md:w-3/5 m-auto rounded overflow-hidden shadow-lg mb-10"
    >
      <Image
        src={data.thumbnail}
        alt="Picture of the author"
        width={800}
        height={900}
        priority
      />
      <div className="px-6 py-5">
        <Link href={data.url} target="_blank" rel="noopener noreferrer">
          <div className="font-bold text-sm md:text-xl mb-2 hover:text-blue-500 cursor-pointer">
            {data.title}
          </div>
        </Link>
        {isMetaData ? (
          <div className="flex justify-between my-5">
            <p className="text-sm font-sans">Oleh {data.author}</p>
            <p className="text-sm font-sans">{data.createdAt}</p>
          </div>
        ) : null}

        {/* Slider Content */}
        <div className="hidden md:block">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-gray-600">
              {slideContent[currentSlide].label}
            </span>
            {slideContent.length > 1 && (
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                  aria-label="Previous slide"
                >
                  Prev
                </button>
                <span className="text-xs text-gray-400">
                  {currentSlide + 1}/{slideContent.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                  aria-label="Next slide"
                >
                  Next
                </button>
              </div>
            )}
          </div>
          <p className="text-gray-700 text-base text-justify transition-all duration-300">
            {slideContent[currentSlide].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardWithSliderDescription;
