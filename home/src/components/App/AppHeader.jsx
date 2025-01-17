import React from 'react'
import { styled } from 'styled-components'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { SearchOutlined, ShoppingOutlined } from '@ant-design/icons'
import { AppNav } from '..'
import { useDispatch } from 'react-redux'
import { activeNav } from 'src/providers/navSlice'

const category = [
  { name: 'Áo', sub: ['ÁO KIỂU', 'ÁO SƠ MI', 'ÁO THUN', 'ÁO KHOÁC'] },
  { name: 'Đầm', sub: ['ĐẦM NGẮN', 'ĐẦM LỬNG', 'ĐẦM DÀI'] },
  { name: 'Váy', sub: ['VÁY NGẮN', 'VÁY LỬNG'] },
  { name: 'Quần', sub: ['QUẦN SHORT', 'QUẦN DÀI'] },
]

const AppHeader = () => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <AppNav data={category} />
      <div className="container">
        <Row>
          <Col span={10} className="header-menu">
            <ul className="menu-list">
              <li className="menu-item">
                <span id="menu-bar" onClick={() => dispatch(activeNav())}>
                  <span className="bar-site"></span>
                </span>
              </li>
              <li className="menu-item">
                <Link>Hàng mới</Link>
              </li>
              {category.map((item, idx) => (
                <li key={idx} className="menu-item">
                  <Link>{item.name}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col span={4} className="header-logo">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 754.76 179.99">
                <defs></defs>
                <title>Asset 1</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M304.95,90.16c0-9.49.26-19,0-28.48-.84-25.77,11.52-43.57,34.32-53.45C366.55-3.62,394.27-3,420.41,12.12c17.86,10.32,27.14,26.36,26.91,47.51-.22,19.82-.43,39.65.05,59.46.56,23.14-10,39.39-29.51,50.56-27.24,15.63-67.53,13.29-91.82-5.45-13.86-10.69-21.46-24.66-21.12-42.56C305.11,111.15,304.95,100.66,304.95,90.16Zm112.48.28h.26c0-11.33.4-22.68-.08-34-1.06-25.15-15.43-39.27-40.45-40-14-.39-26.42,3.23-34.94,15.4-5.44,7.77-7.74,16.56-7.79,25.92q-.14,32.24,0,64.49a45.65,45.65,0,0,0,5.42,22.1c8.85,16.13,26.8,23,48.1,18.43,16.29-3.49,28.37-17.51,29.36-35.41C418,115.13,417.43,102.77,417.43,90.44Z"
                    ></path>
                    <path
                      className="cls-2"
                      d="M169.3,40.16c0,5.93-.09,11.85,0,17.78.06,2.35-.64,3.21-3.07,3.17q-12-.19-24,0c-2.31,0-2.71-.94-2.7-3q.13-25.74,0-51.47c0-2.61.73-3.51,3.38-3.47,7.83.14,15.66.2,23.48,0,2.83-.08,3.7,1.69,4.82,3.51L240.93,120.3l12.51,20.43c1.78-1,.87-2.45.87-3.58.05-43.14.11-86.29,0-129.43,0-3.91,1.13-4.74,4.77-4.57a183,183,0,0,0,20,0c4.34-.28,5.16,1.25,5.16,5.24q-.18,80-.09,159.92c0,8.88,0,8.88-8.76,8.88-5.66,0-11.34-.19-17,.08-3.11.14-4.66-1-6.24-3.64Q212,107.71,171.6,42c-.43-.7-.91-1.35-1.37-2Z"
                    ></path>
                    <path
                      className="cls-3"
                      d="M.12,90.22C.12,63.06.25,35.91,0,8.76,0,4,1.44,2.91,5.85,3.14c6.48.35,13,.23,19.48,0C28.66,3,29.52,4,29.5,7.35c-.14,23.16.07,46.31-.19,69.47-.05,4.54,1.28,5.41,5.54,5.39C78,82,121.15,82.14,164.3,82c3.79,0,5.11.67,5.09,4.84q-.3,43,0,86c0,3.48-.91,4.57-4.4,4.44-7-.25-14-.23-21,0-3.38.11-4.46-.73-4.43-4.36.18-23.32,0-46.64.16-70,0-3.81-.77-5-4.84-5q-50.23.28-100.45,0c-4.34,0-5.12,1.35-5.08,5.36.21,23.15,0,46.31.2,69.47,0,3.42-.72,4.64-4.33,4.47a187.55,187.55,0,0,0-20,0c-4.17.26-5.25-1-5.23-5.08.18-27.32.09-54.64.09-82Z"
                    ></path>
                    <path
                      className="cls-2"
                      d="M511.92,177.15c-13.66,0-27.32-.12-41,.09-3.57.05-4.46-1.07-4.41-4.5.2-11.53.07-11.53,11.75-11.53,18.83,0,37.65,0,56.48,0,12.45,0,23.69-3.38,32.58-12.64a28.28,28.28,0,0,0-4.74-43c-10.28-6.78-22.24-8.65-33.82-11.63-12.23-3.15-24.72-5.4-36.49-10.18C468.91,74.19,459.1,53.25,468.2,31.8c5.39-12.7,15.89-19.71,28.53-23.93,10.71-3.58,21.82-4.55,33-4.61,16.16-.09,32.32,0,48.48-.12,3.46,0,5,.52,4.93,4.55-.19,11.59,0,11.43-11.65,11.54-17.82.16-35.65-.73-53.45.54A33.41,33.41,0,0,0,503,24.55C490.24,32.28,490.09,49,502.72,57,512,63,522.77,64.89,533.14,67.89c14,4.06,28.64,6.24,41.9,12.9,22.95,11.53,31.73,28.65,28,55-2.89,20.41-19.54,36.38-42.2,40.29-12.41,2.14-24.94.72-37.42,1.06C519.58,177.24,515.75,177.15,511.92,177.15Z"
                    ></path>
                    <path
                      className="cls-2"
                      d="M663.1,177.17c-13.83,0-27.66-.08-41.48.07-3,0-3.92-.63-3.94-3.82-.07-12.21-.21-12.21,12.15-12.21,18.83,0,37.65.08,56.48,0,12.82-.09,24.33-3.74,33.07-13.68,11.37-12.92,8.12-33.55-6.51-42.52-8.83-5.41-18.73-7.61-28.6-10-12.91-3.18-26-5.8-38.52-10.33-7.43-2.69-14.26-6.49-19.7-12.37-16.49-17.82-11.92-45.91,9.54-58.76,13.8-8.27,29.14-10,44.76-10.19,16.49-.2,33,.06,49.48-.14,3.61,0,4.44,1.12,4.42,4.5-.06,11.61,0,11.47-11.45,11.59-17.82.18-35.65-.69-53.45.51a32.52,32.52,0,0,0-16,5.23c-11.9,7.86-11.74,24.41.34,32.08,9.3,5.9,20,7.85,30.41,10.84,14.52,4.18,29.58,6.5,43.25,13.55,21.16,10.91,29.32,26.27,27,51.8-1.77,19.52-15.36,35.26-35.57,41.23a68.36,68.36,0,0,1-19.72,2.73C687.09,177.13,675.09,177.16,663.1,177.17Z"
                    ></path>
                  </g>
                </g>
              </svg>
            </Link>
          </Col>
          <Col span={10} className="header-action">
            <div className="header-action-item">
              <form action="">
                <button>
                  <SearchOutlined />
                </button>
                <input type="text" />
              </form>
            </div>
            <div className="header-action-item">
              <ShoppingOutlined />
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 110px;
  width: 100%;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fbefee;
  .container {
    margin: auto 31px;
    .ant-row {
      height: 110px;
      align-items: center;
    }
    .header-menu {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 25px;
        li {
          text-transform: uppercase;
          a {
            color: #252a2b;
            display: block;
            font-size: 11px;
            font-weight: 500;
          }
        }
      }
    }
    .header-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: inline-block;
        color: #323030;
      }
      svg {
        width: 140px;
        height: 27px;
      }
    }
    .header-action {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
      .header-action-item {
        svg {
          color: #252a2b;
          font-size: 20px;
          cursor: pointer;
        }
        form {
          padding: 3px 2px;
          height: 100%;
          display: inline-block;
          border: 2px solid #323030;
          border-radius: 100px;
          text-align: center;
          margin: 0 0 0 8px;
          position: relative;
          width: 200px;
          height: 40px;
          button,
          input {
            background: transparent;
            outline: none;
            border: none;
            height: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          button {
            width: 20px;
            left: 0;
            padding: 10px;
          }
          input {
            left: 35px;
            width: calc(100% - 35px);
          }
        }
      }
    }
  }
`

export default AppHeader
