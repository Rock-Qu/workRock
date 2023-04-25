import React, { useEffect, useState }  from "react"
import Card from "../component/Card"
import { CSSTransition ,TransitionGroup} from "react-transition-group";
import {useDispatch, useSelector} from 'react-redux';
import {ProductAPI} from "../api";

export default function Product() {

  const getProductList  = async() => {
    const data = await ProductAPI.getProductList();
    setSearchList([...data.data.product]);
    getProductStore([...data.data.product]);
    setLoading(true);
  };

  const [searchList, setSearchList] = useState([]);

  const [search, setSearch] = useState("");
  
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const storeState = useSelector((state) => state);

  const onSearch = () => {
    setSearchList([
        ...storeState.filter((item) => item.articleName.includes(search))
      ]);
  }

  const getProductStore = (date) => {
    const action = {
        type :  "storeProduction",
        payload : date
    };
    dispatch(action);
    
  }

  useEffect(() => {
    //setSourceList(getProductList());
    getProductList();
  }, [])

    return(
        <main className="max-w-7xl w-full" >
        <section className='bg-white mx-auto px-3 py-8'>
          <div className='flex justify-end'>
            <input type='text' name='first-name' id='first-name' autoComplete='given-name'
              className=' rounded-md border-0 py-1 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-60'
              placeholder='Search a product' onChange={(e)=> setSearch(e.target.value)}></input>
            <button type='button'
              className=' rounded-md bg-indigo-600 px-3 py-1.5 text-center text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-2'
              onClick={onSearch}>
              Search
            </button>
          </div>
          
          <div className='mt-6 grid md:grid-cols-4 gap-y-10 gap-x-2 sm:grid-cols-1'>

          { loading ? searchList.length === 0 ? "Data Not Found!" :
              <TransitionGroup component={null}>
                {searchList.map((item) => (
                  <CSSTransition  timeout={200} classNames="" key={item.articleId}>
                    <Card key={item.articleId}{...item} />
                  </CSSTransition>
              ))}
            </TransitionGroup> : "Loading" }

          </div>
        </section>
      </main>
  
    )
}