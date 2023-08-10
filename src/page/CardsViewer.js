import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiArrowGoBackLine } from "react-icons/ri";
import ShareModal from "../components/design/ShareModal";
import { IoDownloadOutline, IoPrintOutline } from "react-icons/io5";

const CardsViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const { group_Id, card_Id } = useParams();
  const [activeGroup, setActiveGroup] = useState({});
  const [activeCard, setActiveCard] = useState([]);
  const cards = useSelector((state) => state.cards);
  const navigate = useNavigate();
  console.log(cards);

  const handleDownload = () => {
    const currentView = document.documentElement.outerHTML; // Get the entire HTML of the current view
    const blob = new Blob([currentView], { type: "text/html" }); // Create a Blob with the HTML content
    const url = URL.createObjectURL(blob); // Create a URL for the Blob

    const a = document.createElement("a"); // Create an <a> element
    a.href = url; // Set the URL as the href attribute
    a.download = "current-view.html"; // Set the desired download filename
    a.click(); // Programmatically trigger a click event on the <a> element

    URL.revokeObjectURL(url); // Clean up the URL object
  };

  useEffect(() => {
    const foundCard = cards.find((item) => item.groups.group_Id === group_Id);
    setActiveGroup(foundCard || {});
  }, [group_Id, card_Id]);

  useEffect(() => {
    setActiveCard(
      activeGroup?.terms?.map((item) =>
        item.card_Id === card_Id ? item : null
      )
    );
  }, [activeGroup]);

  return (
    <section className="flex flex-col text-slate-600">
      <header className="flex">
        <BiArrowBack
          className="text-3xl mr-6 cursor-pointer"
          onClick={() => navigate(-1)}
        />

        <div className="flex flex-col">
          <h2 className="text-xl text-black font-bold">
            {activeGroup?.groups?.group}
          </h2>
          <p className="my-2">{activeGroup?.groups?.groupDesc}</p>
        </div>
      </header>
      <main className="mt-6 grid grid-rows-1 md:grid-cols-4">
        <aside className="col-span-1 bg-white w-[60vw] md:w-[10rem] xl:w-[17rem] m-5 px-1 py-2 h-fit rounded-md">
          <h2 className="p-2">Flashcards</h2>
          <hr />

          <hr className="mb-2" />
          {activeGroup.terms &&
            activeGroup?.terms.map((card) => (
              <p
                // key={card.index}

                className={`py-2 px-8 text-slate-700 font-medium hover:bg-slate-100 cursor-pointer ${
                  //
                  "!text-red-500 !font-bold"
                }`}
                // onClick={}
              >
                {card.term}
              </p>
            ))}
        </aside>

        <section className="col-span-3 md:col-span-2 flex flex-col xl:flex-row items-center w-full bg-white shadow-lg rounded-lg">
          <img
            //
            alt="cardimage"
            className="object-contain w-[32rem] xl:w-[20vw] h-full p-6"
          />
          <p className={`w-full p-6 py-10 `}>{/* Description */}</p>
        </section>
        <aside className="col-span-1 hidden md:flex flex-col items-center space-y-5">
          <button
            type="button"
            onClick={openModal}
            className="flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105"
          >
            <RiArrowGoBackLine className="scale-x-[-1]" />
            <span className="hidden xl:block">Share</span>
          </button>
          <button
            className="flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105"
            onClick={handleDownload}
          >
            <IoDownloadOutline />
            <span className="hidden xl:block">Download</span>
          </button>

          <button
            className="flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105"
            onClick={() => window.print()}
          >
            <IoPrintOutline />
            <span className="hidden xl:block">Print</span>
          </button>
        </aside>
      </main>
      <ShareModal isOpen={isOpen} closeModal={closeModal} />
    </section>
  );
};

export default CardsViewer;
