// components/Modal.tsx
import React, { useEffect } from "react";
import gamePic from "../../../../public/assets/game-pic.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaRegLightbulb } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Transition } from "@headlessui/react";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Close the modal if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
      const modalElement = document.getElementById("modal");
      if (modalElement && !modalElement.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Cleanup the event listener when modal is closed or component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  //   if (!isOpen) return null;

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div
          id="modal"
          className="bg-blue-100 p-6 rounded-lg shadow-lg w-3xl"
        >
          <div className="flex flex-col items-center gap-4 relative">
            <IoIosCloseCircleOutline
              className="absolute top-0 right-0 text-3xl cursor-pointer hover:text-blue-500"
              onClick={onClose}
            />

            <div className="flex flex-col items-center gap-2">
              <p className="italic">I made this because I love the following game:</p>
              <h1 className="text-2xl font-bold text-center text-gray-700">Woman Communication</h1>
              <p>
                <Link
                  href="https://vndb.org/v47652"
                  className="cursor-pointer text-blue-500 hover:text-blue-900  underline"
                >
                  vndb link
                </Link>{" "}
                |{" "}
                <Link
                  href="https://store.steampowered.com/app/2095090/_/"
                  className="cursor-pointer text-blue-500 hover:text-blue-900  underline"
                >
                  Steam link
                </Link>
              </p>
              <Image
                src={gamePic}
                alt="gamePic"
              />
              <p className="italic">{'"'}It often happens that lewd words are inadvertently made up in conversation, doesn{"'"}t it?{'"'}</p>
            </div>
            <p>
              Based on the main mechanic in the game Woman Communication, <br />
              this website helps you find lewd words in text.
            </p>
            <p>
              Here{"'"}s a few quick examples:
              <br />
              {'"'}My <span className="text-red-600">pen is</span> missing!{'"'}
              <br />
              {'"'}Thes<span className="text-red-600">e rect</span>angles are too small.{'"'}
              <br />
              {'"'}The<span className="text-red-600">se xy</span>lophones are quite <span className="text-red-600">cum</span>bersome to carry.{'"'}
            </p>
            <div className="flex text-blue-500">
              <p>You can also click the</p>
              <FaRegLightbulb className="text-2xl" />
              <p>button for some ideas.</p>
            </div>
            <p>Feel free to dump loads of text or copypastas or song lyrics or Discord chats or whatever.</p>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default HelpModal;
