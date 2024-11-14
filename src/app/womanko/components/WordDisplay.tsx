"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
import backgroundImage from "../../../../public/assets/sacchin.webp";
import { targetInfo } from "../../types";

interface InputProps {
  text: string;
  indexInfo: targetInfo[];
}

const WordDisplay: React.FC<InputProps> = ({ text, indexInfo }) => {
  const [wordParts, setWordParts] = useState<string[] | null>(null);
  const [shownWordIndex, setShownWordIndex] = useState<number>(0);
  const [sacchin, setSacchin] = useState<boolean>(false);

  const splitText = (text: string, indexInfo: targetInfo) => {
    const partsArray = [text.substring(0, indexInfo.startIndex), text.substring(indexInfo.startIndex, indexInfo.endIndex + 1), text.substring(indexInfo.endIndex + 1, text.length)];
    return partsArray;
  };

  useEffect(() => {
    const sortedIndexInfo = indexInfo.sort((a: targetInfo, b: targetInfo) => a.startIndex - b.startIndex); // Sort by startIndex to get words in sentence order
    setWordParts(splitText(text, sortedIndexInfo[0]));
    setShownWordIndex(0);
    const sacchinTaargets = ["sacchinpo", "sacchinko", "sacchinchin"];
    const sacchinFound = sortedIndexInfo.some((item:targetInfo) => sacchinTaargets.includes(item.target)); 
    if (sacchinFound) {
        setSacchin(true);
    } else {
        setSacchin(false);
    }
  }, [text, indexInfo]);

  useEffect(() => {
    setWordParts(splitText(text, indexInfo[shownWordIndex]));
  }, [shownWordIndex]);

  const incrementShownWordIndex = () => {
    setShownWordIndex(shownWordIndex + 1);
  };

  const decrementShownWordIndex = () => {
    setShownWordIndex(shownWordIndex - 1);
  };

  const getFittingFontSize = (word:string) => {
    const wordLength = word.replace(/[^a-zA-Z0-9]/g, "").length;
    if (wordLength >= 9) return "text-6xl";
    else if (wordLength <= 6) return "text-8xl";
    return "text-7xl";
  }

  return (
    <div>
      {indexInfo && wordParts && (
        <p className="text-lg">
          {wordParts[0]}
          <span className="text-red-600">{wordParts[1]}</span>
          {wordParts[2]}
        </p>
      )}
      
      {/* TODO: Fix linting warning */}

{/* {indexInfo && wordParts && (
        <p className="text-lg">
          {splitText(text, indexInfo[shownWordIndex])[0]}
          <span className="text-red-600">{splitText(text, indexInfo[shownWordIndex])[1]}</span>
          {splitText(text, indexInfo[shownWordIndex])[2]}
        </p>
      )} */}

      <div className="flex justify-between mt-1">
        <div>
          {shownWordIndex != 0 && (
            <p
              className="flex items-center gap-1 cursor-pointer hover:text-blue-500"
              onClick={() => decrementShownWordIndex()}
            >
              <FaRegHandPointLeft />
              back
            </p>
          )}
        </div>
        <div>
          {shownWordIndex < indexInfo.length - 1 && (
            <p
              className="flex items-center gap-1 cursor-pointer hover:text-blue-500"
              onClick={() => incrementShownWordIndex()}
            >
              next
              <FaRegHandPointRight />
            </p>
          )}
        </div>
      </div>

      {wordParts && (
        <div className="flex justify-center mt-4">
          <div className="relative">
            <Image
              src={backgroundImage}
              alt="backgroundImage"
              width={600}
              height={300}
            />
            <p
              className={`absolute top-14 left-10 text-red-400 italic ${getFittingFontSize(wordParts[1])}`}
              style={{
                textShadow: "2px 2px 1px rgba(0, 0, 0, 0.3)",
                fontWeight: 900,
              }}
            >
              {wordParts[1].toUpperCase().replace(/[^a-zA-Z0-9]/g, "")}
            </p>
          </div>
        </div>
      )}
      {sacchin && <p className="mt-4 text-red-600">やっと<ruby>私<rt>わたくし</rt></ruby>を見てくれた</p>}
    </div>
  );
};

export default WordDisplay;
