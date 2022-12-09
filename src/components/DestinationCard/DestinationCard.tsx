import React from 'react'
import './DestinationCard.scss'
import DestinationCardVector from '../../../src/images/DestinationCardVector.svg?url'

type DestinationCardProps = {
    name: string | undefined,
    picture: any,
    price: string | undefined,
    duration: string | undefined
}

const DestinationCard = (props: DestinationCardProps) => {   
    {
        return (
            <section className="destinationCard">
                <img className="destinationImage" src={props.picture}  alt=""/>
                <div className="destinationDescription">
                    <p className="spanDestinationName">{props.name}</p>
                    <p className="spanDestinationPrice">{props.price}</p>
                    <img className="destinationCardVector" src={DestinationCardVector} alt=""/>
                    <p className="spanDestinationDuration">{props.duration}</p>
                </div>
            </section>
        )
    }

}

export default DestinationCard

