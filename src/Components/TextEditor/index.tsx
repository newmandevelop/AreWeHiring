import React from 'react';
import 'draft-js/dist/Draft.css';
import { Editor } from 'react-draft-wysiwyg';
import Label from './../Label/index';
import { EditorState, DraftHandleValue } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './index.module.scss';
interface IProps {
  label?: string;
}

const TextEditor = (props: IProps) => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );
  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  const handleKeyCommand = (command: string): DraftHandleValue => {
    console.log('command', command);
    if (command === 'myeditor-save') {
      console.log('text');
      return 'handled';
    }
    return 'not-handled';
  };
  return (
    <>
      <div className={styles.textEditorWrapper}>
        <Label label={props.label} />

        <div className={styles.editor} style={{ width: '96%' }}>
          <Editor
            onChange={e => console.log(e)}
            handleKeyCommand={handleKeyCommand}
            wrapperClassName="rich-editor demo-wrapper"
            editorClassName={styles.editorBoard}
            toolbarClassName={styles.toolbar}
            toolbar={{
              options: ['inline', 'blockType', 'list'],
              blockType: {
                inDropdown: true,
                options: ['Normal', 'H1', 'H2', 'H5', 'Code'],
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
              },
              inline: {
                options: ['bold', 'italic', 'underline'],
              },
            }}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      </div>
    </>
  );
};
export default TextEditor;
