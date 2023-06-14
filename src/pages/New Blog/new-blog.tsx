import {useState,useEffect,useRef } from "react"
import SunEditor from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css';;

const NewBlog = () => {
    const [value, setValue] = useState<string>('');
    const previewRef = useRef<HTMLDivElement>(null)
    const editor = useRef<SunEditorCore>();
    useEffect(() => {
        // console.log(value)
        
    }, [value])
    const handleContentChange = (e:string)=>{
        // console.log(e);
        setValue(e);
        if(previewRef.current){
            previewRef.current.innerHTML = e;
        }
    }
    if(editor.current){
        editor.current.onChange = (e)=>{
            console.log(e)
            console.log(editor.current) 
        }
    }
    
      return  <>
      <SunEditor
      onChange={handleContentChange}
      setContents="Initial content"

    />
    <h1>Preview</h1>
    <div ref={previewRef} ></div>
      </> 

}

export default NewBlog