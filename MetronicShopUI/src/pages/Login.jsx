import React, {useEffect, useState} from "react"
import {UserInfoAPI} from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [isDisabled, setIsDisabled] = useState(false);

    const [userInfo, setUserInfo] = useState({
      email : '',
      password : ''
    });

    const [sourceList, setSourceList] = useState([]);

    const getDate = (e) => {
        const newwuser ={
          ...userInfo,
          [e.target.name]: e.target.value
        }


        setUserInfo({
           ...userInfo,
           [e.target.name]: e.target.value
        });
        validation(newwuser);
    };

    const getUserInfoList  = async() => {
      const data = await UserInfoAPI.getUserInfoList();
      setSourceList([...data.data.users]);
    };

    const onSubmit = (e) => {

      const auth = sourceList.find(
        (user) => user.email === userInfo.email && user.password === userInfo.password
      );

      if (auth) {
        sessionStorage.setItem("nickname" , JSON.stringify(auth.nickname));
        navigate('/');
      } else {
        alert('NG');
      }

    };

    const validation = (newwuser) => {
      setIsDisabled(Object.values(newwuser).every((i) => i ));
    }

    useEffect(() => {
      getUserInfoList();
    }, [])

    return (
        <main>
        <section
          className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2
                className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6">
              <input type="hidden" name="remember" value="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    placeholder="Email address" 
                    onChange = {getDate}/>
                </div>
                <div>
                  <label htmlFor="password" className="sr-only"> Password </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" 
                    onChange = {getDate}/>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
  
                <div className="text-sm">
                  <a
                    href="/"
                    className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="button" onClick = {onSubmit} disabled={!isDisabled}
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  
                    <span
                      className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                          clipRule="evenodd" />
                      </svg>
                    </span>
                    Sign in
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

    );
    

}