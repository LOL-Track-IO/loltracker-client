import { useState } from "react";
import Link from "next/link";
import loltrackerLogo from "../assets/loltracker-search.png";

export default function Search() {
  const [userName, setUserName] = useState<string>("");
  const handleSearch = async (e: React.FormEvent) => {
    console.log("TESTING");
  };

  return (
    <section id="search">
      <div className="row !pt-16">
        <div className="container !pb-2">
          <figure className="flex items-center justify-center px-2.5">
            <Link href="/">
              <img
                id="loltracker-logo !h-[600px] !w-auto"
                src={loltrackerLogo.src}
                alt="loltracker-logo"
              />
              {/* TODO: edit background color of logo to be consistent with nav-bar background color */}
            </Link>
            <h1 className="font-bold text-xl px-2 text-white hover:text-[#4dacdf] transition-colors duration-300 ease-in-out">
              {/* LOLTracker */}
            </h1>
          </figure>
        </div>
      </div>

      <div className="search-container flex justify-center ">
        <form
          className="flex justify-center max-w-[1024px] w-[800px] relative"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Search summoner name + #tag"
            className="outline-none bg-gray-600"
          />
          {/* TODO: add handleClick function */}
          <button className="absolute right-20 bottom-20 " type="submit">
            <div className="svg">
              <svg
                // onClick={handleClick}
                data-v-390ceb07=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6"
              >
                <path
                  data-v-390ceb07=""
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
}
