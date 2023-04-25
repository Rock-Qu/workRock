import React, { useState ,useEffect} from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import BreadCrumb from "../component/BreadCrumb";
import { formatPrice } from "../utils/StringUtils";
import {useSelector} from 'react-redux';

export default function Detail() {
    const {id} = useParams();
    const path = useResolvedPath();
    
    const storeState = useSelector((state) => state);
    const [detail, setDetail] = useState([]);

    const onDetail = () => {
      const date =  (storeState) ? storeState.find(item => item.articleId === id) : "";
      setDetail(date);
    }

    useEffect(() => {
      onDetail();
    },[]);   

    return (
        <main
        className="max-w-7xl w-full mx-auto"
        >
        <section className="md:px-2 lg:px-4">
        <BreadCrumb path = {path.pathname}></BreadCrumb>
          <div
            className="flex w-full transform text-left text-base transition md:my-8 md:max-w-4xl lg:max-w-5xl mx-auto">
            <div
              className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-md sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <div
                className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                <div
                  className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-5 lg:col-span-6">
                  <img
                    src={detail.imageUrl}
                    alt="Two each of gray, white, and black shirts arranged on
                  table."
                    className="object-cover object-center" />
                </div>
                <div className="sm:col-span-7 lg:col-span-6">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                  {detail.articleName}
                  </h2>

                  <section aria-labelledby="information-heading" className="mt-2">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    <p className="text-2xl text-gray-900">
                      <span>{(detail.discountPrice) ? formatPrice(detail.discountPrice) : ""}</span>
                      <span className="ml-3 line-through text-gray-400 text-xl">
                      {(detail.salePrice) ? formatPrice(detail.salePrice) : ""}
                      </span>
                    </p>

                    <div className="mt-6">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <svg
                            className="text-gray-900 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                          </svg>
                          <svg
                            className="text-gray-900 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                          </svg>

                          <svg
                            className="text-gray-900 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                          </svg>

                          <svg
                            className="text-gray-900 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                          </svg>

                          <svg
                            className="text-gray-200 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="sr-only">
                      Product options
                    </h3>

                    <form>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Color</h4>

                        <fieldset className="mt-4">
                          <legend className="sr-only">Choose a color</legend>
                          <span className="flex items-center space-x-3">
                            <label
                              className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                              <input
                                type="radio"
                                name="color-choice"
                                value="White"
                                className="sr-only"
                                aria-labelledby="color-choice-0-label" />
                              <span id="color-choice-0-label" className="sr-only">
                                {' '} White{' '}
                              </span>
                              <span
                                className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"></span>
                            </label>
                            <label
                              className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                              <input
                                type="radio"
                                name="color-choice"
                                value="Gray"
                                className="sr-only"
                                aria-labelledby="color-choice-1-label" />
                              <span id="color-choice-1-label" className="sr-only">
                                {' '} Gray{' '}
                              </span>
                              <span
                                className="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
                            </label>

                            <label
                              className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                              <input
                                type="radio"
                                name="color-choice"
                                value="Black"
                                className="sr-only"
                                aria-labelledby="color-choice-2-label" />
                              <span id="color-choice-2-label" className="sr-only">
                                {' '} Black{' '}
                              </span>
                              <span
                                className="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
                            </label>
                          </span>
                        </fieldset>
                      </div>

                      <div className="mt-10">
                        <fieldset className="mt-4">
                          <legend className="sr-only">Choose a size</legend>
                          <div className="grid grid-cols-4 gap-4">
                            <label
                              className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="XXS"
                                className="sr-only"
                                aria-labelledby="size-choice-0-label" />
                              <span id="size-choice-0-label">XXS</span>

                              <span
                                className="pointer-events-none absolute -inset-px rounded-md"></span>
                            </label>

                            <label
                              className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="XS"
                                className="sr-only"
                                aria-labelledby="size-choice-1-label" />
                              <span id="size-choice-1-label">XS</span>

                              <span
                                className="pointer-events-none absolute -inset-px rounded-md"></span>
                            </label>

                            <label
                              className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="S"
                                className="sr-only"
                                aria-labelledby="size-choice-2-label" />
                              <span id="size-choice-2-label">S</span>

                              <span
                                className="pointer-events-none absolute -inset-px rounded-md"></span>
                            </label>

                            <label
                              className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="M"
                                className="sr-only"
                                aria-labelledby="size-choice-3-label" />
                              <span id="size-choice-3-label">M</span>

                              <span
                                className="pointer-events-none absolute -inset-px rounded-md"></span>
                            </label>

                            <label
                              className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="L"
                                className="sr-only"
                                aria-labelledby="size-choice-4-label" />
                              <span id="size-choice-4-label">L</span>

                              <span
                                className="pointer-events-none absolute -inset-px rounded-md"></span>
                            </label>

                            <label
                              className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="XL"
                                className="sr-only"
                                aria-labelledby="size-choice-5-label" />
                              <span id="size-choice-5-label">XL</span>

                              <span
                                className="pointer-events-none absolute -inset-px rounded-md"></span>
                            </label>

                            <label
                              className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="XXL"
                                className="sr-only"
                                aria-labelledby="size-choice-6-label" />
                              <span id="size-choice-6-label">XXL</span>

                              <span
                                className="pointer-events-none absolute -inset-px rounded-md"></span>
                            </label>

                            <label
                              className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-not-allowed bg-gray-50 text-gray-200">
                              <input
                                type="radio"
                                name="size-choice"
                                value="XXXL"
                                disabled
                                className="sr-only"
                                aria-labelledby="size-choice-7-label" />
                              <span id="size-choice-7-label">XXXL</span>

                              <span
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor">
                                  <line
                                    x1="0"
                                    y1="100"
                                    x2="100"
                                    y2="0"
                                    vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            </label>
                          </div>
                        </fieldset>
                      </div>

                      <button
                        type="button"
                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Add to bag
                      </button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  
    );

}