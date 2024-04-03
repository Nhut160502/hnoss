import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Product = (props) => {
  const { data } = props
  return (
    <Wrapper>
      <Link className="product-image">
        <img src={data?.gallery[0]} alt="" />
        {/* <img src={data?.gallery[1]} alt="" /> */}
      </Link>
      <div className="product-infor">
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Product
