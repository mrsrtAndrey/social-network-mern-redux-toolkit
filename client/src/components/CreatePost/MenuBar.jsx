import React from 'react'
import {TextCenter, TextRight, TextLeft, TypeItalic, TypeBold, TypeH1, TypeH2, TypeH3, Type, Code, Justify, Image} from 'react-bootstrap-icons'

const MenuBar = ({ editor }) => {
   if (!editor) {
      return null
   }

   const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

   return (
     <React.Fragment>
       <ul className=''>
          <li onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
            <TypeH1/>
          </li>
          <li onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
            <TypeH2/>
          </li>
          <li onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
            <TypeH3/>
          </li>
          <li onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>
            <Type/>
          </li>
          </ul>
          <ul>
          <li onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
            <TypeBold/>
          </li>
          <li onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
            <TypeItalic/>
          </li>
          </ul>
          <ul>
          <li onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
            <TextLeft/>
          </li>
          <li onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
            <TextCenter/>
          </li>
          <li onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
            <TextRight/>
          </li>
          <li onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
            <Justify/>
          </li>
        </ul>
        <ul>
          <li onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? 'is-active' : ''}>
            <Code/>
          </li>
          <li onClick={addImage}><Image/></li>
        </ul>
     </React.Fragment>
   );
};
export default MenuBar