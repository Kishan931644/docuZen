import { useContext, useEffect } from 'react';
import {
    MDXEditor,
    headingsPlugin,
    listsPlugin,
    tablePlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    toolbarPlugin,
    sandpackPlugin,
    codeMirrorPlugin,
    codeBlockPlugin,
    diffSourcePlugin,
    linkPlugin,
    linkDialogPlugin,
    InsertCodeBlock,
    InsertSandpack,
    InsertTable,
    UndoRedo,
    BoldItalicUnderlineToggles,
    BlockTypeSelect,
    CodeToggle,
    CreateLink,
    DiffSourceToggleWrapper,
    ConditionalContents,
    ShowSandpackInfo
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import '../Css/MarkDownEditor.css';

import '../App.css';
import { DocumentContext } from './Provider/DocumentProvider';

function MarkdownEditor() {
    const { mdxRef, documentation } = useContext(DocumentContext);

    useEffect(() => {
        mdxRef?.current?.insertMarkdown(documentation);
        mdxRef?.current?.setMarkdown(documentation);
    }, [documentation, mdxRef])

    const defaultSnippetContent = `
            export default function App() {
            return (
                <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                </div>
            );
            }
        `.trim()

    const simpleSandpackConfig = {
        defaultPreset: 'react',
        presets: [
            {
                label: 'React',
                name: 'react',
                meta: 'live react',
                sandpackTemplate: 'react',
                sandpackTheme: 'dark',
                snippetFileName: '/App.js',
                snippetLanguage: 'jsx',
                initialSnippetContent: defaultSnippetContent
            },
        ]
    }

    return (
        <div className='markDown'>
            <MDXEditor
                ref={mdxRef}
                style={{ color: "white" }}
                className="mdx-editor dark-theme dark-editor"
                markdown={documentation}
                plugins={[
                    headingsPlugin(),
                    listsPlugin(),
                    quotePlugin(),
                    thematicBreakPlugin(),
                    markdownShortcutPlugin(),
                    tablePlugin(),
                    linkPlugin(), linkDialogPlugin(),
                    diffSourcePlugin({ diffMarkdown: '', viewMode: 'rich-text' }),
                    codeBlockPlugin({ defaultCodeBlockLanguage: 'json' }),
                    sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
                    codeMirrorPlugin({ codeBlockLanguages: { json: "JavaScript", js: "Javascript" } }),
                    toolbarPlugin({
                        toolbarContents: () => (
                            <>
                                <ConditionalContents
                                    options={[
                                        { when: (editor) => editor?.editorType === 'sandpack', contents: () => <ShowSandpackInfo /> },
                                        {
                                            fallback: () => (<>
                                                <InsertCodeBlock />
                                                <InsertSandpack />
                                            </>)
                                        }
                                    ]}
                                />
                                <UndoRedo />
                                <BoldItalicUnderlineToggles />
                                <CodeToggle />
                                <BlockTypeSelect />
                                <CreateLink />
                                <InsertTable />
                                <DiffSourceToggleWrapper>
                                </DiffSourceToggleWrapper>
                            </>
                        )
                    })
                ]}
            />

        </div>
    );
}


export default MarkdownEditor;
