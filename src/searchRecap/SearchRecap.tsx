import React, { Fragment } from 'react'
import cc from 'classcat'

import { color } from '../_utils/branding'
import ArrowIcon from '../icon/arrowIcon'
import SearchIcon from '../icon/searchIcon'
import Text, { TextTagType } from '../text'
import UneditableTextField from '../uneditableTextField'

export interface SearchRecapProps {
  className?: string
  from?: string
  to?: string
  info?: string
}

export const separatorWidth: number = 14

const SearchRecap = ({ className, from, to, info }: SearchRecapProps) => (
  <div className={cc(['kirk-searchRecap', className])}>
    <UneditableTextField addOn={<SearchIcon />} ellipsis>
      <Fragment>
        <Text
          tag={TextTagType.PARAGRAPH}
          textColor={color.midnightGreen}
          className="kirk-requestRecap-route"
        >
          {from && <span className="kirk-requestRecap-location">{from}</span>}
          {from && to && (
            <ArrowIcon
              className="kirk-requestRecap-locationSeparator"
              size={separatorWidth}
              iconColor={color.lightMidnightGreen}
              right
            />
          )}
          {to && <span className="kirk-requestRecap-location">{to}</span>}
        </Text>
        {info && (
          <Text tag={TextTagType.SPAN} className="kirk-requestRecap-info">
            {info}
          </Text>
        )}
      </Fragment>
    </UneditableTextField>
  </div>
)

export default SearchRecap
