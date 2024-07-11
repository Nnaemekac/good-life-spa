import Appointment from "../components/home/Appointment";
import Header from "../components/home/Header";
import Services from "../components/home/Services";
import WhyUs from "../components/home/WhyUs";

export default function Home(){
    return(
        <>
          <Header />
          <Services />
          <WhyUs />
          <Appointment />
        </>
    )
}