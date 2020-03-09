import React, { useContext } from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'
import SearchIcon from 'icon/searchIcon'
import { CalendarIcon } from 'icon/calendarIcon'
import { Bullet } from 'index'
import { BulletTypes } from 'bullet'
import { StandardSeat } from 'icon/standardSeat'
import { DoubleArrowIcon } from 'icon/doubleArrowIcon'
import Divider from 'divider'
import { MediaSize, MediaSizeContext } from '_utils/mediaSizeProvider/MediaSizeProvider'

export interface SearchFormProps {
  className?: string
}

const SearchForm = ({ className }: SearchFormProps) => {
  const mediaSize = useContext(MediaSizeContext)
  return (
    <div className={cc(['kirk-searchForm', className])}>
      <div className="kirk-searchForm-from-container">
        <div className="kirk-searchForm-from">
          <button type="button" className="kirk-search-button">
            <Bullet type={BulletTypes.SEARCH} className="kirk-bullet--searchForm" /> Leaving from
          </button>
          {mediaSize === MediaSize.SMALL && <Divider />}
        </div>
        <div className="kirk-searchForm-invert">
          <button type="button" className="kirk-search-button">
            <DoubleArrowIcon iconColor={color.primary} />
          </button>
          {mediaSize === MediaSize.SMALL && <Divider />}
        </div>
      </div>

      <div className="kirk-searchForm-to">
        <button type="button" className="kirk-search-button">
          <Bullet type={BulletTypes.SEARCH} className="kirk-bullet--searchForm" /> Going to
        </button>
        {mediaSize === MediaSize.SMALL && <Divider />}
      </div>
      <div className="kirk-searchForm-dateSeat-container">
        <div className="kirk-searchForm-date">
          <button type="button" className="kirk-search-button">
            <CalendarIcon /> Today
          </button>
        </div>
        <div className="kirk-searchForm-seats">
          <button type="button" className="kirk-search-button">
            <StandardSeat /> 1 seat
          </button>
        </div>
      </div>
      <div className="kirk-searchForm-submit">
        <button type="button" className="kirk-search-button">
          <SearchIcon iconColor={color.textWithBackground} strokeWidth="2" />
        </button>
      </div>
    </div>
  )
}

export default SearchForm
