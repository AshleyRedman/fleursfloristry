import type { Testimonial as T } from '../types';
import Testimonial from '../components/Testimonial';
import Container from '../components/Container';

const testimonials: T[] = [
    {
        body: 'Thank you so much for doing our wedding flowers and Button holes they were absolutely beautiful  Great service throughout, when I needed to add on extras at the last minute as I forgot you were brilliant so helpful we cant thank you enough emily with my nan passing suddenly she wanted me to find some one passionate and local to do my flowers for me my nan would be so so proud of the flowers you did for us she would be blown away I  Would definitely recommend you to anyone looking for a lovely flowers and a friendly service you were amazing we cant thank you enough xxx',
        author: 'Melissa Tobias',
        image: { src: 'Melissa_Tobias_p9u1db', alt: 'Melissa Tobias' },
        link: 'https://www.facebook.com/melissa7777?__cft__[0]=AZUjEQBmm1xzu6L1eWvc4E75Ko7HabO1XZ5Lu2cvbS341gJjCXrh-ykEM9lmBlkWYsGqoroGqX54QZfLrvZXLKQvoD3R-zGAz9BY7_f5o6KA9g&__tn__=-]C%2CP-R'
    },
    {
        body: "Update! Now the wedding is over I just can't thank Emily enough for all her hard work her flowers were stunning the registrar even touched them thinking the were real!  Such a talented lady you really made my wedding! After speaking to many florists I just couldnt find someone who could create what I wanted, The minute I started speaking to Emily that all changed. She is so creative and intuitive I have just seen my bouquet and its perfect. I cant wait to see the rest of her creations for my wedding, I would recommend her to anyone. She is so kind, professional and thorough, while keeping you included during every step of the process. I cant thank you enough Emily xx",
        author: 'Hannah Smith',
        image: { src: 'Hannah_Smith_rfq95e', alt: 'Hannah_Smith' },
        link: 'https://www.facebook.com/melissa7777?__cft__[0]=AZUjEQBmm1xzu6L1eWvc4E75Ko7HabO1XZ5Lu2cvbS341gJjCXrh-ykEM9lmBlkWYsGqoroGqX54QZfLrvZXLKQvoD3R-zGAz9BY7_f5o6KA9g&__tn__=-]C%2CP-R'
    },
    {
        body: 'I cant recommend Fleurs Floristry enough - she made all our bouquets, buttonholes and some decorative pieces for our abroad wedding and they were PERFECT! She listened to exactly what I wanted and everyone was so shocked when I said they were artificial! They travelled so well there and back which means I can keep them forever if anyone is debating getting these I can promise you wont regret it - the pictures really dont do them justice x',
        author: 'Jenna Knutsen',
        image: { src: 'Jenna_Knutsen_pcrstn', alt: 'Jenna Knutsen' },
        link: 'https://www.facebook.com/melissa7777?__cft__[0]=AZUjEQBmm1xzu6L1eWvc4E75Ko7HabO1XZ5Lu2cvbS341gJjCXrh-ykEM9lmBlkWYsGqoroGqX54QZfLrvZXLKQvoD3R-zGAz9BY7_f5o6KA9g&__tn__=-]C%2CP-R'
    },
    {
        body: 'I cant recommend Emily enough she certainly went above and beyond to make sure everything was perfect for my wedding day right down to matching the lace for my bouquet to my girls bridesmaids dresses Emily is so lovely and really easy to speak to with your ideas thank you Emily everything was perfect x',
        author: 'Lynne-Marie Benzie',
        image: { src: 'Lynne-Marie_Benzie_a3vmgk', alt: 'Lynne-Marie Benzie' }
    },
    {
        body: "I asked Emily for some silk flowers for my wedding cake, nothing was to much trouble, she replied straight away and was very efficient. She ordered the flowers straight away and they were put together very quickly, they look beautiful and she has done an amazing job. She delivered them to my mums house promptly and arranged the box with numbers so we know where to place the flowers, it was presented very well. She is brilliant and would definitely recommend her. Can't wait to have the flowers as part of my big day. Thank you so much",
        author: 'Laura West',
        image: { src: 'Laura_West_hoedar', alt: 'Laura West' }
    },
    {
        body: "This may be the most genuine review I've ever given and also the most heart renching. It's taken me 3 months to write this review but I promised I would and I'm now ready! This beautiful lady deserves it!!! Emily was nothing but amazing!! Nothing I asked of her was too much, daily messages with changes to style and plan, constant questions adding more into the pieces and asking for extras all the way until collection day. The arrangements Emily made for us were breath taking to say the least. When she initially sent me photos of her creations I genuinly sat and cried looking at them thinking how long I had dreamed of these pieces and now not only were they a reality but they were so much better than I could have ever dreamed or wished for. We went to pick up the arrangments and some how they were even more beautiful in person than they were in the photos. Emily welcomed myself and my maid of honor into her home and we spoke as if we'd known each other for a life time despite being complete strangers. Everything was so perfect and I promised her I'd get so many photos of them on our special day. Unfortunately our special day never happened and was cancelled last minute. Despite all of this Emily went out of her way to help me find their new owner who could cherish them the way that they deserved desoite having nothing to gain from this. I kept one table arrangement as I couldn't bare to part with them all, they were after all my inner little girls dream flowers for her dream day. I really want to thank you Emily for all of your hard work and to show my appreciation for everything you did for us during the build up to the wedding and therefor after! You are truly a beautiful lady inside and out with an incredible talent in what you do. You're going to go far and I hope you get the support and feedback that you deserve from all of your customers, it has been an honor working along side you, please never stop doing what you do. If anyone is looking for a florist who listens, is passionate about what they do and treats everyone as an individual planning one of the biggest days of their lives and makes you feel special and heard no matter how many time she's done it then Fleurs Floristry is the one for you. Thank you for everything, I'll keep this one arrangement for the rest of my life in honor of your commitment and passion into making our day so special!",
        author: 'Amber Burdette',
        image: { src: 'Amber_Burdette_okqzav', alt: 'Amber Burdette' }
    },
    {
        body: 'I cant thank Emily enough for the amazing flowers she made for our wedding. And the best part is we get to keep them!! The only thing I knew I wanted about the flowers were the colours, other than that I hadnt a clue what I was doing. I told Emily to put her spin on it (I love a surprise anyway). When the flowers arrived on my wedding day I was blown away. They were honestly so beautiful and everything I could have ever hoped for. Emily stayed with me for the morning of my wedding as her best friend was also my makeup artist and I can honestly say it made me wedding morning really special. Thank you so much for everything and I would recommend you to every bride!',
        author: 'China Simpson',
        image: { src: 'China_Simpson_kyfoxu', alt: 'China Simpson' },
        link: 'https://www.facebook.com/melissa7777?__cft__[0]=AZUjEQBmm1xzu6L1eWvc4E75Ko7HabO1XZ5Lu2cvbS341gJjCXrh-ykEM9lmBlkWYsGqoroGqX54QZfLrvZXLKQvoD3R-zGAz9BY7_f5o6KA9g&__tn__=-]C%2CP-R'
    },
    {
        body: 'I had been looking for a florist that made bespoke Bouquet for my wedding. I found Emily online and she couldve been any more helpful. I received amazing service and she adapted to all my needs making my flowers a beautiful part of my day. Will definitely not only be using her again for other event but will be recommending her.',
        author: 'Faye Asamoah',
        image: { src: 'Faye_Asamoah_bkdiuk', alt: 'Faye Asamoah' },
        link: 'https://www.facebook.com/melissa7777?__cft__[0]=AZUjEQBmm1xzu6L1eWvc4E75Ko7HabO1XZ5Lu2cvbS341gJjCXrh-ykEM9lmBlkWYsGqoroGqX54QZfLrvZXLKQvoD3R-zGAz9BY7_f5o6KA9g&__tn__=-]C%2CP-R'
    },
    {
        body: 'I have just had my items delivered by Emily, and I am blown away, they are beautiful. Emily went out of her way for me, driving from Leicester to Bolton as well, thank you so so much they are amazing, I cant wait for everyone to see them at the wedding! Xx',
        author: 'Natalie Dickinson',
        image: { src: 'Natalie_Dickinson_y7mspr', alt: 'Natalie Dickinson' }
    },
    {
        body: 'Thank you so much for doing our wedding flowers, they was beautiful . Great service, from booking all the way through to you setting them up at our reception venue, nothing was too much trouble and you was always happy to help. Would definitely recommend you to anyone looking for a lovely flowers and a friendly service. Thanks again',
        author: 'Leanne McManus',
        image: { src: 'Leanne_McManus_xden2t', alt: 'Leanne McManus' }
    },
    {
        body: 'Hi! We just wanted to say a huge thank you. They day went so quickly, but we really appreciated you running around dropping all the flowers off to the right places. They were just so beautiful and perfect. The theme was not an easy one and you did such an amazing job. Will never forget how supportive you have been throughout the whole wedding planning and wedding day.',
        author: 'Hazel Andrews',
        image: { src: 'Hazel_Andrews_bertbk', alt: 'Hazel Andrews' }
    },
    {
        body: 'After a very bad experience with a florist in Syston I decided to contact Fleurs Floristry to see if they could help with a friends wedding posey, within minutes I had a response from Emily who was extremely helpful, suggested options for me & sent me pictures of what was possible to make, it was a last minute request & she couldnt have been more helpful & accommodating, we agreed a style & she made it & delivered it directly to my door the very next day!! Absolutely brilliant service & cannot recommend enough! Thank you Emily, my friend loved her posey & had a fabulous wedding day! Xx',
        author: 'Joanna Burrows',
        image: { src: 'Joanna_Burrows_wwvn05', alt: 'Joanna Burrows' }
    },
    {
        body: 'I have just had my items delivered by Emily, and I am blown away, they are beautiful. Emily went out of her way for me, driving from Leicester to Bolton as well, thank you so so much they are amazing, I cant wait for everyone to see them at the wedding! Xx',
        author: 'Natalie Kimblin'
    },
    {
        body: 'I asked for a bespoke make for my grandparents place of rest. Something wintery but also that would be okay in spring time too was pretty much all I gave Emily to work with and she created the most beautiful faux arrangement that looks absolutely stunning above my nana and grandads headstone. Thankyou so much for creating something so beautiful and special.',
        author: 'Samantha Munton'
    },
    {
        body: "I have known Emily through making her wedding cake. She is the most amazing person and nothing is too much trouble for her. Very easy to talk to. Friendly and professional in everything she does. She's just made an arrangement for me that is so beautiful. Thank you so much see you soon xx",
        author: 'Dawn Lesley'
    },
    {
        body: 'My flowers I received via post are absolutely stunning! Emily went above and beyond and listen to even the little details of my request. I will definitely be coming back for other occasions. Thank you! x',
        author: 'Sapphire Maddie Hill'
    },
    {
        body: 'Emily produced a fabulous flower arrangement for my mum in laws 96th birthday plus she organised balloons to decorate the function room. Very impressed as she delivered to the venue. Thankyou so very much',
        author: 'Denise Meadwell'
    },
    {
        body: 'Absolute NO BRAINER! Shop here. Fleurs Floristry created me EXACTLY what I asked for and it blew me away. And the added bonus… I can keep it and use it whenever I want. Absolutely brilliant idea.',
        author: 'Victoria Cullingham'
    },
    {
        body: 'My flower girls baskets were absolutely beautiful just how I expected them to be thank you so much I will deffinetly be recommending fleurs floristry.x',
        author: 'Amy-Marie Mcquillan'
    }
];

export default function Testimonials() {
    return (
        <>
            <section className='my-8 lg:my-16'>
                <Container>
                    <h3 className='text-center text-4xl font-serif text-peach-default font-medium'>
                        Reviews & Comments
                    </h3>
                </Container>
            </section>
            <Container className='space-y-8 lg:space-y-12 mb-12'>
                {testimonials.map((t, i) => (
                    <Testimonial key={i} alignment={i % 2 === 0 ? 'right' : 'left'} {...t} />
                ))}
            </Container>
        </>
    );
}
