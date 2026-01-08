import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import { siteConfig } from '@/lib/config'

/**
 * 页脚
 * @param {*} props
 * @returns
 */
export default function Footer(props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = currentYear

  return (
    <footer className='relative w-full bg-white dark:bg-black   dark:border-hexo-black-gray max-w-3xl mx-auto mb-12 px-4 md:px-0'>
      <div className='mx-auto  flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-gray-500 dark:text-gray-400'>
        <div className='text-center md:text-left'>
          &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}
        </div>

        {/* <div className='text-center md:text-right text-xs flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1'>
          {siteConfig('BEI_AN') && (
            <a
              href={siteConfig('BEI_AN_LINK')}
              className='no-underline hover:underline text-gray-500 dark:text-gray-400'>
              {siteConfig('BEI_AN')}
            </a>
          )}
          <BeiAnGongAn />
        </div> */}
      </div>
    </footer>
  )
}
