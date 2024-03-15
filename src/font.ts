import { Roboto, Poppins} from 'next/font/google' 

export const font_title = Poppins({
  weight: ['400','700'],
  display: 'swap',
  variable: '--font-title',
  subsets:['latin'],
  style:'normal'
})
export const font_body = Roboto({
  weight: ['400','700'],
  display: 'swap',
  variable: '--font-body',
  subsets:['latin'],
  style:'normal'
})