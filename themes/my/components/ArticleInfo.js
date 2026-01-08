import CONFIG from '../config'
import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'
import SmartLink from '@/components/SmartLink'
import { formatDateFmt } from '@/lib/utils/formatDate'

/**
 * 文章描述
 * @param {*} props
 * @returns
 */
export default function ArticleInfo (props) {
  const { post } = props

  return (
        <section className='mt-2'>
            <h1 className='mb-3 leading-snug text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100'>
                {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}
                {post?.title}
            </h1>

            {post?.type !== 'Page' && (
                <div className='text-xs tracking-wide text-gray-500 dark:text-gray-400 flex flex-wrap items-center gap-x-3 gap-y-1'>
                    <a
                        href={siteConfig('SIMPLE_AUTHOR_LINK', null, CONFIG)}
                        className='no-underline hover:underline underline-offset-4'>
                        {siteConfig('AUTHOR')}
                    </a>

                    <span className='select-none'>·</span>

                    <SmartLink
                        className='no-underline hover:underline underline-offset-4'
                        href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}>
                        {post?.publishDay}
                    </SmartLink>

                    {post?.category && (
                        <>
                            <span className='select-none'>·</span>
                            <a
                                href={`/category/${post?.category}`}
                                className='no-underline hover:underline underline-offset-4'>
                                {post?.category}
                            </a>
                        </>
                    )}
                </div>
            )}
        </section>
  )
}
