import React ,{useEffect, useState,useRef} from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection , onSnapshot} from 'firebase/firestore';



export default function Docs({database})
{
    const [open,setOpen] = useState(false);
    const [title,setTitle] = useState('');
    const [docsData,setDocsData] = useState([]);
    let navigate = useNavigate()
    const isMounted = useRef()
    useEffect( () => { 
        if(isMounted.current)
        {
            return
        }
        isMounted.current=true;
        getData() 
    },[])
    const handleOpen = () => setOpen(true);
    const collectionRef = collection(database,'docsData');
    const handleClose = () => {}

    const addData = () => {
        addDoc(collectionRef,{title:title,docsDesc:''})
        .then(() => {
        alert('Data Added')
        handleClose()
        })
        .catch( () => {
        alert('Cannot add data')
        })
    }
    const getData = () => {
         onSnapshot(collectionRef,(data) => {
            setDocsData(data.docs.map( (doc) => {
                return {
                    ...doc.data(),id:doc.id
                }
            }

            ))
         })
    }

    const getID = (id) =>
    {
        navigate(`/editDocs/${id}`)
    }

    return (
        <div className='docs-main'>
            <h1>Docs Clone</h1>
            <button className='add-docs' onClick={handleOpen}> Add a Document</button>
            <div className = 'grid-main'> {docsData.map((doc) => {
                 return <div className='grid-child' onClick={() => getID(doc.id)}> <p>{doc.title}</p><div dangerouslySetInnerHTML={{__html:doc.docsDesc}}/></div>
                })} </div>
            <Modal open ={open} setOpen={setOpen} title={title} setTitle={setTitle} addData={addData}/>
        </div>
    )
}
