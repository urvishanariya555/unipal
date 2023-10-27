import morningImg from '../assets/img/sunrise.svg'
import my_order from '../assets/img/my_order.svg'
import calendarDateIcon from '../assets/img/date.svg'
import TimerIcon from '../assets/img/access_time.svg'
import circle_right_arrow_blue from '../assets/img/circle_right_arrow_blue.svg'
import circle_right_arrow_pink from '../assets/img/circle_right_arrow_pink.svg'
import circle_right_arrow_orange from '../assets/img/circle_right_arrow_orange.svg'
import connectIcon from '../assets/img/connect.svg'
import checkmarkWhite from '../assets/img/checkmarkWhite.svg'
import QuestionMarkCircle from '../assets/img/Question-mark-circle.svg'
import home_outline from '../assets/footer-mobile/home_outline.svg'
import profileIcon from '../assets/footer-mobile/My_Profile.svg'
import localOfferIcon from '../assets/footer-mobile/local_offer.svg'
import newsLaterIcon from '../assets/footer-mobile/Newspaper.svg'
import help_outline_active from '../assets/footer-mobile/help_outline_active.svg'
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
import paymentSuccessImg from '../assets/img/payment_success.gif'
import check_box_outline_blank from '../assets/img/check_box_outline_blank.svg'
import user_chat from '../assets/img/user_chat.png'
import Dots_vertical from '../assets/img/Dots_vertical.svg'
import ClipImage from '../assets/img/Clip.svg'
import locationImage from '../assets/img/location.png'
import Searchchat from '../assets/img/Searchchat.svg'
import { useState } from 'react'
import * as React from 'react'
import { useNavigate } from "react-router-dom";

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { Checkbox, FormControlLabel } from '@mui/material'

const HelpMe = () => {
  const navigate = useNavigate();
  const [invoiceShow, setInvoiceShow] = useState(false)
  const [chatShow, setChatShow] = useState(false)
  const [myOrderShow, setmyOrderShow] = useState(false)
  const [applyCodeshow, setApplyCodeshow] = useState(false)
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

  const [paymentModalDialog, setPaymentModalDialog] = React.useState(false);

  const handlePaymentModalDialog = () => {
    setPaymentModalDialog(true);
  };

  const handlePaymentModalClose = () => {
    setPaymentModalDialog(false);
    setmyOrderShow(true);
  };

  return (
    <>
      <div className="p-lg-[30px] p-[16px] min-h-[calc(100vh_-_60px)] min-[992px]:min-h-[calc(100vh_-_91px)] max-w-[calc(100vw_-_306px)] min-[1920px]:max-w-[calc(100vw_-_298px)] overflow-hidden max-[991px]:max-w-[100vw]">
        {!quickOrderShow && !customOrderShow && !invoiceShow && !chatShow &&
          <div className='w-full'>
            <div className="text-[20px] font-bold flex items-center gap-[10px] mb-[20px]">
              Hi <span className="text-[#9878DE]">John,</span> Good Morning
              <img src={morningImg} alt="morningImg" />
            </div>
            <div className='mt-[25px]'>
              <div className="pb-[15px] flex flex-between">
                <div className='text-[20px] max-[767px]:text-[16px] text-[#000] font-bold flex-1'>How It's Work?</div>
              </div>
              <div className="grid grid-cols-8 gap-y-[20px] gap-x-[30px] max-[767px]:gap-x-[10px]">
                <div className='col-span-2 max-[767px]:col-span-8'>
                  <div
                    className='feature-card relative cursor-pointer p-0 border-none overflow-hidden'
                  >
                    <img src={feeds_menu_image} alt='feeds_menu_image' className='h-[190px] w-full rounded-[10px] overflow-hidden' />
                    <div className='translate-center z-10'>
                      <img src={playGif} alt='playGif' className='' />
                      <div className='absolute top-10 min-[767px]:top-2 min-[1500px]:top-[20px] min-w-[120px] left-0 w-full h-full text-[#fff] font-[700] flex justify-center'>How It's Work?</div>
                    </div>
                    <div className='bg-[#00000080] w-full h-full absolute top-0 left-0'></div>
                  </div>
                </div>
                <div className='col-span-2 max-[767px]:col-span-4'>
                  <div
                    className='feature-card relative cursor-pointer min-h-[190px] flex flex-col justify-between'
                    onClick={handleOpenOrderMenuDialog}
                  >
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#7aa0ff59] mb-[42px]'>
                      <img src={new_order} alt='new_order' className='h-[36px]' />
                    </div>
                    <div className='text-[16px] sm:text-[22px] text-[#000] font-bold flex items-center justify-between'>New Order
                      <img src={circle_right_arrow_blue} alt='circle_right_arrow_blue' />
                    </div>
                  </div>
                </div>
                <div className='col-span-2 max-[767px]:col-span-4' >
                  <div
                    className='feature-card pink-border relative cursor-pointer min-h-[190px] 
                  flex flex-col justify-between cursor-pointer'
                    onClick={() => setInvoiceShow(true)}
                  >
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#ff80a159] mb-[42px]'>
                      <img src={my_order} alt='my_order' className='h-[36px]' />
                    </div>
                    <div className='text-[16px] sm:text-[22px] text-[#000] font-bold flex items-center justify-between'>My Oredrs
                      <img src={circle_right_arrow_pink} alt='circle_right_arrow_pink' />
                    </div>
                  </div>
                </div>
                <div className='col-span-2 max-[767px]:col-span-8'>
                  <div className='feature-card orange-border relative min-h-[190px] flex flex-col justify-between cursor-pointer' onClick={() => setChatShow(true)}>
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#ff8b0f59]'>
                      <img src={connectIcon} alt='Chat' className='h-[36px]' />
                    </div>
                    <div className='text-[16px] sm:text-[22px] text-[#000] font-bold flex items-center justify-between'>Connect
                      <img src={circle_right_arrow_orange} alt='circle_right_arrow_orange' />
                    </div>
                    <div className='texxt-[#808080] text-[12px] sm:text-[14px] font-[500]'>We are here to discuss about your new tasks & Existing Offers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {chatShow &&
          <>
            <div>
              <div className="text-[20px] lg:text-[24px] font-bold flex items-center gap-[10px] mb-[24px]" >
                <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                  onClick={() => setChatShow(false)} />
                chat
              </div>
              <div className='grid grid-cols-12 gap-[10px] md:gap-[30px]'>
                <div className='col-span-12 md:col-span-5 xl:col-span-4'>
                  <div className='bg-[#fff] px-[16px] py-[14px] md:py-[28px] rounded-[12px] h-full'>
                    <div className='flex-1 w-full relative'>
                      <input placeholder='Search' className='bg-[#F3F6F9] w-full rounded-[9px] h-[45px] border-none outline-none pr-3 pl-[40px]' />
                      <img src={Searchchat} alt='Searchchat' className='top-[15px] left-[10px] absolute' />
                    </div>
                    <div className='flex items-center justify-between pt-[10px] md:pt-[30px]'>
                      <div>
                        <div className='text-[#181C32] text-[20px] font-[700]'>New Contibutors</div>
                        <div className='text-[#B5B5C3] text-[14px] font-[500] pt-[3px]'>From total 482 Participants</div>
                      </div>
                      <div className='bg-[#F5F8FA] text-[#A1A5B7] rounded-[6px] px-[16px] py-[10px]'>
                        View All
                      </div>
                    </div>
                    <div className='flex flex-col gap-[20px] pt-[20px] h-[calc(100vh_-_403px)] overflow-auto'>
                      <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-[20px]'>
                          <div>
                            <img src={user_chat} alt='user_chat' className='h-[36px] w-[36px] min-w-[36px] rounded-[36px]' />
                          </div>
                          <div>
                            <div className='text-[16px] text-[#3F4254] font-[500]'>Karina Clark</div>
                            <div className='text-[13px] text-[#B5B5C3] font-[500]'>8 Pending & 97 Completed Tasks</div>
                          </div>
                        </div>
                        <div className='cursor-pointer'>
                          <div className='bg-[#F5F8FA] rounded-[6px] text-[#A1A5B7] px-[12px] py-[6px]'>8</div>
                        </div>
                      </div>
                      <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-[20px]'>
                          <div>
                            <img src={user_chat} alt='user_chat' className='h-[36px] w-[36px] min-w-[36px] rounded-[36px]' />
                          </div>
                          <div>
                            <div className='text-[16px] text-[#3F4254] font-[500]'>Karina Clark</div>
                            <div className='text-[13px] text-[#B5B5C3] font-[500]'>8 Pending & 97 Completed Tasks</div>
                          </div>
                        </div>
                        <div className='cursor-pointer'>
                          <div className='bg-[#F5F8FA] rounded-[6px] text-[#A1A5B7] px-[12px] py-[6px]'>8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-7 xl:col-span-8'>
                  <div className='bg-[#fff] rounded-[12px] '>
                    <div className='pl-[28px] pr-[20px] py-[20px] flex justify-between items-center'>
                      <div className='flex items-center gap-[20px]'>
                        <div>
                          <img src={user_chat} alt='user_chat' className='h-[36px] w-[36px] min-w-[36px] rounded-[36px]' />
                        </div>
                        <div>
                          <div className='text-[16px] text-[#3F4254] font-[500]'>Karina Clark</div>
                          <div className='text-[13px] text-[#B5B5C3] font-[500]'>8 Pending & 97 Completed Tasks</div>
                        </div>
                      </div>
                      <div className='cursor-pointer'>
                        <img src={Dots_vertical} alt='Dots_vertical' />
                      </div>
                    </div>
                    <div className='bg-[#EEEFF3] h-[1px] w-full'></div>
                    <div className='p-[20px] h-[calc(100vh_-_380px)] overflow-auto'>
                      <div className='flex-1 text-left pb-[20px]'>
                        <div className='flex justify-start flex-col items-start'>
                          <div className='bg-[#f1f1f1] rounded-t-[15px] rounded-br-[15px] 
                          flex flex-col px-[10px] py-[8px] w-[65%]'>
                            <div className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio matt.</div>
                            <div className='text-right text-[#A1A1BC] text-[12px] font-[500]'>05:15 pm</div>
                          </div>
                          <div className='pt-[3px] text-[#A1A1BC] text-[10px]'>Seen</div>
                        </div>
                      </div>
                      <div className='flex-1 text-right pb-[20px]'>
                        <div className='flex justify-end flex-col items-end'>
                          <div className='bg-[#D4F0E5] rounded-t-[15px] rounded-bl-[15px] 
                          flex flex-col px-[10px] py-[8px] w-[65%]'>
                            <div className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio matt.</div>
                            <div className='text-right text-[#A1A1BC] text-[12px] font-[500]'>05:15 pm</div>
                          </div>
                          <div className='pt-[3px] text-[#A1A1BC] text-[10px]'>Seen</div>
                        </div>
                      </div>
                    </div>
                    <div className='bg-[#EEEFF3] h-[1px] w-full'></div>
                    <div className='px-[10px] md:px-[20px] py-[10px] md:py-[16px] flex items-center gap-[10px] md:gap-[28px]'>
                      <div className='flex items-center gap-[8px] md:gap-[15px]'>
                        <div>
                          <img src={ClipImage} alt='ClipImg' className='min-w-[24px]' />
                        </div>
                        <div>
                          <img src={locationImage} alt='locationImage' className='min-w-[24px]' />
                        </div>
                      </div>
                      <div className='flex gap-[10px] md:gap-[24px] w-full '>
                        <div className='flex-1 w-full'>
                          <input className='bg-[#F3F6F9] w-full rounded-[9px] h-[45px] border-none outline-none px-3' />
                        </div>
                        <div className='bg-[#6993FF] rounded-[6px] text-[#fff] text-[13px] h-[45px] w-[60px] md:w-[90px] flex items-center justify-center'>Send</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
        {quickOrderShow &&
          <>
            {!quickOrderListShow &&
              <div>
                <div className="text-[20px] lg:text-[24px] font-bold flex items-center gap-[10px] mb-[24px]" >
                  <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                    onClick={() => setQuickOrderShow(false)} />
                  Quick Order
                </div>
                <div className='lg:grid lg:grid-cols-2'>
                  <div className='bg-[#fff] shadow-sm rounded-[10px] px-[30px] py-[20px]'>
                    <form>
                      <div className='lg:grid lg:grid-cols-2 gap-y-[20px]'>
                        <div className='text-[#878C8F] text-[14px]'>Domain</div>
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                <div className="grid min-[1025px]:grid-cols-2 min-[1199px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-[25px] gap-y-[5px]">
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
                <div className="text-[20px] lg:text-[24px] font-bold flex items-center gap-[10px] mb-[24px]" >
                  <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                    onClick={() => setCustomOrderShow(false)} />
                  New Order
                </div>
                <div className='lg:grid lg:grid-cols-2'>
                  <div className='bg-[#fff] shadow-sm rounded-[10px] px-[30px] py-[20px]'>
                    <form>
                      <div className='lg:grid lg:grid-cols-2 gap-y-[20px]'>
                        <div className='text-[#878C8F] text-[14px]'>Domain</div>
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="mb-3 lg:mb-0">
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
                        <div className="flex items-center gap-[10px] mb-3 lg:mb-0">
                          <div className='bg-[#BDBDBD] p-[15px] text-[14px] font-[600] w-[115px] rounded-[10px] flex gap-[15px]'>
                            Upload
                            <img src={uploadIcon} alt='uploadIcon' />
                          </div>
                          <div className='text-[14px] font-[400]'>Browse your file</div>
                        </div>
                        <div className='text-[#878C8F] text-[14px]'>Package</div>
                        <div className="mb-3 lg:mb-0">
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
        {invoiceShow && !myOrderShow &&
          <>
          <div className="text-[20px] lg:text-[24px] font-bold flex items-center gap-[10px] mb-[24px]" >
                <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                  onClick={() => setInvoiceShow(false)} />
                Invoice Details
              </div>
            <div className='bg-[#fff] shadow-sm rounded-[10px] mt-[12px] lg:mt-[24px] p-[15px] lg:p-[30px]'>
              <div className='w-full lg:w-[581px] mx-auto'>
                <div className='text-center'>
                  <h3 className='text-[16px] lg:text-[22px] font-[600] mb-[10px] lg:mb-[30px]'>Invoice Details</h3>
                  <div className='bg-[#FBFCFD] border border-[#E4E6EF] rounded-[10px] 
                  px-[12px] lg:px-[30px] py-[10px] lg:py-[15px]'>
                    <div className='flex flex-col gap-[10px]'>
                      <div className='flex justify-between'>
                        <div className='text-[#808080] text-[12px] font-[500]'>Domain</div>
                        <div className='text-[#222] text-[12px] font-[600]'>Chemistry</div>
                      </div>
                      <div className='flex justify-between'>
                        <div className='text-[#808080] text-[12px] font-[500]'>Service Type</div>
                        <div className='text-[#222] text-[12px] font-[600]'>Assignment</div>
                      </div>
                      <div className='flex justify-between'>
                        <div className='text-[#808080] text-[12px] font-[500]'>Deliverable</div>
                        <div className='text-[#222] text-[12px] font-[600]'>5000 Words</div>
                      </div>
                      <div className='flex justify-between'>
                        <div className='text-[#808080] text-[12px] font-[500]'>Deadline</div>
                        <div className='text-[#222] text-[12px] font-[600]'>25/04/23</div>
                      </div>
                      <div className='flex justify-between'>
                        <div className='text-[#808080] text-[12px] font-[500]'>Package</div>
                        <div className='text-[#222] text-[12px] font-[600]'>Standard</div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-[#EFF2F5] h-[1px] w-full mt-[10px] lg:mt-[20px] mb-[10px] lg:mb-[20px]'></div>
                  <div className='bg-[#FBFCFD] border border-[#E4E6EF] rounded-[10px] px-[10px] lg:px-[30px] py-[15px]'>
                    <div className='flex justify-between items-center'>
                      <div className='text-[16px] lg:text-[22px] font-[600]'>Total Amount</div>
                      <div className='text-[16px] lg:text-[32px] font-[600]'>£250.00</div>
                    </div>
                  </div>
                  {!applyCodeshow &&
                    <div>
                      <div className='bg-[#9878DE] rounded-[10px] px-[30px] py-[12px] mt-[20px]'>
                        <div className='flex justify-between items-center'>
                          <div className='text-[14px] font-[600] text-[#fff] flex items-center'>
                            <img src={checkmarkWhite} alt='checkmarkWhite' className='mr-[5px]' />
                            Redeem UPCoins.</div>
                          <div className='text-[14px] font-[600] text-[#fff] flex items-center'>
                            <img src={QuestionMarkCircle} alt='Question-mark-circle' className='mr-[5px]' />
                            100</div>
                        </div>
                      </div>
                      <div className='text-[12px] font-[600] text-left leading-[30px]'>*10 UPCoins = 1£(GBP) and the best part , you can use 10% of your order value using UPCoins.</div>
                      <div className='text-[16px] font-[800]'>OR</div>
                      <div className='flex items-center border border-[#999] rounded-[10px] py-[10px] px-[20px]'>
                        <img src={check_box_outline_blank} alt='check_box_outline_blank' />
                        <div className='text-[14px] font-[600] pl-[10px]'>AC5847DF</div>
                      </div>
                      <div className='text-[12px] font-[600] text-left leading-[30px]'>*This coupon is valid for 2 hours</div>
                      <div className='text-[#4599F4] text-[16px] underline mb-[15px]  mt-[40px] lg:mt-[90px]'>Talk to us</div>
                      <div
                        className='bg-[#000000] w-full lg:w-[335px] h-[55px] rounded-[12px] mx-auto 
                        flex justify-center items-center text-[#fff] font-[700] cursor-pointer'
                        onClick={() => setApplyCodeshow(true)}>
                        Apply Now
                      </div>
                    </div>
                  }
                  {applyCodeshow &&
                    <div className='mt-[20px]'>
                      <div className='bg-[#FBFCFD] border border-[#E4E6EF] rounded-[10px] px-[30px] py-[15px]'>
                        <div className='flex flex-col gap-[10px]'>
                          <div className='flex justify-between'>
                            <div className='text-[#808080] text-[12px] font-[500]'>Total Amount</div>
                            <div className='text-[#222] text-[12px] font-[600]'>£250.00</div>
                          </div>
                          <div className='flex justify-between'>
                            <div className='text-[#808080] text-[12px] font-[500]'>UP Coins</div>
                            <div className='text-[#222] text-[12px] font-[600]'>10% Off</div>
                          </div>
                          <div className='flex justify-between'>
                            <div className='text-[#808080] text-[12px] font-[500]'>Amount</div>
                            <div className='text-[#222] text-[12px] font-[600]'>£225.00</div>
                          </div>
                          <div className='h-[2px] w-full bg-[#E4E6EF]'></div>
                          <div className='flex justify-between'>
                            <div className='text-[#4599F4] text-[14px] font-[600]'>Payable Amount</div>
                            <div className='text-[#4599F4] text-[14px] font-[700]'>£225.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start lg:items-center justify-start lg:justify-center">
                        <FormControlLabel control={<Checkbox defaultChecked />} label="" />
                        <div className='max-[767px]:flex'>I agree with your Terms and condition</div>
                      </div>
                      <div className='flex max-[767px]:flex-col gap-[10px] lg:gap-[20px] mt-[40px] lg:mt-[78px] items-end'>
                        <div className='w-full'>
                          <div className='text-[#4599F4] text-[16px] underline mb-[10px] '>Talk to us</div>
                          <div
                            className='bg-[#000000] w-full h-[55px] rounded-[12px] mx-auto 
                            flex justify-center items-center text-[#fff] font-[700] cursor-pointer'
                            onClick={handlePaymentModalDialog}
                          >
                            Pay Now
                          </div>
                        </div>
                        <div className='w-full'>
                          <div
                            className='bg-[#000000] w-full h-[55px] rounded-[12px] mx-auto 
                            flex justify-center items-center text-[#fff] font-[700]'>
                            Pay In Instalments
                          </div>
                        </div>
                      </div>
                      <div className='text-[12px] font-[600] text-left leading-[30px]'>
                        *If paid full, avail extra benefit of 5% discount</div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </>
        }
        {myOrderShow &&
          <div>
            <div className="pb-[15px] flex justify-between w-full">
              <div className="text-[20px] lg:text-[24px] font-bold flex items-center gap-[10px] " >
                <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                  onClick={() => setmyOrderShow(false)} />
                My Order
              </div>
              <div className='w-[180px] lg:w-[235px] text-[16px] font-[600] capitalize pl-[20px] pr-[15px] h-[41px] flex items-center justify-between bg-[#fff] rounded-[8px]'>
                <div>Active Order</div>
                <img src={arrowDownIcon} alt='arrowDownIcon' />
              </div>
            </div>
            <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-[25px] gap-y-[5px]">
              <div className='my-order-card relative cursor-pointer'
              >
                <div className='bg-[#7CA1FF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
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
                <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                  Payment Due
                </div>
                <div className='text-[#FF0303] text-[12px] font-[600] absolute left-[19px] bottom-[6px]'>2 Day's Left</div>
              </div>
              <div className='my-order-card relative cursor-pointer'
              >
                <div className='bg-[#9878DE] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
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
                <div className='px-[10px] py-[5px] bg-[#9878DE] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                  Payment Due
                </div>
                <div className='text-[#FF0303] text-[12px] font-[600] absolute left-[19px] bottom-[6px]'>2 Day's Left</div>
              </div>
              <div className='my-order-card relative cursor-pointer'
              >
                <div className='bg-[#FF8130] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
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
                <div className='px-[10px] py-[5px] bg-[#FF8130] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                  Payment Due
                </div>
                <div className='text-[#FF0303] text-[12px] font-[600] absolute left-[19px] bottom-[6px]'>2 Day's Left</div>
              </div>
              <div className='my-order-card relative cursor-pointer'
              >
                <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
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
                <div className='px-[10px] py-[5px] bg-[#FF7DA0] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                  Payment Due
                </div>
                <div className='text-[#FF0303] text-[12px] font-[600] absolute left-[19px] bottom-[6px]'>2 Day's Left</div>
              </div>
              <div className='my-order-card relative cursor-pointer'>
                <div className='bg-[#7CA1FF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
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
                <div className='px-[10px] py-[5px] bg-[#7CA1FF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                  Payment Due
                </div>
                <div className='text-[#FF0303] text-[12px] font-[600] absolute left-[19px] bottom-[6px]'>2 Day's Left</div>
              </div>
            </div>
          </div>
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
      {paymentModalDialog && !myOrderShow &&
        <Dialog
          open={paymentModalDialog}
          onClose={handlePaymentModalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className='dialog-text dialog-wrapper'
        >
          <div className='relative mt-[20px] w-full'>
            <div className='bg-[#D9D9D9] rounded-[10px] w-[50px] h-[5px] mx-auto'></div>
            {/* <img src={closeIcon} className='absolute right-[13px] top-[-7px] cursor-pointer' onClick={handleOrderMenuClose} /> */}
          </div>
          <DialogContent>
            <div className='flex flex-col items-center mb-[20px] '>
              <div className='p-[15px] pb-[10px] text-center pt-0 w-[158px] cursor-pointer font-[600] text-[#000] text-[24px] w-full flex flex-col items-center'>
                <div className=' flex items-center justify-center mb-[12px]'>
                  <img src={paymentSuccessImg} alt='paymentSuccessImg' className='h-[79px]' />
                </div>
                Payment Successful
              </div>
              <p className='text-[13px] font-[600] w-full lg:w-[312px] h-[72px] text-center text-[#979797]'>Now, we will process your order and within couple of hours your Manager will contact you on UniPal App. Stay tuned on My Order screen for the  further updates</p>
            </div>
            <div onClick={handlePaymentModalClose} className='w-full bg-[#000] cursor-pointer rounded-[12px] font-[600] py-[18px] text-[#fff] text-[16px] text-center'>
              Go To My Order
            </div>
          </DialogContent>
        </Dialog>
      }
      <footer className='sticky bottom-0 w-full bg-[#fff] h-[60px] z-10 min-[992px]:hidden'>
        <div className='grid grid-cols-5 h-full'>           
        <div className='flex justify-center items-center flex-col relative gap-y-[5px]' 
          onClick={() => navigate("/dashboard")}>            
            <div><img src={home_outline} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Home</div>
          </div> 
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/feeds")}>
            <div><img src={newsLaterIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Feeds</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/help-me")}>
            <div className='absolute top-0 w-full h-[2px] bg-[#9878DE]'></div>
            <div><img src={help_outline_active} alt='help_outline_active.svg' /></div>
            <div className='text-[12px] text-[#9878DE] font-medium'>Help Me</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/offers")}>
            <div><img src={localOfferIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Offers</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/profile")}>
            <div><img src={profileIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Profile</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HelpMe;
