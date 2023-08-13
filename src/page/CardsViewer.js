import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiArrowGoBackLine } from "react-icons/ri";
import ShareModal from "../components/design/ShareModal";
import { IoDownloadOutline, IoPrintOutline } from "react-icons/io5";
import default_card_Image from "../assets/default_card_image.svg";

const CardsViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  // Extracting parameters from the URL
  const { group_Id, card_Id } = useParams();

  // State to store active group and card information
  const [activeGroup, setActiveGroup] = useState({});
  const [activeCard, setActiveCard] = useState([]);

  // Redux store selectors
  const cards = useSelector((state) => state.cards);
  const theme = useSelector((state) => state.theme);

  const navigate = useNavigate();

  // Function to handle downloading the current view
  const handleDownload = () => {
    const currentView = document.documentElement.outerHTML;

    const blob = new Blob([currentView], { type: "text/html" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "current-view.html";
    a.click();

    URL.revokeObjectURL(url);
  };

  // update the active group when group_Id changes
  useEffect(() => {
    const foundCard = cards.find((item) => item.groups.group_Id === group_Id);
    setActiveGroup(foundCard || {});
  }, [group_Id, card_Id]);

  //  update the active card when activeGroup or card_Id changes
  useEffect(() => {
    const card = activeGroup?.terms?.filter((item) => {
      if (item.card_Id === card_Id) {
        return item;
      }
    });
    const active_Card_Data = undefined || card || {};

    setActiveCard(active_Card_Data);
  }, [activeGroup, card_Id]);

  return (
    <section
      className={`flex flex-col text-slate-600 min-h-screen ${
        theme ? "bg-white text-black" : "bg-slate-900 text-white"
      }`}
    >
      <header className="flex">
        <BiArrowBack
          className="text-3xl mr-6 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">{activeGroup?.groups?.group}</h2>
          <p className="my-2">{activeGroup?.groups?.groupDesc}</p>
        </div>
      </header>

      <main className="mt-6 grid grid-rows-1 md:grid-cols-4">
        <aside className="col-span-1 w-[60vw] md:w-[10rem] xl:w-[17rem] m-5 px-1 py-2 h-fit rounded-md">
          <h2 className="p-2">Flashcards</h2>
          <hr />
          <hr className="mb-2" />
          {activeGroup.terms &&
            activeGroup?.terms.map((card) => (
              <Link
                to={`/flashcards/${group_Id}/${card.card_Id}`}
                key={card.card_Id}
              >
                <p
                  className={`py-2 px-8 text-slate-700 font-medium hover:bg-slate-300 cursor-pointer`}
                >
                  {card.term}
                </p>
              </Link>
            ))}
        </aside>

        {/* Card display */}
        <section className="col-span-3 md:col-span-2 flex flex-col xl:flex-row items-center w-full shadow-2xl rounded-lg">
          <img
            src={
              activeCard[0]?.image !== undefined
                ? activeCard[0].image
                : default_card_Image
            }
            alt="cardimage"
            className="object-contain w-24 xl:w-[20vw] h-full p-6"
          />
          <p className={`w-full p-6 py-10 `}>{activeCard[0]?.term}</p>
          <p className={`w-full p-6 py-10 `}>{activeCard[0]?.defination}</p>
        </section>

        {/*  buttons */}
        <aside className="col-span-1  md:flex flex-col items-center space-y-5">
          <button
            type="button"
            onClick={openModal}
            className="flex items-center py-3 px-4 xl:w-60 space-x-5  rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105"
          >
            <RiArrowGoBackLine className="scale-x-[-1]" />
            <span className=" xl:block">Share</span>
          </button>
          <button
            className="flex items-center py-3 px-4 xl:w-60 space-x-5  rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105"
            onClick={handleDownload}
          >
            <IoDownloadOutline />
            <span className=" xl:block">Download</span>
          </button>
          <button
            className="flex items-center py-3 px-4 xl:w-60 space-x-5  rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105"
            onClick={() => window.print()}
          >
            <IoPrintOutline />
            <span className=" xl:block">Print</span>
          </button>
        </aside>
      </main>
      {/* Share modal */}
      <ShareModal isOpen={isOpen} closeModal={closeModal} />
    </section>
  );
};

export default CardsViewer;
