import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { saveAs } from 'file-saver';
import { marked } from 'marked';
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FaCopy, FaDownload, FaEdit, FaFilePdf } from 'react-icons/fa';
import './ToolBar.css';
import { DocumentContext } from '../Provider/DocumentProvider';
import saveDocument from '../../functionality/saveDocument';

const ToolBar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { mdxRef, editorRef, history, setHistory, title, setTitle, documentId } = useContext(DocumentContext);
  const titleInputRef = useRef(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (isEditing) {
      titleInputRef.current?.focus();
    }
  }, [isEditing]);


  // Handle title change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  pdfMake.addVirtualFileSystem(pdfFonts);

  // Toggle between editable and non-editable state
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle download as MD
  const handleDownloadMD = useCallback(() => {
    const blob = new Blob([mdxRef.current?.getMarkdown()], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, `${title}.md`);
  }, []);

  // Handle download as PDF
  const handleDownloadPDF = () => {
    let markdownContent = mdxRef.current?.getMarkdown();
    markdownContent = markdownContent.replaceAll("```json", "\n");

    const htmlContent = marked(markdownContent);
    const pdfContent = htmlToPdfmake(htmlContent);
    const documentDefinition = { content: pdfContent };
    pdfMake.createPdf(documentDefinition).download('document.pdf');
  };

  // Handle save
  const handleSave = useCallback(async () => {
    setIsSaving(true);
    try {
      let result = await saveDocument(title, mdxRef.current.getMarkdown(), editorRef.current.getValue());
      let markdown = result.data.savedDocument;

      setHistory([...history, { _id: markdown._id, documentId: markdown.documentId, documentName: markdown.documentName }]);
    } finally {
      setIsSaving(false);
    }
  }, [title, history]);

  // Handle title blur to stop editing
  const handleBlur = () => {
    setIsEditing(false);
    setTitle(document.querySelector(".toolbar input").value)
  };

  const copyText = () => {
    const code = mdxRef.current?.getMarkdown();
    navigator.clipboard.writeText(code);
  }

  return (
    <div className="toolbar">
      <input
        ref={titleInputRef}
        type="text"
        value={title}
        onChange={handleTitleChange}
        onDoubleClick={toggleEdit}
        onBlur={handleBlur}
        readOnly={!isEditing}
        style={{
          fontWeight: isEditing ? 'normal' : 'bold',
          fontSize: '16px',
          border: 'none',
          borderBottom: '2px solid rgb(255, 255, 255)',
          background: 'transparent',
          borderRadius: '0',
          cursor: 'pointer',
        }}
      />
      <button type="button" className="edit-title-btn" onClick={toggleEdit} title="Edit title">
        <FaEdit />
      </button>

      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" variant="primary">
          <FaDownload style={{ marginRight: '5px' }} />
          Download
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleDownloadMD}>
            <FaDownload style={{ marginRight: '5px' }} />
            MD
          </Dropdown.Item>
          <Dropdown.Item onClick={handleDownloadPDF}>
            <FaFilePdf style={{ marginRight: '5px' }} />
            PDF
          </Dropdown.Item>
          <Dropdown.Item onClick={copyText}>
            <FaCopy style={{ marginRight: '5px' }} />
            Copy
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button onClick={handleSave} variant="success" disabled={isSaving}>
        {isSaving
          ? <><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" style={{ marginRight: '5px' }} />Saving...</>
          : 'Save'}
      </Button>
    </div>
  );
};

export default ToolBar;
