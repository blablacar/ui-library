import React, { PureComponent } from 'react'
import cc from 'classcat'

import Text, { TextTagType } from 'text'
import Button from 'button'

import style from 'paragraph/style'

interface ParagraphProps {
  readonly className?: Classcat.Class
  readonly children: string
  readonly expandable?: boolean
  readonly expandLabel?: string
}

interface ParagraphState {
  expanded: boolean
}

class Paragraph extends PureComponent <ParagraphProps, ParagraphState> {
  static MAX_CHAR_SIZE: number = 180

  static defaultProps: Partial<ParagraphProps> = {
    expandable: false,
    expandLabel: '',
  }

  state: ParagraphState = {
    expanded: false,
  }

  expandParagraph = () => {
    this.setState({ expanded: true })
  }

  render() {
    const { className, children, expandable, expandLabel } = this.props
    const { expanded } = this.state

    const isExpandable = expandable && !expanded && children.length > Paragraph.MAX_CHAR_SIZE
    const content = isExpandable ? `${children.substring(0, Paragraph.MAX_CHAR_SIZE)}...` : children

    return (
      <Text tag={TextTagType.PARAGRAPH} className={cc(['kirk-paragraph', this.props.className])}>
        {content}
        { isExpandable && (
          <Button
            status={Button.STATUS.UNSTYLED}
            onClick={this.expandParagraph}
          >
            {expandLabel}
          </Button>
        )}
        <style jsx global>{style}</style>
      </Text>
    )
  }
}

export default Paragraph
