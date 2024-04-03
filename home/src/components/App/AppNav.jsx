import { CloseOutlined, DownOutlined } from '@ant-design/icons'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import AnimateHeight from 'react-animate-height'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { disActiceNav } from 'src/providers/navSlice'
import { styled } from 'styled-components'

const AppNav = (props) => {
  const { data } = props
  const dispatch = useDispatch()
  const [activeSub, setActiveSub] = useState(null)
  const nav = useSelector((state) => state?.nav?.active)

  useEffect(() => {
    dispatch(disActiceNav())
  }, [dispatch])

  const handleOpenSub = (name) => {
    if (name === activeSub) setActiveSub(null)
    else setActiveSub(name)
  }

  return (
    <Wrapper className={nav && 'active'}>
      <div className="navigation-container">
        <div className="navigation-close">
          <CloseOutlined onClick={() => dispatch(disActiceNav())} />
        </div>
        <div className="navigation-content">
          <ul className="navigation-menu">
            <li className="navigation-item">
              <Link>Hàng mới</Link>
            </li>
            {data?.map((item, idx) => (
              <li key={idx} className="navigation-item">
                <Link>
                  <span>{item.name}</span>
                  {item.sub && <DownOutlined onClick={(e) => handleOpenSub(item.name)} />}
                </Link>
                {item.sub && (
                  <AnimateHeight height={activeSub === item.name ? 'auto' : 0}>
                    <ul className="navigation-sub">
                      {item.sub.map((sub) => (
                        <li key={sub} className="navigation-sub-item">
                          <Link>
                            <span>{sub}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AnimateHeight>
                )}
              </li>
            ))}
            <li className="navigation-item">
              <Link>SHOWROOM</Link>
            </li>
            <li className="navigation-item">
              <Link>CHÍNH SÁCH KHTT</Link>
            </li>
            <li className="navigation-item">
              <Link>CHÍNH SÁCH ĐỔI TRẢ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navigation-overlay" onClick={() => dispatch(disActiceNav())}></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  background: transparent;
  opacity: 0.95;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  z-index: 999;
  width: 100%;
  display: flex;
  left: -100%;
  transition: all 0.3s;
  &.active {
    left: 0;
  }
  .navigation-container {
    width: 480px;
    height: 100%;
    padding-left: 82px;
    padding-top: 52px;
    padding-right: 30px;
    background-color: #fff;
    transition: all 0.3s;

    .navigation-close {
      margin-left: 12px;
      font-size: 30px;
      cursor: pointer;
    }
    .navigation-content {
      transition: all 0.3s;
      margin: 0;
      .navigation-menu {
        border-left: 2px solid #f0e5e6;
        padding-left: 18px;
        margin-bottom: 50px;
        margin-top: 32px;
        .navigation-item {
          white-space: nowrap;
          margin-bottom: 13px;
          padding-left: 5px;
          a {
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            text-decoration: none;
            color: #323030;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            svg {
              font-size: 10px;
            }
          }
        }
      }
      .navigation-sub {
        margin-bottom: 15px;
        margin-left: 8px;
        margin-top: 15px;
        .navigation-sub-item {
          margin-bottom: 13px;
        }
      }
    }
  }
  .navigation-overlay {
    width: calc(100% - 480px);
    height: 100%;
    background: transparent;
  }
`

export default AppNav
