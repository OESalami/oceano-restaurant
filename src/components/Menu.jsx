import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import lebanese from '../assets/menu-images/lebanese-coffee.jpg'
import oceano from '../assets/menu-images/oceano-pizza.jpg'
import strawberry from '../assets/menu-images/strawberry-shake.jpg'
import tuna from '../assets/menu-images/tuna.jpg'
import Banana from '../assets/menu-images/banana-honey.jpg'
import PineappleGinger from '../assets/menu-images/pineapple-ginger.jpg'
import MixFruits from '../assets/menu-images/mix-fruits.jpg'
import OceanCocktail from '../assets/menu-images/ocean-cocktail.jpg'
import Cranberry from '../assets/menu-images/cranberry.jpg'
import RedGrape from '../assets/menu-images/red-grape.jpg'
import Orange from '../assets/menu-images/orange-juice.jpg'
import Mango from '../assets/menu-images/mango-juice.jpg'
import Vanilla from '../assets/menu-images/vanilla.jpg'
import Chocolate from '../assets/menu-images/chocolate.jpg'
import SmallWater from '../assets/menu-images/small-water.jpg'
import BigWater from '../assets/menu-images/big-water.jpg'
import TonicWater from '../assets/menu-images/tonic-water.jpg'
import SadaWater from '../assets/menu-images/sada-water.jpg'
import LiptonTea from '../assets/menu-images/lipton-tea.jpg'
import LebaneseTea from '../assets/menu-images/lebanese-tea.jpg'
import TeaLemon from '../assets/menu-images/tea-ginger.jpg'
import TeaGinger from '../assets/menu-images/tea-lemon.jpg'
import GreenTea from '../assets/menu-images/green-tea.jpg'
import Shisha from '../assets/menu-images/shisha.jpg'
import CanMalt from '../assets/menu-images/can-malt.jpg'
import Alvaro from '../assets/menu-images/alvaro.jpg'
import Margherita from '../assets/menu-images/margherita-pizza.jpg'
import Vegetable from '../assets/menu-images/vegetable-pizza.jpg'
import Chicken from '../assets/menu-images/chicken-pizza.jpg'
import FourSeasons from '../assets/menu-images/four-seasons-pizza.jpg'
import Shrimp from '../assets/menu-images/shrimp-pizza.jpg'
import Egg from '../assets/menu-images/egg-pizza.jpg'
import {useState} from 'react'



const Menu = () => {

 const [showMore, setShowMore] = useState(false);   

const handleShowMore = () => {
   setShowMore(!showMore);
};

  return (
    <section className='menu container mx-auto py-20 px-4'>
        {/* Heading */}
        <div className="flex justify-center items-center mb-12">
            <h2 className='font-bold text-4xl md:text-5xl text-gray-800 uppercase'>Menu</h2>
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={oceano} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Oceano Pizza</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Wood-fired pizza topped with a delicate blend of fresh seafood, house-made tomato sauce, creamy mozzarella, and finished with aromatic herbs for a refined coastal flavor.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>S-&#8373;40.00 | M-&#8373;50.00 | L-&#8373;60.00 | Farm-&#8373;70.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={lebanese} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Lebanese Coffee</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'> Traditional slow-brewed coffee infused with aromatic cardamom, served rich and bold for an authentic Middle Eastern experience.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;70.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={tuna} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Tuna pizza</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Thin-crust pizza topped with premium tuna flakes, melted mozzarella, tangy tomato sauce, and finished with a touch of red onion and fresh herbs for a balanced, savory flavor.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>S-&#8373;30.00 | M-&#8373;40.00 | L-&#8373;50.00 | Farm-&#8373;60.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={strawberry} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Strawberry Shake</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'> A creamy blend of fresh strawberries and premium ice cream, served chilled and topped with whipped cream for a classic, refreshing treat.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;30.00 | L-&#8373;35.00</p>
                    </div>
                </div>
            </div>
        </div>

        {/* More Items Display */}
        <div className={`justify-center mt-16 ${showMore ? ' ' : 'hidden'}`}>

            {/* List Name -- Set 1 */}
            <div className='flex justify-center items-center mb-8'>
                <h1 className='text-3xl font-bold text-gray-800 uppercase'>Non Alcoholic Cocktails List</h1>
            </div>
            
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                {/* List Items */}
                <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto pt-4">
                    <div><h1 className='uppercase mt-2 font-bold text-gray-800 text-base sm:text-lg lg:text-xl text-center'>Vigren Pinacolada - &#8373;30.00</h1></div>
                    <div className="menu-content p-2 sm:p-4">
                        <h3 className='text-base sm:text-lg lg:text-xl  text-gray-800 mb-2'>Pineapple juice</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl  text-gray-800 mb-2'>Coconut milk</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl  text-gray-800 mb-2'>Passion cordial</h3>
                    </div>
                </div>

                 {/* List Items */}
                 <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                    <div><h1 className='uppercase mt-2 font-bold text-gray-800 text-base sm:text-lg lg:text-xl text-center'>Virgin Diaquiri - &#8373;30.00</h1></div>
                    <div className="menu-content p-2 sm:p-4">
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Strawberry pulp</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Lemon juice</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Strawberry juice</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Sour mix</h3>
                    </div>
                </div>

                 {/* List Items */}
                 <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                    <div><h1 className='uppercase mt-2 font-bold text-gray-800 text-base sm:text-lg lg:text-xl text-center'>Virgin Mojito - &#8373;30.00</h1></div>
                    <div className="menu-content p-2 sm:p-4">
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Mint leaves</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Lime</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Top soda</h3>
                    </div>
                </div>

                 {/* List Items */}
                 <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                    <div><h1 className='uppercase mt-2 font-bold text-gray-800 text-base sm:text-lg lg:text-xl text-center'>Lemonade - &#8373;30.00</h1></div>
                    <div className="menu-content p-2 sm:p-4">
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Sour mix</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Orange blossom</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Lemon zest</h3>
                    </div>
                </div>

                 {/* List Items */}
                 <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                    <div><h1 className='uppercase mt-2 font-bold text-gray-800 text-base sm:text-lg lg:text-xl text-center'>Cool ageer - &#8373;30.00</h1></div>
                    <div className="menu-content p-2 sm:p-4">
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Cream</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Ango juuice</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Cranberry juice</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Grenadine</h3>
                    </div>
                </div>

                 {/* List Items */}
                 <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                    <div><h1 className='uppercase mt-2 font-bold text-gray-800 text-base sm:text-lg lg:text-xl text-center'>Chapmana - &#8373;30.00</h1></div>
                    <div className="menu-content p-2 sm:p-4">
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Fanta, lemonade</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Bitters</h3>
                        <h3 className='text-base sm:text-lg lg:text-xl text-gray-800 mb-2'>Grenadine</h3>
                    </div>
                </div>

            </div>

            {/* Full Menu List */}
                {/* List Name */}
            <div className='flex justify-center items-center mb-8'>
                <h1 className='text-3xl font-bold text-gray-800 uppercase mt-10'>Smoothies</h1>
            </div>

            {/* Menu List */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Banana} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Banana with milky honey</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>A smooth blend of ripe bananas, fresh milk, and natural honey, creating a rich, creamy drink with just the right touch of sweetness.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;25.00 | L-&#8373;30.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={PineappleGinger} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Pineapple with ginger</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>A vibrant fusion of fresh pineapple and zesty ginger, offering a refreshing balance of tropical sweetness and subtle spice.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'> M-&#8373;25.00 | L-&#8373;30.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={MixFruits} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Mix fruits juice</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>A refreshing blend of seasonal fruits, freshly pressed to deliver a naturally sweet and revitalizing burst of flavor.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;25.00 | L-&#8373;30.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={OceanCocktail} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Oceano Cocktail</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'> A signature tropical blend of fresh fruit juices and a hint of citrus, crafted to deliver a smooth, refreshing taste inspired by coastal flavors.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;30.00 | L-&#8373;35.00</p>
                    </div>
                </div>
            </div>


        </div>    

            {/* List Name */}
            <div className='flex justify-center items-center mb-8'>
                <h1 className='text-3xl font-bold text-gray-800 uppercase mt-10'>Juices</h1>
            </div>

            {/* Menu List */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Cranberry} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Cranberry</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Freshly pressed cranberries served chilled, offering a crisp, tart flavor that's both refreshing and naturally invigorating.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;20.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={RedGrape} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Red grape</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'> Pure, freshly squeezed red grapes, delivering a smooth, naturally sweet taste with a rich, fruity aroma.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'> M-&#8373;20.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Orange} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Orange</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Freshly squeezed oranges served cold, offering a bright, citrusy flavor packed with natural sweetness and vitamin C.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;20.00 | L-&#8373;30.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Mango} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Mango</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Rich and velvety mango purée blended to perfection, delivering a naturally sweet and tropical flavor in every sip.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;20.00 | L-&#8373;25.00</p>
                    </div>
                </div>
            </div>


            </div> 


            {/* List Name */}
            <div className='flex justify-center items-center mb-8'>
                <h1 className='text-3xl font-bold text-gray-800 uppercase mt-10'>Milkshakes</h1>
            </div>

            {/* Menu List */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={strawberry} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Strawberry shake</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Creamy vanilla ice cream blended with fresh strawberries and chilled milk, finished with whipped cream for a smooth, fruity indulgence.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;30.00 | M-&#8373;35.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Vanilla} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Vanilla shake</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>A classic blend of rich vanilla ice cream and fresh milk, creating a smooth, creamy shake with timeless flavor.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;30.00 | M-&#8373;35.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Chocolate} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Chocolate shake</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Decadent chocolate ice cream blended with fresh milk and rich cocoa, served silky smooth with a whipped cream topping.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>M-&#8373;30.00 | L-&#8373;35.00</p>
                    </div>
                </div>
            </div>



            </div> 


                {/* List Name */}
            <div className='flex justify-center items-center mb-8'>
                <h1 className='text-3xl font-bold text-gray-800 uppercase mt-10'>Beverages & Shisha</h1>
            </div>

            {/* Menu List */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={SmallWater} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Small water</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Chilled bottled water, served for a refreshing and pure hydration experience.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 5.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={BigWater} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Big water</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Large bottled water, perfectly chilled to keep you refreshed and hydrated throughout your meal.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 10.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={TonicWater} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Tonic water</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>A crisp, carbonated beverage with a hint of quinine, served chilled for a refreshing, slightly bitter finish.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 10.00</p>
                    </div>
                </div>
            </div>
            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={SadaWater} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Sada water</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'> Refreshing sparkling water, served cold for a light and crisp dining companion.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 10.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={CanMalt} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Can malt</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'> A smooth, non-alcoholic malt beverage with a rich, malty flavor and a naturally sweet finish, served chilled.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 10.00</p>
                    </div>
                </div>
            </div>


            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Alvaro} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Alvaro</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>A lightly carbonated, non-alcoholic malt drink infused with natural fruit flavors, offering a smooth and refreshing taste.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 10.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={LebaneseTea} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Lebanese tea</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>A traditional black tea brewed with fresh mint leaves, served hot for a soothing and aromatic experience.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 17.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={LiptonTea} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Lipton tea</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Classic black tea brewed to perfection and served hot, offering a smooth and comforting taste.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 17.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={GreenTea} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Green tea with mint</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Delicate green tea infused with fresh mint leaves, served hot for a light, refreshing, and revitalizing blend.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 22.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={TeaGinger} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Tea with ginger</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>A soothing black tea brewed with fresh ginger, offering a comforting blend of warmth and subtle spice.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 22.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={TeaLemon} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Tea with lemon</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Freshly brewed black tea enhanced with a splash of lemon, delivering a bright and refreshing citrus aroma.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 22.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Shisha} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Shisha (apple, mint, grape)</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 35.00</p>
                    </div>
                </div>
            </div>



            </div> 


                {/* List Name */}
                <div className='flex justify-center items-center mb-8'>
                <h1 className='text-3xl font-bold text-gray-800 uppercase mt-10'>Pizza</h1>
            </div>

            {/* Menu List */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Margherita} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Margherita pizza</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>S-&#8373;25.00 | M-&#8373;42.00 | L-&#8373;52.00 | F-&#8373;63.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Vegetable} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Vegetable pizza</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>S-&#8373;25.00 | M-&#8373;35.00 | L-&#8373;45.00 | F-&#8373;55.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Chicken} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Chicken pizza</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>S-&#8373;30.00 | M-&#8373;40.00 | L-&#8373;50.00 | F-&#8373;60.00</p>
                    </div>
                </div>
            </div>
            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={FourSeasons} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Four seasons pizza</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>S-&#8373;35.00 | M-&#8373;40.00 | L-&#8373;50.00 | F-&#8373;60.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Shrimp} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Shrimp pizza</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>S-&#8373;40.00 | M-&#8373;50.00 | L-&#8373;60.00 | F-&#8373;70.00</p>
                    </div>
                </div>
            </div>


            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Egg} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Egg pizza</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>S-&#8373;25.00 | M-&#8373;35.00 | L-&#8373;45.00 | F-&#8373;55.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={oceano} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Oceano pizza</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>S-&#8373;40.00 | M-&#8373;50.00 | L-&#8373;60.00 | F-&#8373;70.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={LiptonTea} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Lipton tea</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 17.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={GreenTea} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Green tea with mint</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 22.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={TeaGinger} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Tea with ginger</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 22.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={TeaLemon} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Tea with lemon</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 22.00</p>
                    </div>
                </div>
            </div>

            {/* Menu Item */}
            <div className="menu-item bg-white rounded-lg shadow-lg w-full sm:w-60 lg:w-80 mx-auto">
                <div className="menu-img">
                    <img src={Shisha} alt="Menu Item" className='w-full h-24 sm:h-32 lg:h-48 object-cover rounded-t-lg'/>
                </div>
                <div className="menu-content p-2 sm:p-4">
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2'>Shisha (apple, mint, grape)</h1>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis ut mi fermentum fermentum. Nulla facilisi. In hac habitasse platea dictumst.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-base sm:text-lg text-gray-800 font-bold'>&#8373; 35.00</p>
                    </div>
                </div>
            </div>



            </div> 

        </div>

        {/* Show More Button */}
        <div className='flex justify-center mt-12'>
            <button onClick={handleShowMore} className='flex py-3 px-8 bg-yellow-400 text-white font-semibold rounded-full hover:bg-yellow-600 shadow-xl'>
               {showMore ? 'Show less' : 'Show More'}
                {showMore ? <FaArrowLeft className='w-6 h-6 ml-2' /> : <FaArrowRight className='w-6 h-6 ml-2' />}
            </button>
        </div>
      
    </section>
  )
}

export default Menu
