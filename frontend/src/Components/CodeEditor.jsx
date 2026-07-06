import { useContext, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import '../Css/CodeEditor.css';
import GenerateDocument from '../functionality/generateDocument';
import { DocumentContext } from './Provider/DocumentProvider';

export default function CodeEditor() {
  const { editorRef, code } = useContext(DocumentContext);

  useEffect(() => {
    editorRef?.current?.getModel().setValue(code)
  }, [code, editorRef])

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }


  return (
    <div className='codeEditor'>
      <Editor
        height="100vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue="//Enter Your API code here..."
        options={{
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
        }}
        onMount={handleEditorDidMount}
      />

    </div>
  );
}
