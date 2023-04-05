import React, {useState} from 'react'
import {RedBg} from "../../components/RedBg/RedBg";
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {reviewApi} from "../../redux/reducers/review";
import {useAppSelector} from "../../hooks/hooksRedux";
import { v4 as uuidv4 } from 'uuid';
import {useToast} from "@chakra-ui/react";
import {format} from "timeago.js";

type reviewPost = {
    name: string,
    surname: string,
    rating: number,
    text: string,
    data: number,
    id: string,
}

export const Review = () => {

    const toast = useToast()

    const [addRating, setAddRating] = useState(0)

    const [text,setText] = useState('')

    const {data: review, isLoading, error} = reviewApi.useGetAllReviewQuery('')

    const {user} = useAppSelector(store => store.userReducer)

    const [createReview, {}] = reviewApi.useCreateReviewMutation()


    const myStyles = {
        itemShapes: Star,
        activeFillColor: '  #FFB800',
        inactiveFillColor: '#B3BCC5'
    }

    const handleCreate = async () => {

        const reviewPost: reviewPost = {
            name: user?.name,
            surname: user?.surname,
            rating: addRating,
            text: text,
            data: Date.now(),
            id: uuidv4()
        }

        toast({
            title: 'Success',
            description: "You send your review",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top-left',
        })

        createReview(reviewPost)

        setAddRating(0)

        setText('')

    }

    return(
        <section className="review">
            <RedBg title="Review"/>
            <div className="container">
                <div className="review__content">

                    {
                        isLoading ?
                            <img style={{transform: 'translate(100px, 50px)'}}
                                 src="https://cdn.dribbble.com/users/2762516/screenshots/14914852/media/40372a750de9d71d52b8e08b95215f7b.gif" alt=""/>
                            : error ? <img style={{transform: 'translate(100px, 50px)'}}
                                           src="https://media.tenor.com/i27B-Xj0CSQAAAAC/welcome-to-the-club-buddy-butt-slap.gif" alt=""/> :
                                review && review
                                    .map((review) => (
                                        <div className="review__box" key={review.id}>
                                            <div className="review__box-top">
                                                <h2 className="review__box-title">{review?.name} {review?.surname}</h2>
                                                <Rating style={{ maxWidth: 150, pointerEvents: 'none' }} value={review?.rating}/>
                                            </div>

                                            <div className="review__box-desc">
                                                {review?.text}
                                            </div>

                                            <span className="review__box-data">{format(review?.data)}</span>
                                        </div>
                                    )).reverse()
                    }
                    <form className="review__add" onSubmit={(e) => {
                        e.preventDefault()
                        handleCreate()
                    }}>
                        <p className="review__add-title">
                            Do you want to write your review?
                        </p>
                        <label className="review__add-label">
                            <p className="review__add-label-subtitle">Write review:</p>
                            <textarea value={text} onChange={(e) => setText(e.target.value)} className="review__add-label-area"/>
                        </label>

                        <div className="review__mark">
                            <p className="review__mark-subtitle">
                                Your mark:
                            </p>

                            <Rating style={{ maxWidth: 150 }} value={addRating} onChange={setAddRating} itemStyles={myStyles}/>
                        </div>

                        <button className="review__add-btn" type="submit">
                            Add feedback
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}
