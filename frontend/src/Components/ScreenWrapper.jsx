import MarkdownEditor from './MarkdownEditor';
import CodeEditor from './CodeEditor';
import ToolBar from './ToolBar/ToolBar';
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { useContext, useState } from 'react';
import { DocumentContext } from './Provider/DocumentProvider';
import GenerateDocument from '../functionality/generateDocument';

export default function ScreenWrapper() {
    const [isGenerating, setIsGenerating] = useState(false);
    const { setDocumentation, editorRef } = useContext(DocumentContext);
    const generate = async () => {
        setIsGenerating(true);

        const data = await GenerateDocument(editorRef);
        setDocumentation(data.data.markdownContent);

        setIsGenerating(false);
    }
    return (
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <ToolBar />
            <PanelGroup direction="horizontal">
                <Panel defaultSize={50}>
                    <CodeEditor />
                </Panel>
                <PanelResizeHandle />
                <Panel style={{ height: "100%" }}>
                    <MarkdownEditor />
                </Panel>
            </PanelGroup>

            <button style={{ display: "flex", gap: ".4rem", alignItems: "center" }} className='generate-doc-btn' onClick={generate}>
                <img width="18px" height="18px" src="/public/ai-technology.png" />
                {isGenerating ? "Generating..." : "Generate Document"}
            </button>
        </div>
    );
}
