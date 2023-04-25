import React, { useContext} from "react";
import { formatPrice } from "../utils/StringUtils";
import { Link } from "react-router-dom";
import {appContent} from "../content/ProductState";


export default function Card({articleId,
    articleName,
    subTitle,
    salePrice,
    discountPrice,
    imageUrl,
    repertory}) {

    const {state, setState } = useContext(appContent);

    const addCart = () => {
      const arr = state.filter((item) => item.articleId === articleId);

      if (arr.length === 0) {
        setState ((state) => {
          return [
            ...state, 
            {
              articleId,
              articleName,
              subTitle,
              salePrice,
              discountPrice,
              imageUrl
            }
          ];
        });
      }

    };

    return (
        <div className='group relative border-gray-200 border-solid border rounded-md'>
          
          <div
            className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none lg:h-80 relative">
              <Link to = {`/detail/${articleId}` }>
                <img
                  src={imageUrl}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full" alt='' />
              </Link>
            {!repertory ? 
                (<div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 opacity-80 rounded-full w-24 h-24 flex justify-center items-center'>
                <h1 className='text-sm text-white'>SELL OUT !</h1>
              </div>) : ("")}
          </div>
          <div className='mt-4 mx-3'>
            <div>
            <Link to = {`/detail/${articleId}` }>

                <h3 className='text-sm text-gray-700 text-ellipsis w-full overflow-hidden font-bold h-10'>
                  {articleName}
                </h3>
                </Link>
              <p className='mt-1 text-sm text-gray-500'>{subTitle}</p>
            </div>
            <p className='text-sm font-medium text-gray-900 text-right my-2'>
              <span>{formatPrice(discountPrice)}</span>
              <span className='ml-2 line-through text-gray-400'>
                {formatPrice(salePrice)}
              </span>
            </p>
          </div>
          <div className='mt-4 mx-3 mb-4'>

            <button type='submit' onClick={addCart}
              className='block rounded-full bg-indigo-600 px-2.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 absolute bottom-36 right-4'>
              <svg className='icon w-5 h-5' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1915'>
                <path
                  d='M940.8 284.8c-16-19.2-38.4-28.8-64-28.8H352c-19.2 0-32 12.8-32 32s12.8 32 32 32h524.8c6.4 0 12.8 3.2 16 6.4 3.2 3.2 6.4 9.6 3.2 19.2l-48 336c0 9.6-12.8 19.2-25.6 19.2h-38.4-3.2-444.8c-12.8 0-25.6-16-25.6-28.8L256 300.8l-28.8-156.8C220.8 99.2 182.4 64 134.4 64H96c-19.2 0-32 16-32 32s12.8 32 32 32h38.4c12.8 0 25.6 9.6 28.8 25.6L192 310.4l51.2 371.2C249.6 729.6 288 768 332.8 768h486.4c44.8 0 83.2-32 89.6-73.6L960 355.2c3.2-25.6-3.2-51.2-19.2-70.4z'
                  fill='#fff' p-id='1916'></path>
                <path d='M323.2 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z' fill='#fff' p-id='1917'></path>
                <path d='M832 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z' fill='#fff' p-id='1918'></path>
              </svg>
            </button>
          </div>
        </div>
    );
}