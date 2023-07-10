/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import classes from './Feature.module.scss'
import { ISection } from '..'

interface Props {
  data: ISection
}

export const Feature: React.FC<Props> = ({ data }) => {
  return (
    <>
      <section className={classes.feature}>
        <div className={classes.feature__wrap}>
          <div className={classes.feature__media}>
            <img
              className={classes.feature__mediaImage}
              src={data.imageURL}
              alt=''
            />
            <h2 className={classes.feature__mediaTitle}>{data.imageTitle}</h2>
          </div>

          <div className={classes.feature__article}>
            <div className={classes.feature__articleWrap}>
              {data.articleTitle && (
                <h3 className={classes.feature__articleTitle}>
                  {data.articleTitle}
                </h3>
              )}
              <div className={classes.feature__articleText}>
                {data.articleText}
              </div>
              <Link className={classes.feature__articleLink} href={'/shop'}>
                {data.linkText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
