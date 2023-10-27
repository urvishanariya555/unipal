import morningImg from '../assets/img/sunrise.svg'
import dashboardImg from '../assets/img/breking_new.png'
import calendarDateIcon from '../assets/img/date.svg'
import TimerIcon from '../assets/img/access_time.svg'
import TimerBlueIcon from '../assets/img/access_time_blue.svg'
import circle_right_arrow_blue from '../assets/img/circle_right_arrow_blue.svg'
import circle_right_arrow_pink from '../assets/img/circle_right_arrow_pink.svg'
import circle_right_arrow_orange from '../assets/img/circle_right_arrow_orange.svg'
import calendar_event from '../assets/img/calendar_event.svg'
import Clipboard_list from '../assets/img/Clipboard_list.svg'
import homeActive from '../assets/footer-mobile/home_active.svg'
import profileIcon from '../assets/footer-mobile/My_Profile.svg'
import localOfferIcon from '../assets/footer-mobile/local_offer.svg'
import newsLaterIcon from '../assets/footer-mobile/Newspaper.svg'
import HelpFooterIcon from '../assets/footer-mobile/help_outline.svg'
import backarrowIcon from '../assets/img/backarrow.svg'
import arrowDownIcon from '../assets/img/keyboard_arrow_down.svg'
import Chat from '../assets/img/Chat.svg'
import check_box from '../assets/img/check_box.svg'
import searchIcon from '../assets/img/Search.svg'
import closeIcon from '../assets/img/close_small.svg'
import calendarBlueIcon from '../assets/img/calendar_event_blue.svg'
import addIconButton from '../assets/img/addIcon.svg'
import addToCatagories from '../assets/img/addToCatagories.svg'
import Microphone_speaker from '../assets/img/Microphone_speaker.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import * as React from 'react'

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()
  const [calendarShow, setCalendarShow] = useState(false)
  const [notesShow, setNotesShow] = useState(false)
  const [toDoListShow, setToDoListShow] = useState(false)
  const [analyticScheduleShow, setAnalyticScheduleShow] = useState(false)

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleButtonClose = () => {
    setOpenDialog(false);
  };

  // NewTask
  const [openNewTaskDialog, setOpenNewTaskDialog] = React.useState(false);

  const handleNewTaskOpenDialog = () => {
    setOpenNewTaskDialog(true);
  };

  const handleNewTaskDialogClose = () => {
    setOpenNewTaskDialog(false);
  };
  // addnotes
  const [openNotesDialog, setOpenNotesDialog] = React.useState(false);

  const handleNoteDialogClose = () => {
    setOpenNotesDialog(false);
  };

  return (
    <>
      <div className="p-lg-[30px] p-[16px] min-h-[calc(100vh_-_60px)] min-[992px]:min-h-[calc(100vh_-_91px)] max-w-[calc(100vw_-_306px)] min-[1920px]:max-w-[calc(100vw_-_298px)] overflow-hidden max-[991px]:max-w-[100vw]">
        {!calendarShow && !toDoListShow && !notesShow && 
        <>
          <div className='w-full'>
            <div className="text-[20px] font-bold flex items-center gap-[10px] mb-[20px]">
              Hi <span className="text-[#9878DE]">John,</span> Good Morning
              <img src={morningImg} alt="morningImg" />
            </div>
            <Swiper
              spaceBetween={50}
              breakpoints={{
                0: {
                  slidesPerView: 1.3,
                  spaceBetween: 20
                },
                1280: {
                  slidesPerView: 1,

                }
              }}
            >
              <SwiperSlide>
                <div>
                  <img src={dashboardImg} alt='dashboardImg' className='rounded-[10px] object-cover w-full max-h-[330px] max-[767px]:h-[170px]' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={dashboardImg} alt='dashboardImg' className='rounded-[10px] object-cover w-full max-h-[330px] max-[767px]:h-[170px]' />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className='mt-[25px]'>
              <div className="pb-[15px] flex flex-between">
                <div className='text-[20px] max-[767px]:text-[16px] 
                text-[#000] font-bold flex-1 '>To Do List</div>
                <div className='text-[18px] max-[767px]:text-[14px] 
                text-[#787878] font-regular underline cursor-pointer' 
                onClick={() => setToDoListShow(true)}>View All</div>
              </div>
              <Swiper
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1025: {
                    slidesPerView: 3,
                  },
                  1440: {
                    slidesPerView: 4,
                  }
                }}
              >
                <SwiperSlide>
                  <div className='to-do-card relative'>
                    <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                    <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                    <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                      <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                      <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                    </div>
                    <div className='text-[16px] text-[#666] font-semibold'>
                      Categories: <span className='text-[#222]'>Personal</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='to-do-card relative'>
                    <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                    <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                    <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                      <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                      <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                    </div>
                    <div className='text-[16px] text-[#666] font-semibold'>
                      Categories: <span className='text-[#222]'>Personal</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='to-do-card relative'>
                    <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                    <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                    <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                      <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                      <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                    </div>
                    <div className='text-[16px] text-[#666] font-semibold'>
                      Categories: <span className='text-[#222]'>Personal</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='to-do-card relative'>
                    <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                    <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                    <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                      <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                      <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                    </div>
                    <div className='text-[16px] text-[#666] font-semibold'>
                      Categories: <span className='text-[#222]'>Personal</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className='mt-[25px]'>
              <div className="pb-[15px] flex flex-between">
                <div className='text-[20px] max-[767px]:text-[16px] text-[#000] font-bold flex-1'>Features</div>
                <div className='text-[18px] max-[767px]:text-[14px] text-[#787878] font-regular underline'>View All</div>
              </div>
              <Swiper
                spaceBetween={50}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1025: {
                    slidesPerView: 3,
                  },
                  1440: {
                    slidesPerView: 4,
                  }
                }}
              >
                <SwiperSlide>
                  <div
                    className='feature-card relative cursor-pointer'
                    onClick={() => setCalendarShow(true)}
                  >
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#7aa0ff59] mb-[24px]'>
                      <img src={calendar_event} alt='calendar_event' />
                    </div>
                    <div className='text-[22px] text-[#000] font-bold flex items-center justify-between'>My Calendar
                      <img src={circle_right_arrow_blue} alt='circle_right_arrow_blue' />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='feature-card relative cursor-pointer'
                    onClick={() => setNotesShow(true)}>
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#ff80a159] mb-[24px]'>
                      <img src={Clipboard_list} alt='Clipboard_list' />
                    </div>
                    <div className='text-[22px] text-[#000] font-bold flex items-center justify-between'>My notes
                      <img src={circle_right_arrow_pink} alt='circle_right_arrow_pink' />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='feature-card relative cursor-pointer' onClick={() => navigate("/help-me")}>
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#ff8b0f59] mb-[24px]'>
                      <img src={Chat} alt='Chat' />
                    </div>
                    <div className='text-[22px] text-[#000] font-bold flex items-center justify-between'>Help Me
                      <img src={circle_right_arrow_orange} alt='circle_right_arrow_orange' />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
        }
        {calendarShow &&
          <>
            {!analyticScheduleShow ? (
              <>
                <div className='w-full'>
                  <div className="text-[20px] font-bold flex items-center gap-[10px]" >
                    <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer' onClick={() => setCalendarShow(false)} />
                    My Calendar
                  </div>
                  <div className='mt-[12px]'>
                    <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-[25px] gap-y-[5px]">
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}
                      >
                        <div className='bg-[#ff7e2eb3] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#FFA76E] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#7CA1FF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#A3BDFF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#FFA4BD] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#9878DE] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#B7A1E8] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#90DDFF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#90DDFF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#FFE36B] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#FFE36B] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#88BB7C] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#88BB7C] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#7CA1FF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#A3BDFF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='w-full'>
                  <div className="text-[20px] font-bold flex items-center gap-[10px]" >
                    <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                      onClick={() => setAnalyticScheduleShow(false)} />
                    Analysis
                  </div>
                  <div className='mt-[12px]'>
                    <div className="grid min-[768px]:grid-cols-1 min-[1199px]:grid-cols-2 gap-[25px] gap-y-[5px]">
                      <div className='calendar-card AnalysiCard relative'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                      </div>
                      <div className='calendar-card relative AnalysiCard mb-[11px]'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center flex-col'>
                          <div className='text-[#000] font-[600] text-[16px] mb-[12px] border-b-[2px] border-[#222] px-[16px] '>Analysis</div>
                          <div className='text-[#000] font-[500] text-[14px] text-center'>An ideal timeline to get this task done with perfect is <span className='text-[#6266FA] font-[700] '>8 days.</span></div>
                          <div className='text-[#000] font-[500] font-italic text-[14px]'>Currently you are </div>
                          <div className='text-[#FF0707] font-[700] text-[14px]'>LATE</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-[20px]">
                    <div className="text-[16px] sm:text-[20px] font-bold flex items-center gap-[10px]" >
                      Meeting Schedule
                    </div>
                    <div
                      className='bg-[#000] cursor-pointer rounded-[7px] h-[33px] flex justify-center items-center px-[10px] sm:px-[17px] text-[#fff] text-[12px] sm:text-[14px]  font-[600]'
                      onClick={handleClickOpenDialog}
                    >Add Meeting Schedule</div>
                  </div>
                  <div className='mt-[12px]'>
                    <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-3 gap-[30px] gap-y-[0px]">
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex justify-center pt-[105px]'>
                    <div className='bg-[#000] rounded-[12px] h-[55px] w-[335px] flex justify-center items-center px-[17px] text-[#fff] text-[16px] font-[700]'>Need Help?</div>
                  </div>
                </div>
              </>
            )}
          </>
        }
        {toDoListShow &&
          <div className='w-full'>
            <div className="flex justify-between items-center flex-content-heading">
              <div className="text-[20px] font-bold flex items-center gap-[10px] pb-3 pb-sm-0" >
                <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer' onClick={() => setToDoListShow(false)} />
                To Do List
              </div>
              <div className='flex gap-[15px]'>
                <div className=' w-[180px] sm:w-[235px] text-[16px] font-[600] capitalize pl-[20px] pr-[15px] h-[41px] flex items-center justify-between bg-[#fff] rounded-[8px]'>
                  <div>All Categories</div>
                  <img src={arrowDownIcon} alt='arrowDownIcon' />
                </div>
                <div className='w-[40px] h-[41px] flex items-center justify-center bg-[#fff] rounded-[8px]'>
                  <img src={searchIcon} alt='searchIcon' />
                </div>
                <div className='w-[40px] h-[41px] flex items-center justify-center bg-[#fff] rounded-[8px]'>
                  <img src={check_box} alt='check_box' />
                </div>
              </div>
            </div>
            <div className='mt-[12px]'>
              <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-[25px] gap-y-[5px]">
                <div className='to-do-card relative'>
                  <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#B7A1E8] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFA4BD] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFA76E] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#90DDFF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFE36B] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#88BB7C] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#A3BDFF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='fixed md:bottom-[40px] bottom-[60px] md:right-[40px] right-[10px] cursor-pointer z-10' onClick={handleNewTaskOpenDialog}>
              <img src={addIconButton} alt='addIconButton' className='h-[60px] md:h-auto'/>
            </div>
          </div>
        }
        {notesShow &&
          <div className='w-full'>
            <div className="flex justify-between items-center">
              <div className="text-[20px] font-bold flex items-center gap-[10px]" >
                <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer' onClick={() => setNotesShow(false)} />
                My Notes
              </div>
              <div className='flex gap-[15px]'>
                <div className='w-[40px] h-[41px] flex items-center justify-center bg-[#fff] rounded-[8px]'>
                  <img src={searchIcon} alt='searchIcon' />
                </div>
                <div className='w-[40px] h-[41px] flex items-center justify-center bg-[#fff] rounded-[8px]'>
                  <img src={check_box} alt='check_box' />
                </div>
              </div>
            </div>
            <div className='mt-[12px]'>
              <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-2 min-[1440px]:grid-cols-3 gap-[25px] gap-y-[5px]">
                <div className='to-do-card relative'>
                  <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#B7A1E8] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFA4BD] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFA76E] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#90DDFF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFE36B] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#88BB7C] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#A3BDFF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='fixed md:bottom-[40px] bottom-[60px] md:right-[40px] right-[10px] cursor-pointer z-10' onClick={handleNewTaskOpenDialog}>
              <img src={addIconButton} alt='addIconButton' className='h-[60px] md:h-auto'/>
            </div>
          </div>
        }
      </div>

      <Dialog
        open={openDialog}
        onClose={handleButtonClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='dialog-text dialog-wrapper'
      >
        <div className='relative mt-[20px] w-full'>
          <div className='bg-[#D9D9D9] rounded-[10px] w-[50px] h-[5px] mx-auto'></div>
          <img src={closeIcon} className='absolute right-[13px] top-[-7px] cursor-pointer' onClick={handleButtonClose} />
        </div>
        <DialogTitle id="alert-dialog-title" style={{ fontFamily: 'Inter, sans-serif' }} className='text-center text-[16px] leading-[24px] font-[600] text-[#111]'>
          {"Add Meeting Schedule"}
        </DialogTitle>
        <DialogContent>
          <form>
            <div className="">
              <label className="text-sm font-medium text-[#878C8F]">Date</label>
              <div className="border border-[#BEBEBE] rounded-[10px] mt-2 relative w-full sm:w-[345px]">
                <input
                  type="text"
                  placeholder="Select Date"
                  className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[20px] pl-[40px] rounded-[10px]" />
                <img src={calendarBlueIcon} className="h-[18px] left-[10px] top-[16px] absolute" />
              </div>
            </div>
            <div className="mt-[12px]">
              <label className="text-sm font-medium text-[#878C8F]">Time</label>
              <div className="border border-[#BEBEBE] rounded-[10px] mt-2 relative w-full sm:w-[345px]">
                <input
                  type="text"
                  placeholder="Select Time"
                  className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[20px] pl-[40px] rounded-[10px]" />
                <img src={TimerBlueIcon} className="h-[18px] left-[10px] top-[16px] absolute" />
              </div>
            </div>
            <div className='flex flex-1 gap-[15px] mt-[17px]'>
              <div onClick={handleButtonClose} 
              className='cursor-pointer w-full bg-[#666] rounded-[12px] font-[600] 
              py-[12px] sm:py-[18px] text-[#fff] text-[16px]
              flex justify-center items-center cursor-pointer'>
                Cancel
              </div>
              <div onClick={handleButtonClose} 
              className='cursor-pointer w-full bg-[#000] rounded-[12px] font-[600] 
              py-[12px] sm:py-[18px] text-[#fff] text-[16px]
              flex justify-center items-center cursor-pointer'>
                Add
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openNotesDialog}
        onClose={handleButtonClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='dialog-text dialog-wrapper'
      >
        <div className='relative mt-[20px] w-full'>
          <div className='bg-[#D9D9D9] rounded-[10px] w-[50px] h-[5px] mx-auto'></div>
          <img src={closeIcon} className='absolute right-[13px] top-[-7px] cursor-pointer' onClick={handleNoteDialogClose} />
        </div>
        <DialogTitle id="alert-dialog-title" style={{ fontFamily: 'Inter, sans-serif' }} className='text-center text-[16px] leading-[24px] font-[600] text-[#111]'>
          {"Add New Notes"}
        </DialogTitle>
        <DialogContent>
          <form>
            <div className="">
              <label className="text-sm font-medium text-[#878C8F]">Title</label>
              <div className="border border-[#BEBEBE] rounded-[10px] mt-2 relative w-full sm:w-[345px]">
                <input
                  type="text"
                  placeholder="Type Title Name"
                  className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
              </div>
            </div>
            <div className="mt-[12px]">
              <label className="text-sm font-medium text-[#878C8F]">Descriptions</label>
              <div className="border border-[#BEBEBE] rounded-[10px] mt-2 relative w-full sm:w-[345px]">
                <textarea
                  rows={4}
                  placeholder="Type Descriptions"
                  className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none 
                  w-full p-[13px] px-[15px] rounded-[10px]" />
              </div>
            </div>
            <div className='flex flex-1 gap-[15px] mt-[17px]'>
              <div onClick={handleNoteDialogClose} className='w-full bg-[#666] rounded-[12px] font-[600] py-[12px] sm:py-[18px] text-[#fff] text-[16px]'>
                Cancel
              </div>
              <div onClick={handleNoteDialogClose} className='w-full bg-[#000] rounded-[12px] 
            font-[600] py-[12px] sm:py-[18px] text-[#fff] text-[16px]'>
                Add
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openNewTaskDialog}
        onClose={handleNewTaskDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='dialog-text dialog-wrapper custom-width-dialog'
      >
        <div className='relative mt-[20px] w-full'>
          <div className='bg-[#D9D9D9] rounded-[10px] w-[50px] h-[5px] mx-auto'></div>
          <img src={closeIcon} className='absolute right-[13px] top-[-7px] cursor-pointer' onClick={handleNewTaskDialogClose} />
        </div>
        <DialogTitle id="alert-dialog-title" 
        style={{ fontFamily: 'Inter, sans-serif' }} 
        className='text-center text-[16px] leading-[24px] font-[600] text-[#111]'>
          {"New Task"}
        </DialogTitle>
        <DialogContent>
          <form>
            <div className="">
              <label className="text-sm font-medium text-[#878C8F]">What Is To Be Done?</label>
              <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">                
                <input
                  type="text"
                  placeholder="Type Title Name"
                  className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                  <div className="dropdown">
                  <a className="flex items-center rounded-l-[0px] btn btn-secondary bg-[#D4D6D7] border-[#D4D6D7] h-[50px]" href="javascript:void(0)">
                    <img src={Microphone_speaker} alt='Microphone_speaker' className='min-w-[20px] h-[20px]'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-[20px]">
              <label className="text-sm font-medium text-[#878C8F]">Due Date</label>
              <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">          
                <input
                  type="text"
                  placeholder="DD MM YY"
                  className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                  <div className="dropdown">
                  <a className="flex items-center rounded-l-[0px] btn btn-secondary bg-[#D4D6D7] border-[#D4D6D7] h-[50px]" href="javascript:void(0)">
                    <img src={calendar_event} alt='calendar_event' className='min-w-[20px] h-[20px]'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-[15px]">
              <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">                
                <input
                  type="text"
                  placeholder="DD MM YY"
                  className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                  <div className="dropdown">
                  <a className="flex items-center rounded-l-[0px] btn btn-secondary bg-[#D4D6D7] border-[#D4D6D7] h-[50px]" href="javascript:void(0)">
                    <img src={TimerIcon} alt='TimerIcon' className='min-w-[20px] h-[20px]'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-[20px]">
              <label className="text-sm font-medium text-[#878C8F]">Repeat</label>
              <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">                
                <input
                  type="text"
                  placeholder="Once a Day"
                  className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                  <div className="dropdown">
                  <a className="flex items-center rounded-l-[0px] btn btn-secondary bg-[#D4D6D7] border-[#D4D6D7] h-[50px]" href="javascript:void(0)">
                    <img src={arrowDownIcon} alt='arrowDownIcon' className='min-w-[20px] h-[20px]'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-[20px]">
              <label className="text-sm font-medium text-[#878C8F]">Add to Category</label>
              <div className="border border-[#BEBEBE] rounded-[10px] mt-2 w-full flex items-center">                
                <input
                  type="text"
                  placeholder="Personal"
                  className="focus-visible:border-indigo-500/100 placeholder-[#283238] outline-none w-full p-[13px] px-[15px] rounded-[10px]" />
                  <div className="dropdown">
                  <a className="flex items-center rounded-l-[0px] btn btn-secondary bg-[#D4D6D7] border-[#D4D6D7] h-[50px]" href="javascript:void(0)">
                    <img src={addToCatagories} alt='addToCatagories' className='min-w-[20px] h-[20px]'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-1 gap-[15px] mt-[17px]'>
              <div onClick={handleNewTaskDialogClose} 
              className='w-full bg-[#666] rounded-[12px] font-[600] py-[12px] 
              sm:py-[18px] text-[#fff] text-[16px] flex justify-center items-center cursor-pointer'>
                Cancel
              </div>
              <div onClick={handleNewTaskDialogClose} 
              className='w-full bg-[#000] rounded-[12px] 
                font-[600] py-[12px] sm:py-[18px] text-[#fff] text-[16px] 
                flex justify-center items-center cursor-pointer'>
                Add
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <footer className='sticky bottom-0 w-full bg-[#fff] h-[60px] z-10 min-[992px]:hidden'>
        <div className='grid grid-cols-5 h-full'>           
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]' 
          onClick={() => navigate("/dashboard")}>
            <div className='absolute top-0 w-full h-[2px] bg-[#9878DE]'></div>
            <div><img src={homeActive} alt='homeActive' /></div>
            <div className='text-[12px] text-[#9878DE] font-medium'>Home</div>
          </div>        
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/feeds")}>
            <div><img src={newsLaterIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Feeds</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/help-me")}>
            <div><img src={HelpFooterIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Help Me</div>
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

export default Dashboard;
