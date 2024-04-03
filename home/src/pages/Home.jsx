import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Product } from 'src/components'
import { styled } from 'styled-components'

const data = {
  name: 'Áo sơ mi oversize vạt lệt',
  gallery: [
    'https://file.hstatic.net/200000000131/file/hnasm022_f0c51406892f41c5a670d939e214547b.jpg',
    'https://product.hstatic.net/200000000131/product/d…2312_5e0f3aec610841e08bd19547f7bc40f6_grande.jpeg',
  ],
  price: 489000,
  sale: 10,
}

const Home = () => {
  return (
    <Wrapper>
      <Slider className="slider-main" autoplay slidesToShow={1} slidesToScroll={1} dots speed={500}>
        <Link>
          <img
            src="https://file.hstatic.net/200000000131/file/raw-hnoss-1920x870_85f1e44fc62e426db9d1df7559f3f2bc.jpg"
            alt=""
          />
        </Link>
        <Link>
          <img
            src="https://file.hstatic.net/200000000131/file/kv_sale_online_ngang_hnoss_f23d204c096f4af099276b77528a9c28.jpg"
            alt=""
          />
        </Link>
      </Slider>
      <NewArrivals>
        <div className="newarrivals-content">
          <Link to="/collections/san-pham-moi">
            <div className="title">
              <span>new</span>
              <span> arrivals </span>
            </div>
          </Link>
          <Row>
            <Col span={8}>
              <Product data={data} />
            </Col>
            <Col span={8}>
              <Product data={data} />
            </Col>
            <Col span={8}>
              <Product data={data} />
            </Col>
            <Col span={8}>
              <Product data={data} />
            </Col>
            <Col span={8}>
              <Product data={data} />
            </Col>
            <Col span={8}>
              <Product data={data} />
            </Col>
            <Col span={8}>
              <Product data={data} />
            </Col>
            <Col span={8}>
              <Product data={data} />
            </Col>
            <Col span={8}>
              <Product data={data} />
            </Col>
          </Row>
        </div>
      </NewArrivals>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .slider-main {
    width: 100%;
    overflow: hidden;
    margin-bottom: 77px;
    img {
      width: 100%;
    }
  }
`

const NewArrivals = styled.div`
  margin: auto 100px;
  .newarrivals-content {
    padding-left: 107px;
    padding-right: 107px;
    padding-top: 83px;
    padding-bottom: 128px;
    background-color: #fff;
    > a {
      text-decoration: none;
    }
    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      width: fit-content;
      margin: auto;
      > span {
        font-family: 'Flatline';
        font-weight: 500;
        text-transform: uppercase;
      }
      :first-child {
        color: #c58787;
        line-height: 50px;
        font-size: 100px;
      }
      :last-child {
        line-height: 100px;
        color: #323030;
        font-size: 70px;
      }
    }
  }
`

export default Home
