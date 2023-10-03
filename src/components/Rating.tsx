import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rating, onClick }) => {
  return (
    <>
      {
        [...Array(5)].map((_, i) => (
            
            <span key={i} onClick={() => onClick(i)}>
                { rating > i ? (
                    <AiFillStar className="fas fa-star" />
                ) : (
                    <AiOutlineStar className="far fa-star" />
                )} 

            </span>
        ))
      }  

    </>
  )
}

export default Rating