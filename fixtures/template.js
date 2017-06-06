// @flow
import React from 'react';
import { EditorBlock } from 'draft-js';
import Style from './EmbedInputRenderer.css';

type ContentBlock = {
  getText: () => string,
};

export default class EmbedInputRenderer extends React.Component {
  props: {
    block: ContentBlock,
    text: string,
  }

  render() {
    const { text, ...props } = this.props;
    const placeholder = this.props.block.getText() === ''
      ? <div className={Style.placeholder}>{text}</div>
      : null;

    return (
      <div style={{ position: 'relative' }}>
        {placeholder}
        <div className={Style.editor}>
          <EditorBlock {...props} />
        </div>
      </div>
    );
  }
}
