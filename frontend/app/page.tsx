import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/HeroSection';
import QuranIntro from '@/components/QuranIntro';
import Testimonials from '@/components/Testimonials';



export default function Home() {
  return (
    <>
    <HeroSection/>
    <Testimonials/>
    <QuranIntro/>
    <ContactForm/>
    </>
  );
}