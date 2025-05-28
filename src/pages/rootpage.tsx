import { Card } from "@/components/ui/card";
import qr from "../assets/qr-code.png";
import google from "../assets/app-store-google-4d63c31a3e.svg";
import apple from "../assets/app-store-apple-f1f919205b.svg";
import { ArrowRight } from "lucide-react";

export default function RootPage() {
  return (
    <section className="pt-16 overflow-hidden w-full">
      <div className="flex min-h-[90vh] justify-center flex-col gap-4 md:px-7 px-3 lg:px-16">
        <h1 className="hero-heading md:text-[4.5rem] text-[2.4rem] font-medium *:scroll-m-20 *:tracking-tight">
          Do more within seconds
        </h1>
        <p className="max-w-[600px]">
          Stove is here, whenever you’re ready to buy gas, pay bills, dispose
          Waste or get some food or other items delivered and shipped abroad,
          all you have to do is open an Stove app. Let’s get you started.
        </p>
        <div className="*:w-full *:relative *:z-10 *:md:text-center mt-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-center">
        <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
         <Card className="md:*:h-[350px]">
        <div className="w-full md:gap-4 md:justify-center font-medium md:text-[2rem] text-[1.3rem] flex-row md:flex-col flex p-2 justify-start gap-2 items-center">
            <div className=" dark:bg-accent-foreground w-fit hidden md:flex mt-12 rounded-lg">
              <img src={qr} className="max-w-[180px]" />
            </div>
            <div className="md:hidden flex">
              <img
                src="/stovelogo.png"
                className="max-w-[80px] dark:bg-accent-foreground px-2 py-1 rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
              <p className="font-medium">Gasoline Products</p>
              <p className="text-sm font-normal opacity-75">Request for cooking Gas, Petrol, diesel, CNG, Kerosene refill</p>
              </div>
              <ArrowRight className="font-medium md:hidden"/>
            </div>
          </div>
          </Card>
        </a>
        
        <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer"> 
            <Card className="md:*:h-[350px]">
          <div className="w-full md:gap-4 md:justify-center font-medium md:text-[2rem] text-[1.3rem] flex-row md:flex-col flex p-2 justify-start gap-2 items-center">
            <div className=" dark:bg-accent-foreground w-fit hidden md:flex mt-12 rounded-lg">
              <img src={qr} className="max-w-[180px]" />
            </div>
            <div className="md:hidden flex">
              <img
                src="/stovelogo.png"
                className="max-w-[80px] dark:bg-accent-foreground px-2 py-1 rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
              <p className="font-medium">Pay Bills</p>
              <p className="text-sm font-normal opacity-75">Buy airtime, data, TV Subscribtions and electricity bills</p>
              </div>
              <ArrowRight className="font-medium md:hidden"/>
            </div>
          </div>
          </Card>
        </a>
          
        <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
        <Card className="md:*:h-[350px]">
         <div className="w-full md:gap-4 md:justify-center font-medium md:text-[2rem] text-[1.3rem] flex-row md:flex-col flex p-2 justify-start gap-2 items-center">
            <div className=" dark:bg-accent-foreground w-fit hidden md:flex mt-12 rounded-lg">
              <img src={qr} className="max-w-[180px]" />
            </div>
            <div className="md:hidden flex">
              <img
                src="/stovelogo.png"
                className="max-w-[80px] dark:bg-accent-foreground px-2 py-1 rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
              <p className="font-medium">Waste Disposal</p>
              <p className="text-sm font-normal opacity-75">Order a trasher to dispose househol, business and industrial wastes</p>
              </div>
              <ArrowRight className="font-medium md:hidden"/>
            </div>
          </div>
         </Card>
         </a>
         
         <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
          <Card className="md:*:h-[350px]">
         <div className="w-full md:gap-4 md:justify-center font-medium md:text-[2rem] text-[1.3rem] flex-row md:flex-col flex p-2 justify-start gap-2 items-center">
            <div className=" dark:bg-accent-foreground w-fit hidden md:flex mt-12 rounded-lg">
              <img src={qr} className="max-w-[180px]" />
            </div>
            <div className="md:hidden flex">
              <img
                src="/stovelogo.png"
                className="max-w-[80px] dark:bg-accent-foreground px-2 py-1 rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
              <p className="font-medium">Send Package</p>
              <p className="text-sm font-normal opacity-75">International shipping and local delivery of goods</p>
              </div>
              <ArrowRight className="font-medium md:hidden"/>
            </div>
          </div>
         </Card>
         </a>
        
        </div>
      </div>
      
      <div className="py-12 bg-accent md:px-7 px-3 lg:px-16 *:relative *:z-10">
            <h1 className=" md:text-[3.5rem] mb-5 text-[2.05rem] font-medium *:scroll-m-20 *:tracking-tight">Request or subscribe to a service</h1>
            <p className="max-w-[600px] py-5">
            Join the millions of people around the world who trust the Stove app for their everyday needs. Whether you’re running out of gas, sending goods to customers or paying subscriptions and keeping your environment clean getting things done should be easy.
            </p>
            <div className="flex gap-2 font-medium text-[0.8rem]">
            <div className="flex gap-4 md:flex-row flex-col mt-8 w-full *:w-full *:max-w-[650px] items-center justify-center">
              <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
               <img src={apple} alt="appleIcon" />
              </a>
              <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
              <img src={google} alt="googleIcon" />
              </a>
                
                
            </div>
          </div>
      </div>
      <div className="py-12 md:px-7 px-3 lg:px-16 *:relative *:z-10">
            <h1 className=" md:text-[3.5rem] mb-5 text-[2.05rem] font-medium *:scroll-m-20 *:tracking-tight">Start earning with Stove </h1>
            <p className="max-w-[600px] py-5">
            Make money using Stove's business app. It’s up to you how and when you want to earn. No other app offers the same opportunities.
            </p>
            <div className="flex gap-2 font-medium text-[0.8rem]">
            <div className="flex gap-4 md:flex-row flex-col mt-8 w-full *:w-full *:max-w-[650px] items-center justify-center">
              <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
               <img src={apple} alt="appleIcon" />
              </a>
              <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
              <img src={google} alt="googleIcon" />
              </a>
            </div>
          </div>
      </div>
      <div className="text-white py-12 bg-primary md:px-7 px-3 lg:px-16 *:relative *:z-10">
            <h1 className=" md:text-[3.5rem] mb-5 text-[2.05rem] font-medium *:scroll-m-20 *:tracking-tight">Get almost anything  delivered to your doorstep.. </h1>
            <p className="max-w-[600px] py-5">
            With Stove app, you can get delivery to your doorstep from thousands of gasoline dealers, waste trashers,  logistics and shippers.
Request the service, then track your order in real time. Order faster with the Stove app.
            </p>
            <div className="flex gap-2 font-medium text-[0.8rem]">
            <div className="flex gap-4 md:flex-row flex-col mt-8 w-full *:w-full *:max-w-[650px] items-center justify-center">
              <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
               <img src={apple} alt="appleIcon" />
              </a>
              <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
              <img src={google} alt="googleIcon" />
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}
