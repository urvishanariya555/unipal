import morningImg from '../assets/img/sunrise.svg'
import my_order from '../assets/img/my_order.svg'
import calendarDateIcon from '../assets/img/date.svg'
import TimerIcon from '../assets/img/access_time.svg'
import circle_right_arrow_blue from '../assets/img/circle_right_arrow_blue.svg'
import circle_right_arrow_pink from '../assets/img/circle_right_arrow_pink.svg'
import circle_right_arrow_orange from '../assets/img/circle_right_arrow_orange.svg'
import connectIcon from '../assets/img/connect.svg'
import homeActive from '../assets/footer-mobile/home_active.svg'
import profileIcon from '../assets/footer-mobile/My_Profile.svg'
import localOfferIcon from '../assets/footer-mobile/local_offer.svg'
import newsLaterIcon from '../assets/footer-mobile/Newspaper.svg'
import HelpFooterIcon from '../assets/footer-mobile/help_outline.svg'
import feeds_menu_image from '../assets/img/feeds_menu_image.png'
import arrowDownIcon from '../assets/img/keyboard_arrow_down.svg'
import playGif from '../assets/img/play.gif'
import closeIcon from '../assets/img/close_small.svg'
import new_order from '../assets/img/new_order.svg'
import customizeOrderImg from '../assets/img/customize-order.svg'
import quickOrderImg from '../assets/img/quick-order.svg'
import backarrowIcon from '../assets/img/backarrow.svg'
import uploadIcon from '../assets/img/upload.svg'
import addIconButton from '../assets/img/addIcon.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import * as React from 'react'

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

const Feeds = () => {
  const [quickOrderShow, setQuickOrderShow] = useState(false)
  const [quickOrderListShow, setQuickOrderListShow] = useState(false)
  const [customOrderShow, setCustomOrderShow] = useState(false)
  const [customOrderListShow, setCustomOrderListShow] = useState(false)

  const [openOrderMenuDialog, setOpenOrderMenuDialog] = React.useState(false);

  const handleOpenOrderMenuDialog = () => {
    setOpenOrderMenuDialog(true);
  };

  const handleOrderMenuClose = () => {
    setOpenOrderMenuDialog(false);
  };

  return (
    <>
      <div className="p-[30px] min-h-[calc(100vh_-_91px)] max-w-[calc(100vw_-_306px)] min-[1920px]:max-w-[calc(100vw_-_298px)] overflow-hidden max-[991px]:max-w-[100vw]">
        {!quickOrderShow && !customOrderShow &&
          <div className='w-full'>
            <div className="text-[20px] font-bold flex items-center gap-[10px] mb-[20px]">
              Hi <span className="text-[#9878DE]">John,</span> Good Morning
              <img src={morningImg} alt="morningImg" />
            </div>
            <div className='mt-[25px]'>
              <div className="pb-[15px] flex flex-between">
                <div className='text-[20px] max-[767px]:text-[16px] text-[#000] font-bold flex-1'>How It's Work?</div>
              </div>
              <Swiper
                spaceBetween={37}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  }
                }}
              >
                <SwiperSlide>
                  <div
                    className='feature-card relative cursor-pointer p-0 border-none overflow-hidden'
                  >
                    <img src={feeds_menu_image} alt='feeds_menu_image' className='h-[190px] w-full rounded-[10px] overflow-hidden' />
                    <div className='translate-center z-10'>
                      <img src={playGif} alt='playGif' className='' />
                      <div className='absolute top-0 min-[1500px]:top-[20px] min-w-[120px] left-0 w-full h-full text-[#fff] font-[700] flex justify-center'>How It's Work?</div>
                    </div>
                    <div className='bg-[#00000080] w-full h-full absolute top-0 left-0'></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className='feature-card relative cursor-pointer min-h-[190px] flex flex-col justify-between'
                    onClick={handleOpenOrderMenuDialog}
                  >
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#7aa0ff59] mb-[42px]'>
                      <img src={new_order} alt='new_order' className='h-[36px]' />
                    </div>
                    <div className='text-[22px] text-[#000] font-bold flex items-center justify-between'>New Order
                      <img src={circle_right_arrow_blue} alt='circle_right_arrow_blue' />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='feature-card relative cursor-pointer min-h-[190px] flex flex-col justify-between'>
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#ff80a159] mb-[42px]'>
                      <img src={my_order} alt='my_order' className='h-[36px]' />
                    </div>
                    <div className='text-[22px] text-[#000] font-bold flex items-center justify-between'>My Oredrs
                      <img src={circle_right_arrow_pink} alt='circle_right_arrow_pink' />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='feature-card relative min-h-[190px] flex flex-col justify-between'>
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#ff8b0f59]'>
                      <img src={connectIcon} alt='Chat' className='h-[36px]' />
                    </div>
                    <div className='text-[22px] text-[#000] font-bold flex items-center justify-between'>Connect
                      <img src={circle_right_arrow_orange} alt='circle_right_arrow_orange' />
                    </div>
                    <div className='texxt-[#808080] text-[14px] font-[500]'>We are here to discuss about your new tasks & Existing Offers</div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        }
        {quickOrderShow &&
          <>
            {!quickOrderListShow &&
              <div>
                <div className="text-[24px] font-bold flex items-center gap-[10px] mb-[24px]" >
                  <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                    onClick={() => setQuickOrderShow(false)} />
                  Quick Order
                </div>
                <div className='grid grid-cols-2'>
                  <div className='bg-[#fff] shadow-sm rounded-[10px] px-[30px] py-[20px]'>
                    <form>
                      <div className='grid grid-cols-2 gap-y-[20px]'>
                        <div className='text-[#878C8F] text-[14px]'>Domain</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="Chemistry"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <a className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" href="javascript:void(0)">
                                <img src={arrowDownIcon} alt='arrowDownIcon' className='min-w-[20px] h-[20px]' />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Service Type</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="Assignment"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" >
                                <img src={arrowDownIcon} alt='arrowDownIcon' className='min-w-[20px] h-[20px]' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Deliverable</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="5000 Words"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Tools</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="Tools"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <a className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" href="javascript:void(0)">
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Deadline Date</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="15 March 2023"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" >
                                <img src={calendarDateIcon} alt='calendarDateIcon' className='min-w-[20px] h-[20px]' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Deadline Time</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="05:00 AM"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" >
                                <img src={TimerIcon} alt='TimerIcon' className='min-w-[20px] h-[20px]' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Deadline Time Zone</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="Kolkata, West Bengal (GMT+5:30)"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" >
                                <img src={arrowDownIcon} alt='arrowDownIcon' className='min-w-[20px] h-[20px]' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Package</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="Standard"
                              readOnly
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" >
                                <img src={arrowDownIcon} alt='arrowDownIcon' className='min-w-[20px] h-[20px]' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                        <div onClick={() => setQuickOrderListShow(true)} className='w-full bg-[#000] cursor-pointer rounded-[12px] font-[600] py-[18px] text-[#fff] text-[16px] text-center'>
                          Submit
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            }
            {quickOrderListShow &&
              <div>
                <div className="text-[24px] font-bold flex items-center gap-[10px] mb-[24px]" >
                  <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                    onClick={() => setQuickOrderListShow(false)} />
                  Quick Order
                </div>
                <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-[25px] gap-y-[5px]">
                  <div className='order-card relative cursor-pointer'
                  >
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Domain</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Chemistry</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Service Type</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Assignment</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Package</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Standard</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Deliverable</div>
                      <div className='text-[#000] font-[600] text-[16px]'>5000 Words</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Total Amount</div>
                      <div className='text-[#000] font-[600] text-[16px]'>£200.00</div>
                    </div>
                    <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                      Payment Due
                    </div>
                  </div>
                  <div className='order-card relative cursor-pointer'
                  >
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Domain</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Chemistry</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Service Type</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Assignment</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Package</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Standard</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Deliverable</div>
                      <div className='text-[#000] font-[600] text-[16px]'>5000 Words</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Total Amount</div>
                      <div className='text-[#000] font-[600] text-[16px]'>£200.00</div>
                    </div>
                    <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                      Payment Due
                    </div>
                  </div>
                  <div className='order-card relative cursor-pointer'
                  >
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Domain</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Chemistry</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Service Type</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Assignment</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Package</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Standard</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Deliverable</div>
                      <div className='text-[#000] font-[600] text-[16px]'>5000 Words</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Total Amount</div>
                      <div className='text-[#000] font-[600] text-[16px]'>£200.00</div>
                    </div>
                    <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                      Payment Due
                    </div>
                  </div>
                  <div className='order-card relative cursor-pointer'
                  >
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Domain</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Chemistry</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Service Type</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Assignment</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Package</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Standard</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Deliverable</div>
                      <div className='text-[#000] font-[600] text-[16px]'>5000 Words</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Total Amount</div>
                      <div className='text-[#000] font-[600] text-[16px]'>£200.00</div>
                    </div>
                    <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                      Payment Due
                    </div>
                  </div>
                  <div className='order-card relative cursor-pointer'
                  >
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Domain</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Chemistry</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Service Type</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Assignment</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Package</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Standard</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Deliverable</div>
                      <div className='text-[#000] font-[600] text-[16px]'>5000 Words</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Total Amount</div>
                      <div className='text-[#000] font-[600] text-[16px]'>£200.00</div>
                    </div>
                    <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                      Payment Due
                    </div>
                  </div>
                </div>
                <div className='fixed bottom-[40px] right-[40px] cursor-pointer z-10'
                  onClick={() => setQuickOrderListShow(false)} >
                  <img src={addIconButton} alt='addIconButton' />
                </div>
              </div>
            }
          </>
        }
        {customOrderShow &&
          <>
            {!customOrderListShow &&
              <>
                <div className="text-[24px] font-bold flex items-center gap-[10px] mb-[24px]" >
                  <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                    onClick={() => setCustomOrderShow(false)} />
                  New Order
                </div>
                <div className='grid grid-cols-2'>
                  <div className='bg-[#fff] shadow-sm rounded-[10px] px-[30px] py-[20px]'>
                    <form>
                      <div className='grid grid-cols-2 gap-y-[20px]'>
                        <div className='text-[#878C8F] text-[14px]'>Domain</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="Chemistry"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <a className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" href="javascript:void(0)">
                                <img src={arrowDownIcon} alt='arrowDownIcon' className='min-w-[20px] h-[20px]' />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Service Type</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="Assignment"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" >
                                <img src={arrowDownIcon} alt='arrowDownIcon' className='min-w-[20px] h-[20px]' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Deliverable (In Words)</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="5000 Words"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]">
                              </div>
                            </div>
                          </div>
                          <div className='text-[14px] text-[#878C8F] pt-[5px]'>We consider, 1 Page = 200-250 words.</div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Tools</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="Tools"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <a className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" href="javascript:void(0)">
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Deadline Date</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="15 March 2023"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" >
                                <img src={calendarDateIcon} alt='calendarDateIcon' className='min-w-[20px] h-[20px]' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Deadline Time</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="05:00 AM"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" >
                                <img src={TimerIcon} alt='TimerIcon' className='min-w-[20px] h-[20px]' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Deadline Time Zone</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="Kolkata, West Bengal (GMT+5:30)"
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" >
                                <img src={arrowDownIcon} alt='arrowDownIcon' className='min-w-[20px] h-[20px]' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Attach Documents</div>
                        <div className="flex items-center gap-[10px]">
                          <div className='bg-[#BDBDBD] p-[15px] text-[14px] font-[600] w-[115px] rounded-[10px] flex gap-[15px]'>
                            Upload
                            <img src={uploadIcon} alt='uploadIcon' />
                          </div>
                          <div className='text-[14px] font-[400]'>Browse your file</div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Package</div>
                        <div className="">
                          <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">
                            <input
                              type="text"
                              placeholder="Standard"
                              readOnly
                              className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                            <div className="dropdown">
                              <div className="flex items-center rounded-l-[0px] mr-[15px] h-[50px]" >
                                <img src={arrowDownIcon} alt='arrowDownIcon' className='min-w-[20px] h-[20px]' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                        <div onClick={() => setCustomOrderListShow(true)} className='w-full bg-[#000] cursor-pointer rounded-[12px] font-[600] py-[18px] text-[#fff] text-[16px] text-center'>
                          Submit
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            }
            {customOrderListShow &&
              <div>
                <div className="text-[24px] font-bold flex items-center gap-[10px] mb-[24px]" >
                  <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                    onClick={() => setCustomOrderListShow(false)} />
                  Customize Order
                </div>
                <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-[25px] gap-y-[5px]">
                  <div className='order-card relative cursor-pointer'
                  >
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Domain</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Chemistry</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Service Type</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Assignment</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Package</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Standard</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Deliverable</div>
                      <div className='text-[#000] font-[600] text-[16px]'>5000 Words</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Total Amount</div>
                      <div className='text-[#000] font-[600] text-[16px]'>£200.00</div>
                    </div>
                    <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                      Payment Due
                    </div>
                  </div>
                  <div className='order-card relative cursor-pointer'
                  >
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Domain</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Chemistry</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Service Type</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Assignment</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Package</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Standard</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Deliverable</div>
                      <div className='text-[#000] font-[600] text-[16px]'>5000 Words</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Total Amount</div>
                      <div className='text-[#000] font-[600] text-[16px]'>£200.00</div>
                    </div>
                    <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                      Payment Due
                    </div>
                  </div>
                  <div className='order-card relative cursor-pointer'
                  >
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Domain</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Chemistry</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Service Type</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Assignment</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Package</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Standard</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Deliverable</div>
                      <div className='text-[#000] font-[600] text-[16px]'>5000 Words</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Total Amount</div>
                      <div className='text-[#000] font-[600] text-[16px]'>£200.00</div>
                    </div>
                    <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                      Payment Due
                    </div>
                  </div>
                  <div className='order-card relative cursor-pointer'
                  >
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Domain</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Chemistry</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Service Type</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Assignment</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Package</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Standard</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Deliverable</div>
                      <div className='text-[#000] font-[600] text-[16px]'>5000 Words</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Total Amount</div>
                      <div className='text-[#000] font-[600] text-[16px]'>£200.00</div>
                    </div>
                    <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                      Payment Due
                    </div>
                  </div>
                  <div className='order-card relative cursor-pointer'
                  >
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Domain</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Chemistry</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Service Type</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Assignment</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Package</div>
                      <div className='text-[#000] font-[600] text-[16px]'>Standard</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Deliverable</div>
                      <div className='text-[#000] font-[600] text-[16px]'>5000 Words</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-[#808080] font-[500] text-[16px]'>Total Amount</div>
                      <div className='text-[#000] font-[600] text-[16px]'>£200.00</div>
                    </div>
                    <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                      Payment Due
                    </div>
                  </div>
                </div>
                <div className='fixed bottom-[40px] right-[40px] cursor-pointer z-10'
                  onClick={() => setCustomOrderListShow(false)} >
                  <img src={addIconButton} alt='addIconButton' />
                </div>
              </div>
            }
          </>
        }
      </div>
      {!quickOrderShow && !customOrderShow &&
        <Dialog
          open={openOrderMenuDialog}
          onClose={handleOrderMenuClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className='dialog-text dialog-wrapper'
        >
          <div className='relative mt-[20px] w-full'>
            <div className='bg-[#D9D9D9] rounded-[10px] w-[50px] h-[5px] mx-auto'></div>
            <img src={closeIcon} className='absolute right-[13px] top-[-7px] cursor-pointer' onClick={handleOrderMenuClose} />
          </div>
          <DialogContent>
            <div className='flex flex-1 gap-[19px] mt-[15px] mb-[25px] '>
              <div className='p-[15px] w-[158px] flex flex-col justify-between items-center 
            h-[130px] bg-[#F3F3F3] cursor-pointer rounded-[7px] border border-[#99999933] 
            hover:border-[#000] font-[700] text-[#000] text-[14px]'
                onClick={() => setQuickOrderShow(true)}
              >
                <div className='bg-[#fff] rounded-[64px] h-[64px] w-[64px] flex items-center justify-center'>
                  <img src={quickOrderImg} alt='quickOrderImg' className='h-[44px]' />
                </div>
                Quick Order
              </div>
              <div className='p-[15px] w-[158px] flex flex-col justify-between items-center
             h-[130px] bg-[#F3F3F3] cursor-pointer rounded-[7px] border border-[#99999933] 
             hover:border-[#000] font-[700] text-[#000] text-[14px]'
                onClick={() => setCustomOrderShow(true)}
              >
                <div className='bg-[#fff] rounded-[64px] h-[64px] w-[64px] flex items-center justify-center'>
                  <img src={customizeOrderImg} alt='quickOrderImg' />
                </div>
                Customize Order
              </div>
            </div>
            <div onClick={handleOrderMenuClose} className='w-full bg-[#000] cursor-pointer rounded-[12px] font-[600] py-[18px] text-[#fff] text-[16px] text-center'>
              Next
            </div>
          </DialogContent>
        </Dialog>
      }
      <footer className='sticky bottom-0 w-full bg-[#fff] h-[60px] z-10 min-[992px]:hidden'>
        <div className='grid grid-cols-5 h-full'>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div className='absolute top-0 w-full h-[2px] bg-[#9878DE]'></div>
            <div><img src={homeActive} alt='homeActive' /></div>
            <div className='text-[12px] text-[#9878DE] font-medium'>Home</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={newsLaterIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Feeds</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={HelpFooterIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Help Me</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={localOfferIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Offers</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={profileIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Profile</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Feeds;
