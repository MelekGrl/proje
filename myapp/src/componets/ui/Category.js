import { RiShoppingBasketFill } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'


export default function Category ({ category: { id, title, image } }) {
  return (
    <div>
      <a
        href='##'
        className=' border-container-color border-opacity-100 rounded-md bg-white shadow flex flex-col items-start  transition hover:bg-red-50 group'
      >
       <div className='flex relative'>
       <div className='absolute bg-red-color px-3 py-2 flex gap-1 items-center rounded-lg top-2 left-2'>
       <AiFillStar className='text-white h-4 w-4'/>
       <span className='text-white text-sm'>4.7</span>
       </div>
       </div>
        <img
          alt=''
          src={image}
          className='w-full h-56 rounded  border bg-white border-gray-200 object-cover'
        ></img>
        <div className='w-full flex truncate flex-col gap-2 p-2'>
          <h2 className='group-hover:text-brand-color whitespace-nowrap tracking-tight text-lg font-semibold text-write-color text-opacity-80 truncate '>
            {title}
          </h2>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center md:flex-row gap-3 truncate'>
              <h2 className='group-hover:text-brand-color whitespace-nowrap tracking-tight text-xs font-semibold text-write-color text-opacity-50  truncate w-1/2'>
                Coffe,Tatlı
              </h2>
              <div className='flex gap-1 items-center   truncate  w-1/2 justify-end'>
                <RiShoppingBasketFill className='h-4 w-4 object-contain ' />
                <h2 className='group-hover:text-brand-color whitespace-nowrap tracking-tight text-xs font-semibold text-write-color text-opacity-50 truncate '>
                  Sipariş Tutarı:t30
                </h2>
              </div>
            </div>
            <div className='flex justify-between items-center md:flex-row gap-3 truncate'>
              <h2 className='group-hover:text-brand-color whitespace-nowrap tracking-tight text-xs font-semibold text-write-color  text-opacity-50  truncate  w-1/2'>
                3km yakınında
              </h2>
              <div className='flex gap-1 items-center   truncate  w-1/2 justify-end'>
                <span className='group-hover:text-brand-color whitespace-nowrap tracking-tight text-xs font-semibold text-green-color  '>
                  İşletme Açık
                </span>
                <span className='group-hover:text-brand-color whitespace-nowrap tracking-tight text-xs font-semibold text-write-color text-opacity-50 truncate '>
                  10:00/20:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
