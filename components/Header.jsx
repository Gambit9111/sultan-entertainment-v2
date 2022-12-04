import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion'
import { SocialIcon } from 'react-social-icons'
import Image from 'next/image';
export default function Header() {
  return (
      <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="relative p-1">
          <div className='absolute w-[50%] md:w-[60%] inset-0 gradient-01' />

          <div className='xl:max-w-[1280px] mx-auto w-full flex flex-col md:flex-row md:justify-between items-center'>
              {/* LOGO */}
              <Image src="/sultanlogo.svg"
                  width={462}
                  height={49}
                  className='object-contain relative pb-4 md:pb-0'
                  alt="search"
              />
              <motion.div
                  initial={{ y: 150, x: -200, opacity: 0, scale: 6 }}
                  animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 2 }}
                  className='absolute sm:left-96 sm:top-6 left-80 top-5'
              >
                  <Image src="/skulllogo.svg"
                      width={89}
                      height={86}
                      className='object-contain animate-pulse'
                      alt="skull"
                  />
              </motion.div>
              {/* SOCIALS */}
              <div className='flex gap-8'>
                  <motion.div
                      initial={{ y: -150, opacity: 0, scale: 4 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.75, delay: 1.5 }}
                  >
                      <SocialIcon url="https://youtube.com/" fgColor='#515860' bgColor='transparent'/>
                  </motion.div>
                  <motion.div
                      initial={{ y: -150, opacity: 0, scale: 4 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.75, delay: 1.5 }}
                  >
                      <SocialIcon url="https://spotify.com/" fgColor='#515860' bgColor='transparent'/>
                  </motion.div>
                  <motion.div
                      initial={{ y: -150, opacity: 0, scale: 4 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.75, delay: 1.5 }}
                  >
                      <SocialIcon url="https://itunes.com/" fgColor='#515860' bgColor='transparent'/>
                  </motion.div>
                  <motion.div
                      initial={{ y: -150, opacity: 0, scale: 4 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.75, delay: 1.5 }}
                  >
                      <SocialIcon url="https://instagram.com/" fgColor='#515860' bgColor='transparent'/>
                  </motion.div>
              </div>
          </div>
      </motion.nav>
  )
}