import {BiMenuAltLeft} from 'react-icons/bi';
import {AiFillShop} from 'react-icons/ai';
import {AiTwotoneShopping} from 'react-icons/ai';
import Title from './ui/title';



function App() {
    return (
      <>
      <div className="bg-navbar-color shadow  h-12 flex  items-center w-full">
       <div className='w-[50%] flex justify-between '>
       <div >
            <BiMenuAltLeft className='w-8 h-8 object-contain text-menu-color'/>
        </div>
       <Title/>
       </div>
        <div className='w-[50%] items-end justify-end flex pr-4 gap-x-4 '>
           <AiFillShop className='w-5 h-5 object-contain items-center '/>
           <AiTwotoneShopping className='w-5 h-5 object-contain items-center'/>
        </div>
      </div>
      
      </>
    );
  }
  export default App;
  