const Card = ({name, value, imgValue}) => {
    return (
        <div className="flex items-center justify-around h-32 rounded bg-gray-50 dark:bg-gray-800">
            <div className='ml-5'>
                <h2 className=' font-bold text-xl'>{name}</h2>
                <h2 className='font-extrabold text-3xl pt-2'>{value}</h2>
            </div>
            <div className='mr-5'>
                <img className='w-auto' src={imgValue} alt="" />
            </div>
        </div>
    )
}

export default Card
