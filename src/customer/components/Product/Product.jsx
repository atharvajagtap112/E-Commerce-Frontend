"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductCard from "./ProductCard";
import FilterListIcon from '@mui/icons-material/FilterList';
import { mens_kurta } from "../../Data/Men/men_kurta";
import { discountFilter, filters, singleFilter } from "./filterData";
import { FormControl, FormControlLabel, FormLabel, Pagination, Radio, RadioGroup } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";
import { store } from "../../../State/store";
import Loading from "../Loading/loading";

const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false , option:"price_low" },
  { name: "Price: High to Low", href: "#", current: false, option:"price_high" },
];

 


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const location=useLocation();
  const navigation=useNavigate();  
const param =useParams();


  const decodedQueryString=decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);



  const colorValue= searchParams.get("color");
  const sizeValue= searchParams.get("size");
  const sortValue= searchParams.get("sort");
  const priceValue= searchParams.get("price");
  const discount=searchParams.get("discount");
  const pageNumber=searchParams.get("page")||1;
  const stock= searchParams.get("stock");

  const dispatch=useDispatch();

  const {products}=useSelector(store=>store)

  useEffect(() => {
    const [minPrice,maxPrice]= priceValue===null?[0,100000]:priceValue.split("-").map(Number);     
    console.log(priceValue);
    
    const data={
      category: param.levelThree,
      colors: colorValue || [],
      sizes: sizeValue || [],
      minPrice,
      maxPrice,
      minDiscount: discount || 0,
      maxDiscount: discount || 100000,
      sort:sortValue || "price_low",
      pageNumber: pageNumber-1||0,
      stock: stock ,
      pageSize:10,

    }


    dispatch(findProducts(data));
  },[
    param.levelThree,
    colorValue,  
    sizeValue,
    sortValue,
    priceValue,
    discount,
    pageNumber,
    stock     
])   


 
const handlePaginationChange =(event,value)=>{
event.preventDefault();

 const searchParams=new URLSearchParams(location.search);
  searchParams.set("page",value)
  navigation({ search:`?${searchParams.toString()}` });
}


  
   const handleFilter=(value, sectionId)=>{

       const searchParams = new URLSearchParams(location.search); 
/*   
this is how the searchParams looks like it stores the key and value in the URL
  
    
   {
      color: "red,white",
        size: "large"
                                  }
URLSearchParams just stores this parametre 
simple just store in URLSearchParams using set(key,value)
after we set it will store in storage 
now convert that map in to string and add ? at the start of it and put in navigation(Search:Here)
 but to update the URL we need to use navigation
*/

    let filterValue= searchParams.getAll(sectionId);   
    //if sectionId==color it get ["red,white"] 
         

      // Now checking if value is present in this array  ["red,white"]     
      //as diff colors are in single string so we need to split it 
      // and check if value is present in this array
      //if yes then we need to remove it from the array
      if(filterValue.length>0&& filterValue[0].split(",").includes(value) ){
        
        filterValue=filterValue[0].split(",").filter((items)=> items!==value)
        //if value is present in the array then we need to remove it from the filterValue and again storing it in the filterValue
       
        if(filterValue.length===0){
          //now if the filterValue is empty then we need to remove the sectionId from the searchParams
          //the sectionId is key and filterValue is value
          searchParams.delete(sectionId); 
      }}
         
      //if value is not present in the array then we need to add it to the filterValue
      else{
        filterValue.push(value); 
        // → value=yellow ['red,white', 'yellow']
      }
      
      //but this is store here only need to update in the searchParams also 
      //need to store in the form of string ['red,white', 'yellow'] ==> 'red,white,yellow'
      if(filterValue.length>0){
        searchParams.set(sectionId, filterValue.join(","));
        
      }
      // now need to update the searchParams in the URL
      //to do this we req navigation

     const queryString = searchParams.toString();
//     {
//                 color: "red,white",
//                 size: "large"
//                                  }

//when we convert this to string it looks like this
// "color=red,white&size=large" and now just add ? at the start of it and done 
        
navigation({
  search:`?${queryString}`
});
//It changes the URL in the browser to include that query string.
        

  }

  const handleRadioFilterChnage=(value, sectionId)=>{
   const searchParams = new URLSearchParams(location.search); 
   searchParams.set(sectionId, value.target.value);
     const queryString = searchParams.toString();
        navigation({search:`?${queryString}`});
  }

  const handleSortFilterChange=(value, sectionId)=>{
   const searchParams = new URLSearchParams(location.search); 
   searchParams.set(sectionId, value);
     const queryString = searchParams.toString();
        navigation({search:`?${queryString}`});
  }
    
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}

                {singleFilter.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (

                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto  px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton 
                    

                  className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white cursor-pointer shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          onClick={()=>handleSortFilterChange(option.option,"sort")}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2  text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

            
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <div>
                <div className="py-10 flex justify-between items-center">  
                  <h1 className="text-lg opacity-50 font-bold text-left">Filters</h1>
              <FilterListIcon /></div>
             
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                         
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                 onChange={()=>handleFilter(option.value, section.id)}
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
                
                {singleFilter.map((section) => (
                  <Disclosure  key={section.id}  as="div" className="border-b border-gray-200 py-6"  >
                    
                  <>
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        
                        {/* <span className="font-medium "></span> */}
                        
                           <FormLabel sx={{color:"black"}} className="text-gray-900" id="demo-radio-buttons-group-label">
                               {section.name}
                            </FormLabel>
                     
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          
                        </span>
                        
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        <FormControl>
                         <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female"  name="radio-buttons-group"  >
                        {section.options.map((option, optionIdx) => (
                        
                        <>
                          <FormControlLabel onChange={(e)=>handleRadioFilterChnage(e,section.id)}  value={option.value}  control={<Radio />}     label={option.label}/>
                        </>
                                ))}

                                </RadioGroup> </FormControl>
                      </div>
                    </DisclosurePanel>
                     </>
                  </Disclosure>
                ))}
               
              </form>
</div>
              {/* Product grid */}
                  {products.loading?
                  
                <div   className="lg:col-span-4 w-full flex justify-center items-center h-screen">

            <Loading/>
            </div>


             : <div className="lg:col-span-4 w-full">
                <div className="flex flex-wrap justify-left bg-white py-5">
                     {products.products&&products.products?.content?.map((product) => (
                    <ProductCard product={product} />
                  ))}
                </div>
              </div>
              }
            </div>
          </section>

          <section className="w-full px=[3.6rem] ">
             <div className="px-4 py-5 flex justify-center">
              <Pagination count={products.products?.totalPages}   page={parseInt(pageNumber)} color="secondary"  onChange={handlePaginationChange} />
              </div>    
          </section>
        </main>
      </div>
    </div>
  );
}
