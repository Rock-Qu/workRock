import React from "react";
import { Link } from "react-router-dom";
export default function BreadCrumb ( props ) {

  const pathUrl = props.path.substring(1).split('/');

    return (
        <nav aria-label="Breadcrumb" className="mt-8">
        <ol
          className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div className="flex items-center">
            <Link to = {`/` }>
              <span className="mr-2 text-sm font-medium text-gray-900">
              Home
              </span>
              </Link>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300">
                <path
                  d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li>
            <div className="flex items-center">
              <span className="mr-2 text-sm font-medium text-gray-900">
              {pathUrl[0]} {(pathUrl[1]) ? ": " + pathUrl[1] :  ""}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    );
}