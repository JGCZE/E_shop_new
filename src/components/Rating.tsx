import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

interface RatingProps {
    rating: number
    onClick: (index: number) => void // add type to onClick prop
  }

const Rating = ({ rating, onClick }: RatingProps) => {
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