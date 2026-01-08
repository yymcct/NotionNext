import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import DarkModeButton from '@/components/DarkModeButton'
import { MenuList } from './MenuList'

/**
 * 网站顶部
 * @returns
 */
export default function Header(props) {
  return (
    <header className='w-full bg-white dark:bg-black relative z-20 border-b border-gray-100 dark:border-hexo-black-gray'>
      <div className='mx-auto max-w-9/10 h-16 px-6 flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <SmartLink href='/' className='no-underline'>
            <div className='text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100'>
              {siteConfig('TITLE') || siteConfig('AUTHOR')}
            </div>
          </SmartLink>
          <DarkModeButton />
        </div>

        <nav className='flex items-center'>
          <MenuList customNav={props?.customNav} customMenu={props?.customMenu} />
        </nav>
      </div>
    </header>
  )
}
