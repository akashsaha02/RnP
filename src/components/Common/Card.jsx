const Card = ({ name, value, imgValue, bgColor = 'bg-gray-50' }) => {
    return (
        <div className={`grid grid-cols-3  rounded ${bgColor}`}>
            <div className='flex items-center flex-col justify-center ml-8 col-span-2 my-8'>
                <h2 className=' font-bold text-2xl'>{name}</h2>
                <h2 className='font-extrabold text-3xl pt-4'>{value}</h2>
            </div>
            <div className='mr-4 p-4 flex justify-center items-center'>
                <img className='w-100' src={imgValue} alt="" />
            </div>
        </div>
    )
}

export default Card
