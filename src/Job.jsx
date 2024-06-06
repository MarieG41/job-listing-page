import { useEffect, useState } from 'react'
import datas from './data.json'
import './job.css'

export default function Job() {
    const [ role, setRole ] = useState(false)
    const [ datasList, setDatasList ] = useState([])

    function handleRole() {
        setRole(!role)
        console.log('click');
    }
    useEffect(() => {
        const filteredRole = role ? datas.filter((data) => data.role) : datas
        setDatasList(filteredRole)
    }, [role])
    return (
        <>
            {datasList.length > 0 && datas.map((data) => {
                return (
                    <div className='job-item grid' key={data.id}>
                        <div className='div-img'>
                            <img src={require(`${data.logo}`)} alt={`logo de ${data.company}`} />
                        </div>
                        <div className='div-main-infos'>
                            <div className='flex'>
                                <h2 className='title'>{data.company}</h2>
                                {data.new && <span className='new'>NEW!</span>}
                                {data.featured && <span className='featured'>FEATURED</span>}
                            </div>
                            
                            <h3 className='position'>{data.position}</h3>
                            <div className='flex'>
                                <p className='grey'>{data.postedAt}<span> . </span></p>
                                <p className='grey'>{data.contract}<span> . </span></p>
                                <p className='grey'>{data.location}</p>
                            </div>
                        </div>
                        <div className='div-other-infos flex'>
                            <button className='tag' onClick={handleRole}>{data.role}</button>
                            <p className='tag'>{data.level}</p>
                            <p className='tag'>{data.languages}</p>
                            <p className='tag'>{data.tools}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}