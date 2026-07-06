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
    CodeMirrorEditor,
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
                    codeBlockPlugin({
                        defaultCodeBlockLanguage: 'json',
                        // Catch-all so any language the AI outputs (or none) still renders
                        // instead of throwing "Unsupported markdown syntax" in rich-text mode.
                        codeBlockEditorDescriptors: [{ priority: -10, match: () => true, Editor: CodeMirrorEditor }]
                    }),
                    sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
                    codeMirrorPlugin({
                        codeBlockLanguages: {
                            '': 'Plain Text',
                            json: 'JSON',
                            js: 'JavaScript',
                            jsx: 'JavaScript (React)',
                            ts: 'TypeScript',
                            tsx: 'TypeScript (React)',
                            css: 'CSS',
                            html: 'HTML',
                            xml: 'XML',
                            bash: 'Bash',
                            sh: 'Shell',
                            shell: 'Shell',
                            python: 'Python',
                            py: 'Python',
                            java: 'Java',
                            c: 'C',
                            cpp: 'C++',
                            csharp: 'C#',
                            go: 'Go',
                            php: 'PHP',
                            ruby: 'Ruby',
                            rust: 'Rust',
                            sql: 'SQL',
                            yaml: 'YAML',
                            yml: 'YAML',
                            markdown: 'Markdown',
                            md: 'Markdown',
                            http: 'HTTP',
                            graphql: 'GraphQL',
                            diff: 'Diff',
                            plaintext: 'Plain Text',
                            text: 'Plain Text'
                        }
                    }),
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
