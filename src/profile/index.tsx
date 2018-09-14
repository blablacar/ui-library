import React from 'react'
import cc from 'classcat'

import Avatar from 'avatar'
import Button from 'button'
import Rating from 'rating'
import ArrowIcon from 'icon/arrowIcon'

import prefix from '_utils'
import style from 'profile/style'

interface ProfileProps {
  readonly title: string,
  readonly className?: Classcat.Class,
  readonly isMedium?: boolean,
  readonly picture?: string,
  readonly isIdChecked?: boolean,
  readonly alt?: string,
  readonly score?: number,
  readonly ratings?: number,
  readonly ratingsLabel?: string,
  readonly info?: string,
  readonly action?: string,
}

const Profile = ({
  className, isMedium, title, picture, isIdChecked, alt,
  ratingsLabel, info, action, score = 0, ratings = 0,
}: ProfileProps) => (
    <div className={cc(['kirk-profile', prefix({ medium: isMedium }), className])}>
      <div className="kirk-description">
        <span className="kirk-title">{title}</span>
        {ratings > 0 &&
          <Rating ratings={ratings} score={score}>{ratingsLabel}</Rating>
        }
        <span className="kirk-secondaryInfo">{info}</span>
      </div>
      {picture &&
        <Avatar
          image={picture}
          alt={alt}
          isIdChecked={isIdChecked}
          className="kirk-picture"
          isMedium={isMedium}
        />
      }
      {action &&
        <div>
          <Button status={Button.STATUS.UNSTYLED} title={action}>
            <ArrowIcon right />
          </Button>
        </div>
      }
      <style jsx>{style}</style>
    </div>
  )

export default Profile
