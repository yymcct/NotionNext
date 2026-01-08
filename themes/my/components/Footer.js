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
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative w-full bg-white dark:bg-black border-t border-gray-100 dark:border-hexo-black-gray'>
      <div className='mx-auto max-w-9/10 px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-gray-500 dark:text-gray-400'>
        <div className='text-center md:text-left'>
          &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights reserved.
        </div>

        <div className='text-center md:text-right text-xs flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1'>
          {siteConfig('BEI_AN') && (
            <a
              href={siteConfig('BEI_AN_LINK')}
              className='no-underline hover:underline text-gray-500 dark:text-gray-400'>
              {siteConfig('BEI_AN')}
            </a>
          )}
          <BeiAnGongAn />
          {/* <span className='text-gray-500 dark:text-gray-400'>
            Powered by{' '}
            <a
              href='https://github.com/tangly1024/NotionNext'
              className='no-underline hover:underline text-gray-500 dark:text-gray-400'>
              NotionNext {siteConfig('VERSION')}
            </a>
          </span> */}
        </div>
      </div>
    </footer>
  )
}
