import { type NextPage } from "next";
import {motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from "~/store";
import { headContainerAnimation, headContentAnimation, slideAnimation } from "~/utils/motion";
import Image from "next/image";
import {CustomButton} from "~/components/UI";
const Home: NextPage = () => {

  const { updateIntro} = useUIStore();

  return (
    <AnimatePresence>

        <motion.section className="home" {...slideAnimation('left')} >
          <motion.header {...slideAnimation('down')}>
            <Image src={'/threejs.png'} width={32} height={32} alt="logo" className="object-contain" />
          </motion.header>
          <motion.div className="home-content" {...headContentAnimation} >
            <motion.div {...headContainerAnimation}>
              <h1 className="head-text" >
                LET&apos;S <br className="hidden xl:block" /> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5"  >
              <p className="max-w-md font-normal text-gray-500 text-base" >
              Discover the future of fashion customization with our 3D shirt design web app. Upload your own images or let our AI create unique patterns for you. Elevate your style by crafting one-of-a-kind shirts effortlessly. Start your design journey now!
              </p>
              <CustomButton href="/customizer" type={"filled"} onClick={()  => updateIntro(false)} title={"Design It"} customClass="w-fit px-4 py-2.5 font-bold text-sm" />
            </motion.div>
          </motion.div>
        </motion.section>

    </AnimatePresence>
  );
};

export default Home;
