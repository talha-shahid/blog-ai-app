import React from 'react'
import Image from 'next/image'
import Facebook from 'public/assets/social_facebook.png'
import Twitter from 'public/assets/social_twitter.png'
import Instagram from 'public/assets/social_instagram.png'


type Props = {
    isDark?: boolean
}

const SocialLinks = ({isDark=false}: Props) => {
  return (
    <div className='flex justify-between items-center gap-7'>
        <a href="https://www.facebook.com/" target="_blank">
            <Image className={`${isDark ? "brightness-0": ""} hover:opacity-50`} src={Facebook} alt="Facebook" width={20} height={20}/>
        </a>
        <a href="https://www.twitter.com/" target="_blank">
            <Image className={`${isDark ? "brightness-0": ""} hover:opacity-50`} src={Twitter} alt="Twitter" width={20} height={20}/>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
            <Image className={`${isDark ? "brightness-0": ""} hover:opacity-50`} src={Instagram} alt="Instagram" width={20} height={20}/>
        </a>
    </div>
  )
}

export default SocialLinks