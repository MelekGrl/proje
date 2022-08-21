import Menuler from './ui/Menus'
import { BsFacebook } from 'react-icons/bs'
import { IoLogoTwitter } from 'react-icons/io'
import { RiInstagramLine } from 'react-icons/ri'
import { GiWorld } from 'react-icons/gi'

export default function Footer () {
  const menus = [
    {
      title: "Resturant keşfedin",
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'COVID-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    },
    {
      title: 'Yardıma mı ihtiyacınız var?',
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'COVID-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    },
    {
      title: 'İş Ortağımız Olun',
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'COVID-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    }
  ]

  return (
    <div className='bg-white mt-10'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1  md:grid-cols-4 p-4 '>
          <section className='gap-y-3 flex flex-col'>
            <h6 className='text-write-color text-lg'>
              Resturant indirin!
            </h6>
            <nav className='flex gap-y-2 flex-col'>
              <a href='##'>
                <img className='w-[170px] h-[60px] object-contain'
                  alt=''
                  src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'
                />
              </a>
              <a href='##'>
                <img className='w-[170px] h-[60px] object-contain'
                  alt=''
                  src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'
                />
              </a>
              <a href='##'>
                <img className='w-[170px] h-[60px] object-contain'
                  alt=''
                  src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'
                />
              </a>
            </nav>
          </section>
          {menus.map((menu, y) => (
            <Menuler key={y} {...menu} />
          ))}
        </div>
        <div className='flex justify-between w-full bg-gray-50 border-t-black px-4 flex-col md:flex-row items-center'>
        <div className='flex gap-x-2 pt-4 pb-4 flex-col md:flex-row items-center md:items-start gap-y-2 '>
          <div className='fle gap-x-1 text-sm '>
            <span>©</span>
            <span>2022 Resturant</span>
          </div>
          <div className='flex gap-x-2 text-sm '>
            <span>.</span>
            <a href='##' className='hover:underline hover:text-red-color text-opacity-40 before:w-1 h-1  '>Bilgi Toplumu Hizmetleri</a>
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <a href='https://www.facebook.com/login/' className='hover:bg-red-color hover:bg-opacity-10 text-write-color p-3 border border-gray-100 rounded bg-white shadow transition-all hover:scale-105'>
            <BsFacebook size={18}  />
          </a>
          <a href='https://twitter.com/' className='hover:bg-red-color hover:bg-opacity-10 text-write-color p-3 border border-gray-100 rounded bg-white shadow'>
            <IoLogoTwitter size={18} />
          </a>
          <a href='https://www.instagram.com/' className='hover:bg-red-color hover:bg-opacity-10 text-write-color p-3 border border-gray-100 rounded bg-white shadow'>
            <RiInstagramLine size={18} />
          </a>
          <span className='p-3 flex gap-x-1 items-center justify-center border border-gray-100'>
            <span>
              <GiWorld />
            </span>
            <span className='text-sm'>Türkçe (TR)</span>
          </span>
        </div>
      </div>
      </div>
     
    </div>
  )
}
