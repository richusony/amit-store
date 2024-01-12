import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import HomeCards from '../components/HomeCards'
import CardFeature from '../components/CardFeature'
import { GrNext, GrPrevious } from 'react-icons/gr'
// import FilterProduct from '../components/FilterProduct'
import AllProduct from '../components/AllProduct'

const Home = () => {
  const productData = useSelector((state) => state.product.productList)
  const homeProductCartList = productData.slice(1, 5)
  const homeProductCartListVegetable = productData.filter(el => el.category === "vegetable", [])

  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200
  }

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200

  }

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2' >
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F171%2F171253.png&f=1&nofb=1&ipt=098b5cd9daff2821e178981f69507537e6b351885cc201b8953af29c27aa332d&ipo=images' className='h-7' alt='bike' />
          </div>
          <h2 className='text-4xl md:text-7xl py-3 font-bold'>The Fasted Delivery in <span className='text-red-600'>Your Home</span></h2>
          <p className='py-3 textbase'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>

        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center' >
          {
            homeProductCartList[0] ? homeProductCartList.map(el => {
              return (

                <HomeCards
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />

              )
            }) :
              loadingArray.map((el, index) => {
                return (
                  <HomeCards
                    key={index}
                    loading={"loading..."}
                  />
                )
              })
          }
        </div>
      </div>

      <div className=''>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh Vegetables </h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {
            homeProductCartListVegetable[0] ? homeProductCartListVegetable.map(el => {
              return (

                <CardFeature
                  key={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              )
            })
              :

              loadingArrayFeature.map((el,index) => <CardFeature loading="loading..." key={index} />)

          }
        </div>
      </div>

      <AllProduct
        heading={'Your Products'} loading={"loading..."} />




    </div>
  )
}

export default Home;
