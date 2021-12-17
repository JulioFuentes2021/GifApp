import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CarouselItem, Img } from '../styles/Carousel.style';

const Carousel1 = () => {
    return (
            <Carousel
            ariaLabel='Holaaaa'
                // autoFocus="true"
                // autoPlay
                centerMode
                centerSlidePercentage={30}
                dynamicHeight
                emulateTouch
                // infiniteLoop
                // interval={1000}
                // // labels={}
                // showStatus={false}
                // showIndicators={false}
                // showThumbs={false}
                // transitionTime={500}
                width="auto"
                thumbWidth={10}
            >
                <CarouselItem onChange={(f) => alert('Hola')}>
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQUGLBy5YD016Xc4Jjs5jLRP5cj1vpXcbxA&usqp=CAU" />
                    {/* <p className="legend">Legend 1</p> */}
                </CarouselItem>
                <CarouselItem>
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DQiAl0ETj7pjJGVFTFO29ekCdqh0PXQcMQ&usqp=CAU" />
                    {/* <p className="legend">Legend 2</p> */}
                </CarouselItem>
                <CarouselItem>
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhKx5Ih6cPa28wn-yBSuNtcoknWYXeQdz-A&usqp=CAU" />
                    {/* <p className="legend">Legend 3</p> */}
                </CarouselItem>
                <CarouselItem>
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhKx5Ih6cPa28wn-yBSuNtcoknWYXeQdz-A&usqp=CAU" />
                    {/* <p className="legend">Legend 3</p> */}
                </CarouselItem>
                <CarouselItem>
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhKx5Ih6cPa28wn-yBSuNtcoknWYXeQdz-A&usqp=CAU" />
                    {/* <p className="legend">Legend 3</p> */}
                </CarouselItem>
                <CarouselItem>
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhKx5Ih6cPa28wn-yBSuNtcoknWYXeQdz-A&usqp=CAU" />
                    {/* <p className="legend">Legend 3</p> */}
                </CarouselItem>
                <CarouselItem>
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhKx5Ih6cPa28wn-yBSuNtcoknWYXeQdz-A&usqp=CAU" />
                    {/* <p className="legend">Legend 3</p> */}
                </CarouselItem>
                <CarouselItem>
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhKx5Ih6cPa28wn-yBSuNtcoknWYXeQdz-A&usqp=CAU" />
                    {/* <p className="legend">Legend 3</p> */}
                </CarouselItem>
                <CarouselItem>
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhKx5Ih6cPa28wn-yBSuNtcoknWYXeQdz-A&usqp=CAU" />
                    {/* <p className="legend">Legend 3</p> */}
                </CarouselItem>
            </Carousel>
    )
};

export default Carousel1;