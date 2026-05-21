"use client";

import { useEffect, useReducer, useRef } from "react";
import Link from "next/link";

const _menu = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/resume",
    title: "Resume",
  },
  {
    href: "/cover-letter",
    title: "Cover Letter",
  },
].map((v, k) => ({
  key: k,
  value: v,
}));

// useEffect({

// ,[]})

export default function Page() {
  const _menuMobile = useRef(null);

  const [_showMenu, toggleMenu] = useReducer((_showMenu) => !_showMenu, false);
  useEffect(() => {
    console.log(_showMenu ? "true" : "false", _menuMobile.current?.classList);

    if (_showMenu) {
      _menuMobile.current?.classList.remove("hidden");
      _menuMobile.current?.classList.add("block");
    } else {
      _menuMobile.current?.classList.remove("block");
      _menuMobile.current?.classList.add("hidden");
    }
  }, [_showMenu, _menuMobile]);

  return (
    <header className="xl:w-7xl w-auto xl:mx-auto mx-3 shrink-0">
      <div className="xl:grid-cols-12 grid-cols-1 py-4">
        <nav className="xl:col-span-3 xl:col-start-10 text-right sm:block hidden">
          {_menu.map((v) => {
            return (
              <Link className="px-3 py-2" key={v.key} href={v.value.href}>
                {v.value.title}
              </Link>
            );
          })}
        </nav>
        <div className="relative">
          <a
            className='sm:hidden flex justify-end items-center text-["18px"]'
            onClick={toggleMenu}
          >
            &bull;&bull;&bull;
          </a>
          <nav
            ref={_menuMobile}
            className="hidden text-right absolute right-0 z-999"
          >
            {_menu.map((v) => {
              return (
                <Link className="px-3 py-2" key={v.key} href={v.value.href}>
                  {v.value.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
