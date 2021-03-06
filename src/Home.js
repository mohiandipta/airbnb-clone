import React from 'react';
import './Home.css'
import Banner from './components/Banner'
import Card from './components/Card'
// ES7 snippets to do 'rfc'


const Home = () => {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
                    title="10 bedroom resort with pool and bbq near dhaka"
                    description="Aronnobash Resort is a cozy 10 bedroom resort with a large swimming pool, barbecue facilities, and a spacious outdoor with lots of gaming facilities for both children and adults. A spot perfect for staycation with your friends and family or for a picnic accommodating up to 500 guests. The place is located in an easy to reach area very near to Dhaka, making it a good choice for a destination wedding. We offer a wide variety of local cuisine and snacks for fulfilling meal and ensure 24/7 service."
                    price="$32/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
                    title="10 bedroom resort with pool and bbq near dhaka"
                    description="Aronnobash Resort is a cozy 10 bedroom resort with a large swimming pool, barbecue facilities, and a spacious outdoor with lots of gaming facilities for both children and adults. A spot perfect for staycation with your friends and family or for a picnic accommodating up to 500 guests. The place is located in an easy to reach area very near to Dhaka, making it a good choice for a destination wedding. We offer a wide variety of local cuisine and snacks for fulfilling meal and ensure 24/7 service."
                    price="$32/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
                    title="10 bedroom resort with pool and bbq near dhaka"
                    description="Aronnobash Resort is a cozy 10 bedroom resort with a large swimming pool, barbecue facilities, and a spacious outdoor with lots of gaming facilities for both children and adults. A spot perfect for staycation with your friends and family or for a picnic accommodating up to 500 guests. The place is located in an easy to reach area very near to Dhaka, making it a good choice for a destination wedding. We offer a wide variety of local cuisine and snacks for fulfilling meal and ensure 24/7 service."
                    price="$32/night"
                />
            </div>
            <div className="home__section-1">
                <Card
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-2961085/original/3c072b1e-69ea-4baf-ad7e-0cdbfe75129f.jpeg?im_w=1200"
                    title="10 bedroom resort with pool and bbq near dhaka"
                    description="Aronnobash Resort is a cozy 10 bedroom resort with a large swimming pool, barbecue facilities, and a spacious outdoor with lots of gaming facilities for both children and adults. A spot perfect for staycation with your friends and family or for a picnic accommodating up to 500 guests. The place is located in an easy to reach area very near to Dhaka, making it a good choice for a destination wedding. We offer a wide variety of local cuisine and snacks for fulfilling meal and ensure 24/7 service."
                    price="$32/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/4a5db842-d1f9-48dc-b06e-3d1e56e2dd33.jpg?im_w=1200"
                    title="10 bedroom resort with pool and bbq near dhaka"
                    description="Aronnobash Resort is a cozy 10 bedroom resort with a large swimming pool, barbecue facilities, and a spacious outdoor with lots of gaming facilities for both children and adults. A spot perfect for staycation with your friends and family or for a picnic accommodating up to 500 guests. The place is located in an easy to reach area very near to Dhaka, making it a good choice for a destination wedding. We offer a wide variety of local cuisine and snacks for fulfilling meal and ensure 24/7 service."
                    price="$32/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/eb9449fa-b7ba-4ad4-8d4c-95240cb1546c.jpg?im_w=1200"
                    title="10 bedroom resort with pool and bbq near dhaka"
                    description="Aronnobash Resort is a cozy 10 bedroom resort with a large swimming pool, barbecue facilities, and a spacious outdoor with lots of gaming facilities for both children and adults. A spot perfect for staycation with your friends and family or for a picnic accommodating up to 500 guests. The place is located in an easy to reach area very near to Dhaka, making it a good choice for a destination wedding. We offer a wide variety of local cuisine and snacks for fulfilling meal and ensure 24/7 service."
                    price="$32/night"
                />
            </div>
        </div>
    );
}

export default Home;
