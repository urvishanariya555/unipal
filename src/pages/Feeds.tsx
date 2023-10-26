import morningImg from '../assets/img/sunrise.svg'
import feedsImage1 from '../assets/img/help-menu-education.svg'
import feedsImage2 from '../assets/img/help-menu-news.svg'
import feedsImage3 from '../assets/img/help-menu-memes.svg'
import feedsImage4 from '../assets/img/help-menu-jobs.svg'
import feedsImage5 from '../assets/img/help-menu-health.svg'
import feedsImage6 from '../assets/img/help-menu-sports.svg'
import feedsImage7 from '../assets/img/help-menu-business.svg'
import feedsImage8 from '../assets/img/help-menu-technology.svg'
import feedsImage9 from '../assets/img/help-menu-alerts.svg'
import feedsImage10 from '../assets/img/help-menu-lifestyle.svg'
import feedBlogImg from '../assets/img/feeds_menu_image.png'
import home_outline from '../assets/footer-mobile/home_outline.svg'
import profileIcon from '../assets/footer-mobile/My_Profile.svg'
import localOfferIcon from '../assets/footer-mobile/local_offer.svg'
import Newspaper_active from '../assets/footer-mobile/Newspaper_active.svg'
import HelpFooterIcon from '../assets/footer-mobile/help_outline.svg'
import { useNavigate } from "react-router-dom";


const Feeds = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="p-lg-[30px] p-[16px] min-h-[calc(100vh_-_60px)] min-[992px]:min-h-[calc(100vh_-_91px)] max-w-[calc(100vw_-_306px)] min-[1920px]:max-w-[calc(100vw_-_298px)] overflow-hidden max-[991px]:max-w-[100vw]">
        <div className='w-full'>
          <div className="text-[20px] font-bold flex items-center gap-[10px] mb-[20px]">
            Hi <span className="text-[#9878DE]">John,</span> Good Morning
            <img src={morningImg} alt="morningImg" />
          </div>
          <div className='flex justify-between max-[1199px]:justify-start flex-wrap gap-[10px] sm:gap-[20px] min-[1024px]:gap-[20px] mb-[20px] md:mb-[50px]'>
            <div className='flex justify-center flex-col items-center gap-[5px] sm:gap-[10px]'>
              <div className='h-[76px] w-[76px] sm:h-[85px] sm:w-[85px] rounded-[98px] bg-[#fff] flex items-center justify-center'>
                <img src={feedsImage1} alt='feedsImage1' className='h-[60%] sm:h-auto'/>
              </div>
              <p className='text-[14px] font-[600] text-[#111]'>Education</p>
            </div>
            <div className='flex justify-center flex-col items-center gap-[5px] sm:gap-[10px]'>
              <div className='h-[76px] w-[76px] sm:h-[85px] sm:w-[85px] rounded-[98px] bg-[#fff] flex items-center justify-center'>
                <img src={feedsImage2} alt='feedsImage2' className='h-[60%] sm:h-auto'/>
              </div>
              <p className='text-[14px] font-[600] text-[#111]'>News</p>
            </div>
            <div className='flex justify-center flex-col items-center gap-[5px] sm:gap-[10px]'>
              <div className='h-[76px] w-[76px] sm:h-[85px] sm:w-[85px] rounded-[98px] bg-[#fff] flex items-center justify-center'>
                <img src={feedsImage3} alt='feedsImage3' className='h-[60%] sm:h-auto'/>
              </div>
              <p className='text-[14px] font-[600] text-[#111]'>Memes</p>
            </div>
            <div className='flex justify-center flex-col items-center gap-[5px] sm:gap-[10px]'>
              <div className='h-[76px] w-[76px] sm:h-[85px] sm:w-[85px] rounded-[98px] bg-[#fff] flex items-center justify-center'>
                <img src={feedsImage4} alt='feedsImage4' className='h-[60%] sm:h-auto'/>
              </div>
              <p className='text-[14px] font-[600] text-[#111]'>Jobs</p>
            </div>
            <div className='flex justify-center flex-col items-center gap-[5px] sm:gap-[10px]'>
              <div className='h-[76px] w-[76px] sm:h-[85px] sm:w-[85px] rounded-[98px] bg-[#fff] flex items-center justify-center'>
                <img src={feedsImage5} alt='feedsImage5' className='h-[60%] sm:h-auto'/>
              </div>
              <p className='text-[14px] font-[600] text-[#111]'>Health</p>
            </div>
            <div className='flex justify-center flex-col items-center gap-[5px] sm:gap-[10px]'>
              <div className='h-[76px] w-[76px] sm:h-[85px] sm:w-[85px] rounded-[98px] bg-[#fff] flex items-center justify-center'>
                <img src={feedsImage6} alt='feedsImage6' className='h-[60%] sm:h-auto'/>
              </div>
              <p className='text-[14px] font-[600] text-[#111]'>Sports</p>
            </div>
            <div className='flex justify-center flex-col items-center gap-[5px] sm:gap-[10px]'>
              <div className='h-[76px] w-[76px] sm:h-[85px] sm:w-[85px] rounded-[98px] bg-[#fff] flex items-center justify-center'>
                <img src={feedsImage7} alt='feedsImage7' className='h-[60%] sm:h-auto'/>
              </div>
              <p className='text-[14px] font-[600] text-[#111]'>Business</p>
            </div>
            <div className='flex justify-center flex-col items-center gap-[5px] sm:gap-[10px]'>
              <div className='h-[76px] w-[76px] sm:h-[85px] sm:w-[85px] rounded-[98px] bg-[#fff] flex items-center justify-center'>
                <img src={feedsImage8} alt='feedsImage8' className='h-[60%] sm:h-auto'/>
              </div>
              <p className='text-[14px] font-[600] text-[#111]'>Technology</p>
            </div>
            <div className='flex justify-center flex-col items-center gap-[5px] sm:gap-[10px]'>
              <div className='h-[76px] w-[76px] sm:h-[85px] sm:w-[85px] rounded-[98px] bg-[#fff] flex items-center justify-center'>
                <img src={feedsImage9} alt='feedsImage9' className='h-[60%] sm:h-auto'/>
              </div>
              <p className='text-[14px] font-[600] text-[#111]'>Alerts</p>
            </div>
            <div className='flex justify-center flex-col items-center gap-[5px] sm:gap-[10px]'>
              <div className='h-[76px] w-[76px] sm:h-[85px] sm:w-[85px] rounded-[98px] bg-[#fff] flex items-center justify-center'>
                <img src={feedsImage10} alt='feedsImage10' className='h-[60%] sm:h-auto'/>
              </div>
              <p className='text-[14px] font-[600] text-[#111]'>Lifestyle</p>
            </div>
          </div>
          <div className='bg-[#fff] p-[20px] rounded-[12px] shadow-sm'>
            <div className='lg:grid lg:grid-cols-12 gap-[30px]'>
              <div className="col-span-9 max-[767px]:col-span-12">
                <div>
                  <div>
                    <img className='h-[340px] rounded-[12px] w-full object-cover' src='https://s3-alpha-sig.figma.com/img/0fc8/96af/04ea02d6732c632343c0232a31158192?Expires=1698624000&Signature=UQOnrz-Wf0NKZVcILF6UbcAC4TQTMaIt9DgwYW6C1562NB8lRayABUx5Vd7RW65L6iY39zAdR1vJiiVlPm7uK24pix~iG~V2uVPBer2Ejal093NcyH86FB-ZleVGr9foz4bkzbADdazx1wAWelSeHtkEROdqO9xGwzTm3LGbRPIOG1JXOeyDXUHEZ-gVx2LtyINsAl-4FfpVNUtYO9N9PJL3R3j7dk4kiN9mEl3z1knn4ZXmpRALBSPAOI7xed634tZQyFObpcRX3AoNJ-89rfOBGp3c-4Vl-yhKZraUOA7gKpbdlrGMqJzGzNi8frapp1HM7brkbop6HEe~e5agCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                  </div>
                  <div className='font-[600] text-[20px] text-[#181C32] mb-[40px] mt-[20px]'>Metronic Admin - How To Get Started Tutorial. Create a customizable SaaS Based applications and solutions</div>
                  <div className='font-[500] text-[15px] text-[#7E8299]'>First, a disclaimer - the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting “Publish,” you might spend several days or maybe even a week “writing” a blog post, but it's important to spend those vital hours planning your post and even thinking about Your Post (yes, thinking counts as working if you're a blogger) before you actually write it.
                    <br></br>
                    <br></br>
                    There's an old maxim that states, “No fun for the writer, no fun for the reader.” No matter what industry you're working in, as a blogger, you should live and die by this statement.
                    <br></br>
                    <br></br>
                    Before you do any of the following steps, be sure to pick a topic that actually interests you. Nothing - and I mean NOTHING - will kill a blog post more effectively than a lack of enthusiasm from the writer. You can tell when a writer is bored by their subject, and it's so cringe-worthy it's a little embarrassing.
                    <br></br>
                    <br></br>
                    I can hear your objections already. “But Dan, I have to blog for a cardboard box manufacturing company.” I feel your pain, I really do. During the course of my career, I've written content for dozens of clients in some less-than-thrilling industries (such as financial regulatory compliance and corporate housing), but the hallmark of a professional blogger is the ability to write well about any topic, no matter how dry it may be. Blogging is a lot easier, however, if you can muster at least a little enthusiasm for the topic at hand.
                  </div>
                </div>
              </div>
              <div className="col-span-3 max-[767px]:col-span-12">
                <div className='flex flex-col gap-[12px]'>
                  <div className='text-[#000] text-[16px] font-[600] leading-[24px] mb-[4px]'>
                    Categories</div>
                  <div className='flex justify-between'>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>SaaS Solutions</div>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>24</div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>Company News</div>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>152</div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>Events & Activities</div>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>52</div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>Support Related</div>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>605</div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>Innovations</div>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>70</div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>Product Updates</div>
                    <div className='text-[#A1A5B7] text-[15px] font-[500]'>502</div>
                  </div>
                </div>
                <div className='pt-[50px]'>
                  <div className='text-[#000] text-[16px] font-[600] leading-[24px] mb-[15px]'>
                    Recent Posts</div>
                  <div className='flex flex-col gap-[15px]'>
                    <div className='flex items-start gap-[14px]'>
                      <img src={feedBlogImg} alt='feedBlogImg' className='w-[75px] h-[50px] rounded-[12px]' />
                      <div>
                        <div className='text-[#181C32] text-[14px] font-[600]'>About Metronic Admin</div>
                        <div className='text-[#7E8299] text-[12px] font-[500]'>We've been a focused on making a the sky</div>
                      </div>
                    </div>
                    <div className='flex items-start gap-[14px]'>
                      <img src={feedBlogImg} alt='feedBlogImg' className='w-[75px] h-[50px] rounded-[12px]' />
                      <div>
                        <div className='text-[#181C32] text-[14px] font-[600]'>About Metronic Admin</div>
                        <div className='text-[#7E8299] text-[12px] font-[500]'>We've been a focused on making a the sky</div>
                      </div>
                    </div>
                    <div className='flex items-start gap-[14px]'>
                      <img src={feedBlogImg} alt='feedBlogImg' className='w-[75px] h-[50px] rounded-[12px]' />
                      <div>
                        <div className='text-[#181C32] text-[14px] font-[600]'>About Metronic Admin</div>
                        <div className='text-[#7E8299] text-[12px] font-[500]'>We've been a focused on making a the sky</div>
                      </div>
                    </div>
                    <div className='flex items-start gap-[14px]'>
                      <img src={feedBlogImg} alt='feedBlogImg' className='w-[75px] h-[50px] rounded-[12px]' />
                      <div>
                        <div className='text-[#181C32] text-[14px] font-[600]'>About Metronic Admin</div>
                        <div className='text-[#7E8299] text-[12px] font-[500]'>We've been a focused on making a the sky</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='sticky bottom-0 w-full bg-[#fff] h-[60px] z-10 min-[992px]:hidden'>
        <div className='grid grid-cols-5 h-full'>           
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]' 
          onClick={() => navigate("/dashboard")}>            
            <div><img src={home_outline} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Home</div>
          </div>        
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/feeds")}>
            <div className='absolute top-0 w-full h-[2px] bg-[#9878DE]'></div>
            <div><img src={Newspaper_active} alt='Newspaper_active.svg' /></div>
            <div className='text-[12px] text-[#9878DE] font-medium'>Feeds</div>
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

export default Feeds;
