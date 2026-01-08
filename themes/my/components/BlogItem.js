import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import TwikooCommentCount from '@/components/TwikooCommentCount'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

export const BlogItem = props => {
  const { post } = props
  const { NOTION_CONFIG } = useGlobal()
  const showPageCover = siteConfig('SIMPLE_POST_COVER_ENABLE', false, CONFIG)
  const showPreview =
    siteConfig('POST_LIST_PREVIEW', false, NOTION_CONFIG) && post.blockMap

  return (
    <div
      key={post.id}
      className='py-8 group'>
      {/* 文章标题 */}

      <div className={`${showPageCover ? 'md:flex md:gap-8' : ''}`}>
        {/* 图片封面 */}
        {showPageCover && (
          <div className='mb-6 md:mb-0 md:w-56 md:flex-none'>
            <SmartLink href={post.href} passHref legacyBehavior>
              <LazyImage
                src={post?.pageCoverThumbnail}
                className='w-full h-36 md:h-40 object-cover object-center rounded-md'
              />
            </SmartLink>
          </div>
        )}

        <article className='min-w-0'>
          <h2 className='mb-3 leading-snug'>
            <SmartLink
              href={post.href}
              className='no-underline hover:underline underline-offset-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100'>
              {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post.pageIcon} />}
              {post.title}
            </SmartLink>
          </h2>

          {/* 文章信息 */}
          <header className='mb-5 text-xs tracking-wide text-gray-500 dark:text-gray-400 flex flex-wrap items-center gap-x-3 gap-y-1'>
            <a
              href={siteConfig('SIMPLE_AUTHOR_LINK', null, CONFIG)}
              className='no-underline hover:underline underline-offset-4'>
              {siteConfig('AUTHOR')}
            </a>

            <span className='select-none'>·</span>

            <SmartLink
              className='no-underline hover:underline underline-offset-4'
              href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}>
              {post.date?.start_date || post.createdTime}
            </SmartLink>

            <span className='select-none'>·</span>

            <TwikooCommentCount post={post} />

            {/* <div>
              {post.category && (
                <SmartLink href={`/category/${post.category}`} className='p-1'>
                  {' '}
                  <span className='hover:text-red-400 transition-all duration-200'>
                    <i className='fa-regular fa-folder mr-0.5' />
                    {post.category}
                  </span>
                </SmartLink>
              )}
              {post?.tags &&
                post?.tags?.length > 0 &&
                post?.tags.map(t => (
                  <SmartLink
                    key={t}
                    href={`/tag/${t}`}
                    className=' hover:text-red-400 transition-all duration-200'>
                    <span> /{t}</span>
                  </SmartLink>
                ))}
            </div> */}
          </header>

          <main className='text-sm text-gray-700 dark:text-gray-300 leading-7 '>
            {!showPreview && (
              <SmartLink
                href={post.href}
                className='no-underline hover:underline underline-offset-4'>
                {post.summary}
                {post.summary && <span>...</span>}
              </SmartLink>
            )}
            {showPreview && post?.blockMap && (
              <div className='overflow-ellipsis truncate'>
                <NotionPage post={post} />
                <hr className='border-dashed py-4' />
              </div>
            )}
          </main>
        </article>
      </div>
    </div>
  )
}
