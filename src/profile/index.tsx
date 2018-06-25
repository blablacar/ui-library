import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import Rating from 'rating'
import Button from 'button'
import Avatar from 'avatar'
import ArrowIcon from 'icon/arrowIcon'

import prefix from '_utils'
import style from 'profile/style'

interface ProfileProps {
  readonly title: string,
  readonly className?: Classcat.Class,
  readonly medium?: boolean,
  readonly picture?: string,
  readonly checked?: boolean,
  readonly alt?: string,
  readonly score?: number,
  readonly ratings?: number,
  readonly ratingsLabel?: string,
  readonly info?: string,
  readonly action?: string,
}

const Profile = ({
  className, medium, title, picture, checked, alt,
  ratingsLabel, info, action, score = 0, ratings = 0,
}: ProfileProps) => (
  <div className={cc(['kirk-profile', prefix({ medium }), className])}>
    <div className="kirk-description">
      <span className="kirk-title">{title}</span>
      { ratings > 0 &&
        <Rating ratings={ratings} score={score}>{ratingsLabel}</Rating>
      }
      <span className="kirk-secondaryInfo">{info}</span>
    </div>
    { !isEmpty(picture) &&
      <Avatar
        image={picture}
        alt={alt}
        checked={checked}
        className="kirk-picture"
        medium={medium}
      />
    }
    { !isEmpty(action) &&
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
