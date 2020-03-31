import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import CheckShieldIcon from 'icon/checkShieldIcon'
import IdCardVerifiedIcon from 'icon/idCardVerifiedIcon'
import DirectionIcon from 'icon/directionIcon'

import ColumnedContentSection, { ColumnedSectionContentMediaKind } from './index'

const stories = storiesOf('Sections|ColumnedContentSection', module)
stories.addDecorator(withKnobs)

stories.add('Simple', () => {
  const column1 = {
    title: 'Pratique',
    content:
      'Trouvez rapidement un covoiturage ou un bus à proximité parmi les millions de trajets proposés.',
  }
  const column2 = {
    title: 'Facile',
    content:
      'Trouvez le trajet parfait ! Il vous suffit d’entrer votre adresse exacte, de choisir le voyage qui vous convient le mieux, et de réserver.',
  }
  const column3 = {
    title: 'Direct',
    content:
      'Que vous prévoyiez à l’avance ou réserviez en dernière minute, vous trouverez toujours un tarif avantageux.',
  }

  return (
    <Fragment>
      <ColumnedContentSection
        title="Allez où vous voulez. D'où vous voulez."
        topLinkLabel="En savoir plus"
        topLinkHref="https://www.blablacar.fr/how-does-car-sharing-work"
        columnContentList={[column1, column2, column3]}
      />
    </Fragment>
  )
})

stories.add('Blog', () => {
  const column1 = {
    title: 'Mais au fait, c’est quoi l’histoire de l’assurance auto en France ?',
    content:
      'L’assurance auto est bien évidemment obligatoire en France mais cela n’a pas toujours été le cas. Ce n’est qu’à partir de 1930 que naît le premier code des assurances.',
    media: {
      kind: ColumnedSectionContentMediaKind.COVER,
      pictureUrl:
        'https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2016/12/16144804/carre_savings-300x300.jpg',
      href:
        'https://blog.blablacar.fr/blablalife/blablafamily/bons-plans/assurance/mais-au-fait-c-est-quoi-l-histoire-de-l-assurance-auto-en-france',
    },
    footerLinkLabel: 'En savoir plus',
    footerLinkHref:
      'https://blog.blablacar.fr/blablalife/blablafamily/bons-plans/assurance/mais-au-fait-c-est-quoi-l-histoire-de-l-assurance-auto-en-france',
  }
  const column2 = {
    title: 'Jeune conducteur ? On vous aide à trouver votre assurance auto !',
    content:
      'Vous avez longtemps covoituré en tant que passager, mais maintenant c’est terminé. Vous avez enfin acheté votre propre voiture et il va falloir assurer ce nouveau véhicule. La galère commence parce que c’est compliqué de trouver une assurance auto abordable quand on est jeune conducteur. Nous sommes tous passé par là.',
    media: {
      kind: ColumnedSectionContentMediaKind.COVER,
      pictureUrl:
        'https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2018/02/27101220/170703_BlaBlaCar_10712_900x900-300x300.jpg',
      href:
        'https://blog.blablacar.fr/blablalife/blablafamily/bons-plans/assurance/mais-au-fait-c-est-quoi-l-histoire-de-l-assurance-auto-en-france',
    },
    footerLinkLabel: 'En savoir plus',
    footerLinkHref:
      'https://blog.blablacar.fr/blablalife/blablafamily/bons-plans/assurance/mais-au-fait-c-est-quoi-l-histoire-de-l-assurance-auto-en-france',
  }
  const column3 = {
    title: 'BlaBlaSure, la 1ère assurance auto qui récompense le covoiturage',
    content:
      'La plupart d’entre vous nous connaissent pour le covoiturage si pratique et économique, mais connaissiez-vous notre offre d’assurance auto ? BlaBlaSure, c’est une assurance auto à l’année pas tout à fait comme les autres. Parmi les différences, le bonus covoitureur est un avantage exclusivement pensé pour vous. Mais c’est quoi ce bonus ? On vous explique !',
    media: {
      kind: ColumnedSectionContentMediaKind.COVER,
      pictureUrl:
        'https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2019/08/29083651/Organic_Gift_2-300x169.png',
      href:
        'https://blog.blablacar.fr/blablalife/blablafamily/bons-plans/assurance/mais-au-fait-c-est-quoi-l-histoire-de-l-assurance-auto-en-france',
    },
    footerLinkLabel: 'En savoir plus',
    footerLinkHref:
      'https://blog.blablacar.fr/blablalife/blablafamily/bons-plans/assurance/mais-au-fait-c-est-quoi-l-histoire-de-l-assurance-auto-en-france',
  }

  return (
    <Fragment>
      <ColumnedContentSection
        title="Allez où vous voulez. D'où vous voulez."
        topLinkLabel="En savoir plus"
        topLinkHref="https://www.blablacar.fr/how-does-car-sharing-work"
        columnContentList={[column1, column2, column3]}
      />
    </Fragment>
  )
})

stories.add('Pro', () => {
  const column1 = {
    title: '#1 platform in Russia for passenger auto transport*',
    content: 'Find passengers on any route among more than 20 million of BlaBlaCar travelers.',
    media: {
      kind: ColumnedSectionContentMediaKind.FIT,
      pictureUrl:
        'https://cdn.blablacar.com/kairos/assets/build/images/item_presentation_1-b0786829cd9fdc76581d2ca07d4e9357.svg',
    },
  }
  const column2 = {
    title: 'An easy-to-use website for managing trips',
    content:
      'Manage your routes and control the filling up of buses from your computer or smartphone.',
    media: {
      kind: ColumnedSectionContentMediaKind.FIT,
      pictureUrl:
        'https://cdn.blablacar.com/kairos/assets/build/images/item_presentation_2-1a58d466645859b86d9bef6e454c7e9b.svg',
    },
  }
  const column3 = {
    title: 'Personal support from BlaBlaCar PRO',
    content:
      'Your personal manager will help to get the maximum benefit from working with the platform.',
    media: {
      kind: ColumnedSectionContentMediaKind.FIT,
      pictureUrl:
        'https://cdn.blablacar.com/kairos/assets/build/images/item_presentation_3-28b79c781e8f536d800aa31254286333.svg',
    },
  }

  return (
    <Fragment>
      <ColumnedContentSection
        title="Gain access to more than 20 million travellers across the whole country"
        columnContentList={[column1, column2, column3]}
      />
    </Fragment>
  )
})

stories.add('Simple with Icons', () => {
  const column1 = {
    media: {
      kind: ColumnedSectionContentMediaKind.ELEMENT,
      element: <DirectionIcon size={90} />,
    },
    title: 'Avoir le choix',
    content:
      "L'avantage des routes ? Elles vont partout ! Littéralement. Profitez de milliers de destinations.",
  }
  const column2 = {
    media: {
      kind: ColumnedSectionContentMediaKind.ELEMENT,
      element: <IdCardVerifiedIcon size={90} />,
    },
    title: 'Communauté',
    content:
      "Nous connaissons chacun de nos membres et de nos partenaires de bus. Comment ? Nous vérifions profils, avis, et pièces d'identité. Vous savez ainsi avec qui vous voyagez.",
  }
  const column3 = {
    media: {
      kind: ColumnedSectionContentMediaKind.ELEMENT,
      element: <CheckShieldIcon size={90} />,
    },
    title: 'Assurance',
    content:
      "Assurez votre voiture à l'année avec BlaBlaSure : profitez de couvertures conçues pour les covoitureurs avec AXA à des tarifs très compétitifs !",
    footerLinkLabel: 'En savoir plus',
    footerLinkHref: 'https://www.blablacar.fr/insurance-carpooling',
    deprecatedExtraFooter: (
      <img
        style={{ height: '64px', marginTop: '16px' }}
        src="https://cdn.blablacar.com/kairos/assets/build/images/blablasure_logo-459e4b952a6cc04b72ea0e12f98ec673.svg"
        alt="BlaBlaSure"
      />
    ),
  }

  return (
    <Fragment>
      <ColumnedContentSection
        title="Ce qui va vous plaire"
        columnContentList={[column1, column2, column3]}
      />
    </Fragment>
  )
})
