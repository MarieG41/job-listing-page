import datas from './data.json'
import './job.css'

export default function Job() {
    return (
        <>
            {datas.map((data) => {
                return (
                    <div className='job-item' key={data.id}>
                        <img src={require(`${data.logo}`)} alt={`logo de ${data.company}`} />
                        <h2 className='title'>{data.company}</h2>
                        <span>{data.new}</span>
                        <span>{data.featured}</span>
                        <h3>{data.position}</h3>
                        <p>{data.role}</p>
                        <p>{data.level}</p>
                        <p className='grey'>{data.postedAt}</p>
                        <p className='grey'>{data.location}</p>
                        <p className='grey'>{data.contract}</p>
                        <p>{data.languages}</p>
                        <p>{data.tools}</p>
                    </div>
                )
            })}
        </>
    )
}