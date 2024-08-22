import React from 'react';

const Topbar = () => {
  return (
    <header>
      <div className="flex items-center justify-center  gap-4 border-b border-solid border-slate-300 py-1.5 px-2">
        <div className="flex w-1/3">
          <p className="text-[20px] font-medium text-black">Home</p>
        </div>
        <div className="text-[14px] w-1/3 h-[40px] flex justify-center items-center gap-2 border rounded border-solid border-slate-300  px-3.5 text-black shadow-lg bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="gray"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input type="text" placeholder="Search features, tutorials, etc." className='w-full outline-none bg-gray-100 text-gray-500' />
        </div>
        <div className="w-1/3 flex justify-end ">
          <div class="w-[64%] flex justify-end gap-3 md:w-full">
            <div class="flex flex-1 items-center justify-end gap-5">
              <div class="flex flex-1 items-center justify-end gap-1.5">
                <a href="#"> </a>
                <div class="flex flex-1 items-center justify-end gap-5">
                  <p class="size-body_2_medium text ui text-[14px] self-end font-medium !text-black-30">
                    Need help?
                  </p>
                  <div class="h-[24px] w-[1px] bg-slate-300"></div>
                </div>
              </div>
              <a href="#">
                <button class="rounded-[20px] w-[40px] h-[40px] flex items-center justify-center bg-slate-300 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                    />
                  </svg>
                </button>
              </a>
            </div>
            <a href="#">
              <button class="rounded-[20px] w-[40px] h-[40px] flex items-center justify-center bg-blue-200 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="blue  "
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
