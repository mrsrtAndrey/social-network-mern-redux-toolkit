import React, {useRef, useEffect, useState} from 'react'
import './CreatePost.scss'
import { useEditor, EditorContent, ReactNodeViewRenderer } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import IconUser from '../UI/IconUser/IconUser'

//Code
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import CodeBlockComponent from './CodeBlock/CodeBlock'
import {lowlight} from 'lowlight'

//img
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'

import MenuBar from './MenuBar';
import Button from '../UI/Button/Button'

const CreatePost = () => {
   const textareaElement = useRef(null);
   const [activeTextarea, serActiveTextarea] = useState(false)
   const editor = useEditor({
      extensions: [
         Document,
         Paragraph,
         Text,
         Image,
         Dropcursor,
         CodeBlockLowlight.extend({
            addNodeView() {
               return ReactNodeViewRenderer(CodeBlockComponent)
            },
         }).configure({ lowlight }),
         StarterKit,
         Placeholder.configure({
            placeholder: 'Write something …'
         }),
         TextAlign.configure({
           types: ['heading', 'paragraph'],
         }),
      ],
      editable: true,
   })

   const editorContent = () => {
      console.log(editor.getHTML())
      editor.commands.clearContent()
   }

   useEffect(() => {
      const onClick = e => textareaElement.current.contains(e.target)?serActiveTextarea(true):serActiveTextarea(false);
      document.addEventListener('click', onClick);
      return () => document.removeEventListener('click', onClick);
   }, []);

   return (
      <div className= "textarea" translate="no"  ref={textareaElement}>
         <div className='editor-container'>
            <IconUser />
            <EditorContent className={activeTextarea?"editor active":"editor"} editor={editor}/>
         </div>
         <div className={activeTextarea?"btn_group show":"btn_group hide"}>
            <div className='btn_editor'>
               <MenuBar editor={editor} />
            </div>
            <Button type="fill" onClick={editorContent}>Создать пост</Button>
         </div>
      </div>
   );
};
export default CreatePost