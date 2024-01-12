import React, { useEffect, useState } from 'react'
import CardFeature from './CardFeature'
import FilterProduct from './FilterProduct'
import { useSelector } from 'react-redux'

const AllProduct = ({ heading, loading }) => {
  const productData = useSelector((state) => state.product.productList)
  const categoryList = [...new Set(productData.map(el => el.category))]
  const loadingArrayFeature = new Array(10).fill(null);

  //filter data display
  const [filterby,setFilterBy]=useState("");
  const [dataFilter, setDataFilter] = useState([])

  useEffect(() => {
    setDataFilter(productData)
  }, [productData])

  const handleFilterProduct = (category) => {
    setFilterBy(category)
    setDataFilter(() => {
      const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
      return [
        ...filter
      ]
    })
  }

  return (
    <div className='my-5'>
      <h2 className='font-bold text-2xl text-slate-800 mb-4'>{heading}</h2>

      <div className='flex gap-4 justify-center overflow-scroll scrollbar-none'>
        {
          categoryList[0] ?
            categoryList.map((el,index) => {
              return (
                <FilterProduct key={index} category={el} isActive={el.toLowerCase() === filterby.toLowerCase()} onClick={() => handleFilterProduct(el)} />
              )
            })
            :
            (<div className='min-h-[150px] flex justify-center items-center'>
              <p>{loading}</p>
            </div>)
        }
      </div>

      <div className='flex flex-wrap justify-center gap-4 my-4'>
        {
          dataFilter[0] ?
          dataFilter.map(el => {
            return (
              <CardFeature
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                category={el.category}
                price={el.price}
              />
            )
          })
          :
          loadingArrayFeature.map((el,index) => <CardFeature loading="loading..." key={index} />)
        }
      </div>

    </div>
  )
}

export default AllProduct
