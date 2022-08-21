import { BiSearchAlt } from 'react-icons/bi'

export default function Search () {
  return (
   <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-0  border-orange-200  rounded '>
    <div className='flex sm:w-1/2 w-full '>
      <h1 className='text-write-color font-semibold'>RESTAURANTLAR</h1>
    </div>
    <div className='flex justify-center sm:w-1/2 w-full'>
      <div className=' w-full'>
        <div className='input-group relative flex  items-stretch w-full bg-white shadow border   rounded-lg h-14 border-inherit'>
          <input
          placeholder='Mekan Ara'
            type='search'
            className='text-write-color placeholder:text-xs rounded-l-lg form-control relative flex-auto min-w-0 block w-full px-3  text-base font-normal  bg-white bg-clip-padding   transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none'
          
            aria-label='Search'
            aria-describedby='button-addon3'
          />
          <button
            className='btn inline-block px-4 py-2 rounded-r-lg   bg-white text-black  font-medium text-xs leading-tight uppercase  hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out border-inherit'
            type='button'
            id='button-addon3'
          >
          <BiSearchAlt className='w-5 h-5 text-menu-color object-contain'/>
          </button>
        </div>
      </div>
    </div>
   </div>
  )
}
