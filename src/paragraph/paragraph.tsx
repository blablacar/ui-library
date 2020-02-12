import React, { PureComponent } from 'react'
import cc from 'classcat'
import Text, { TextTagType } from 'text'
import Button, { ButtonStatus } from 'button'

const DEFAULT_MAX_CHAR_SIZE = 180

export interface ParagraphProps {
  readonly className?: Classcat.Class
  readonly children: string
  readonly isExpandable?: boolean
  readonly expandLabel?: string
}

interface ParagraphState {
  readonly isExpanded: boolean
}

class Paragraph extends PureComponent<ParagraphProps> {
  static defaultProps: Partial<ParagraphProps> = {
    className: '',
    isExpandable: false,
    expandLabel: '',
  }

  state: ParagraphState = {
    isExpanded: false,
  }

  expandParagraph = () => {
    this.setState({ isExpanded: true })
  }

  getTruncatedText() {
    return `${this.props.children.substring(0, DEFAULT_MAX_CHAR_SIZE)}…`
  }

  render() {
    const { className, children: originalContent, isExpandable, expandLabel } = this.props
    const { isExpanded } = this.state

    const isContentTruncated =
      isExpandable && !isExpanded && originalContent.length > DEFAULT_MAX_CHAR_SIZE
    const content = isContentTruncated ? this.getTruncatedText() : originalContent

    const readMoreButton = isContentTruncated && (
      <Button status={ButtonStatus.UNSTYLED} onClick={this.expandParagraph} className="mt-s">
        {expandLabel}
      </Button>
    )

    return (
      <div className={cc(className)} role="presentation">
        <Text tag={TextTagType.PARAGRAPH} newlineToBr>
          {content}
        </Text>
        {readMoreButton}
      </div>
    )
  }
}

export default Paragraph
