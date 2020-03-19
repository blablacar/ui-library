import React from 'react'
import { shallow } from 'enzyme'

import Card from '_utils/card'
import ItemInfo from 'itemInfo'
import SubHeader from 'subHeader'

import QrCard from './QrCard'

const mockedProps = {
  title: 'Title',
  imageUrl: 'http://link',
}

describe('QrCard component', () => {
  it('Should have the base class and use a Card component', () => {
    const qrCard = shallow(<QrCard {...mockedProps} />)

    expect(qrCard.hasClass('kirk-qrCard')).toBe(true)
    expect(qrCard.find(Card).exists()).toBe(true)
  })

  it('Should have the test class', () => {
    const qrCard = shallow(<QrCard {...mockedProps} className="test" />)

    expect(qrCard.hasClass('test')).toBe(true)
  })

  it('Should render the title in a TextSubHeaderStrong', () => {
    const qrCard = shallow(<QrCard {...mockedProps} />)

    expect(qrCard.find(SubHeader).exists()).toBe(true)
  })

  it('Should not render an itemInfo', () => {
    const qrCard = shallow(<QrCard {...mockedProps} />)

    expect(qrCard.find(ItemInfo).exists()).toBe(false)
  })

  it('Should render an itemInfo', () => {
    const qrCard = shallow(
      <QrCard {...mockedProps} itemMainTitle="itemMainTitle" itemMainInfo="itemMainInfo" />,
    )

    expect(qrCard.find(ItemInfo).exists()).toBe(true)
  })

  it('Should render an itemInfo with itemMainTitle and without itemMainInfo', () => {
    const itemMainTitle = 'itemMainTitle'
    const qrCard = shallow(<QrCard {...mockedProps} itemMainTitle={itemMainTitle} />)
    const itemInfo = qrCard.find(ItemInfo)

    expect(itemInfo.exists()).toBe(true)
    expect(itemInfo.prop('mainTitle')).toEqual(itemMainTitle)
    expect(itemInfo.prop('mainInfo')).toEqual(undefined)
  })

  it('Should render an itemInfo with itemMainInfo and without itemMainTitle', () => {
    const itemMainInfo = 'itemMainInfo'
    const qrCard = shallow(<QrCard {...mockedProps} itemMainInfo={itemMainInfo} />)
    const itemInfo = qrCard.find(ItemInfo)

    expect(itemInfo.exists()).toBe(true)
    expect(itemInfo.prop('mainInfo')).toEqual(itemMainInfo)
    expect(itemInfo.prop('mainTitle')).toEqual(undefined)
  })
})
