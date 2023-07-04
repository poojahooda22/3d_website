// import {motion} from 'framer-motion';

import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
                    <div className='w-1 sm:h-80 h-40 violent-gradient'/>
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} 
                    text-white`}>Hi, I am<span
                    className='text-[#915eff]'>Pooja</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop 3D visuals, user<br className='sm:block hidden'/>interfaces
                        and web applications
                    </p>
                </div>  
            </div>

            <ComputersCanvas/>
            <div className="absolute xs:bottom-10
            bottom-32 w-full flex justify-center
            items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px]">
                        <svg className="animate-bounce w-6 h-6 text-white-100"/>
                    </div>

                </a>

            </div>

        </section>
    )
}

export default Hero;