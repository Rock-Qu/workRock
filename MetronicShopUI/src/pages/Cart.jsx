import React, {useContext} from "react";
import { useResolvedPath } from "react-router-dom";
import { formatPrice } from "../utils/StringUtils";
import BreadCrumb from "../component/BreadCrumb";
import { appContent } from "../content/ProductState";

export default function Cart() {
    const path = useResolvedPath();

    const {state, setState}  = useContext(appContent);

    const onDelete = (index) => {
      const newArray = state.filter((item, idx) => idx !== index);
      setState([...newArray]);
    }


    return (
        <main
        className="max-w-7xl w-full mx-auto"
        >
        <section className="md:px-2 lg:px-4">
          <BreadCrumb path = {path.pathname}></BreadCrumb>
          <div
            className="overflow-hidden bg-white shadow sm:rounded-lg border border-gray-200 border-1 md:my-8">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Shop Cart
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <ul>
                {state.map((item, index) => 
                <div
                  className="bg-gray-50 px-4 py-5 flex justify-around sm:px-6 items-center">
                  <div
                    className="text-sm font-medium text-gray-500 flex-1 text-center">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="w-16 h-16" />
                  </div>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 flex-1">
                    <div>{item.articleName}</div>
                    <div className="text-sm text-gray-500">{item.subTitle}</div>
                  </div>
                  <div
                    className="mt-1 text-sm text-gray-900 sm sm:mt-0 flex-1 text-center">
                    <div className="text-lg">{formatPrice(item.discountPrice)}</div>
                  </div>
                  <div
                    className="mt-1 text-sm text-gray-900 sm sm:mt-0 flex-1 text-center">
                    <button onClick ={() => onDelete(index)}
                      className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Delete
                    </button>
                  </div>
                </div>
                )}
              </ul>
            </div>
          </div>
        </section>
      </main>
    );

}