import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { appContent } from "../content/ProductState";

export default function CartButton() {

    const {state}  = useContext(appContent);

    return (
      <button
        className="fixed bottom-12 right-8 bg-gray-900 w-10 h-10 rounded-full p-0">
        <Link to = '/cart'>
          <svg
            className="icon w-5 h-5"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1915">
            <path
              d="M940.8 284.8c-16-19.2-38.4-28.8-64-28.8H352c-19.2 0-32 12.8-32 32s12.8 32 32 32h524.8c6.4 0 12.8 3.2 16 6.4 3.2 3.2 6.4 9.6 3.2 19.2l-48 336c0 9.6-12.8 19.2-25.6 19.2h-38.4-3.2-444.8c-12.8 0-25.6-16-25.6-28.8L256 300.8l-28.8-156.8C220.8 99.2 182.4 64 134.4 64H96c-19.2 0-32 16-32 32s12.8 32 32 32h38.4c12.8 0 25.6 9.6 28.8 25.6L192 310.4l51.2 371.2C249.6 729.6 288 768 332.8 768h486.4c44.8 0 83.2-32 89.6-73.6L960 355.2c3.2-25.6-3.2-51.2-19.2-70.4z"
              fill="#fff"
              p-id="1916"></path>
            <path
              d="M323.2 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
              fill="#fff"
              p-id="1917"></path>
            <path
              d="M832 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
              fill="#fff"
              p-id="1918"></path>
          </svg>
        </Link>
        <div className="absolute text-xs right-1 top-1 text-white">{state.length}</div>
      </button>
    );
}